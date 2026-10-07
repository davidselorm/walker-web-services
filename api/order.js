import { Resend } from 'resend';

export default async function handler(req, res) {
  // Allow POST requests only
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, phone, email, serviceType, message } = req.body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: 'Name and phone number are required.' });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.TO_EMAIL || 'walkerwebservices1@gmail.com';

    if (!resendApiKey) {
      console.warn('RESEND_API_KEY is not configured in Vercel environment variables.');
      return res.status(500).json({ 
        error: 'Email configuration missing. Please add RESEND_API_KEY to your Vercel Environment Variables.' 
      });
    }

    const resend = new Resend(resendApiKey);
    const emailSubject = `🚀 New Website Order: ${name} (${serviceType || 'Website'})`;

    const cleanPhone = phone.replace(/[^0-9]/g, '');

    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 16px; background-color: #ffffff;">
        <div style="background-color: #0066FF; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 24px;">
          <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;">Walker Web Services</h1>
          <p style="color: #e0edff; margin: 4px 0 0 0; font-size: 13px;">New Client Website Order Received</p>
        </div>

        <h2 style="color: #0f172a; font-size: 18px; margin-top: 0; margin-bottom: 16px;">Client & Order Details</h2>

        <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 14px;">
          <tbody>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 140px;">Client Name:</td>
              <td style="padding: 10px 0; color: #0f172a; font-weight: bold;">${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone / WhatsApp:</td>
              <td style="padding: 10px 0; color: #0f172a;">
                <a href="tel:${phone}" style="color: #0066FF; text-decoration: none; font-weight: 600;">${phone}</a>
                &nbsp;|&nbsp;
                <a href="https://wa.me/${cleanPhone}" style="color: #25D366; text-decoration: none; font-weight: 600;">Open in WhatsApp</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Client Email:</td>
              <td style="padding: 10px 0; color: #0f172a;">${email ? `<a href="mailto:${email}" style="color: #0066FF; text-decoration: none;">${email}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Website Needed:</td>
              <td style="padding: 10px 0; color: #0066FF; font-weight: bold;">${serviceType || 'Business & Corporate Website'}</td>
            </tr>
          </tbody>
        </table>

        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
          <h3 style="color: #475569; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px 0;">Project Notes / Details</h3>
          <p style="color: #1e293b; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message || 'No additional notes provided by client.'}</p>
        </div>

        <div style="text-align: center; padding-top: 16px; border-top: 1px solid #f1f5f9; color: #94a3b8; font-size: 12px;">
          <p style="margin: 0;">Sent directly from your Walker Web Services website.</p>
        </div>
      </div>
    `;

    let sendResult = await resend.emails.send({
      from: 'Walker Web Services <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: email || undefined,
      subject: emailSubject,
      html: emailHtml,
    });

    // Auto-recovery: If Resend free account restricts sending only to registered email
    if (sendResult.error && sendResult.error.message?.includes('You can only send testing emails to your own email address')) {
      const match = sendResult.error.message.match(/\(([^)]+)\)/);
      const fallbackRecipient = match ? match[1] : null;
      if (fallbackRecipient) {
        console.warn(`Resend testing tier redirecting to account email: ${fallbackRecipient}`);
        sendResult = await resend.emails.send({
          from: 'Walker Web Services <onboarding@resend.dev>',
          to: fallbackRecipient,
          replyTo: email || undefined,
          subject: emailSubject,
          html: emailHtml,
        });
      }
    }

    if (sendResult.error) {
      console.error('Resend error:', sendResult.error);
      return res.status(500).json({ error: sendResult.error.message || 'Failed to send email' });
    }

    return res.status(200).json({ success: true, id: sendResult.data?.id });
  } catch (err) {
    console.error('Server error in /api/order:', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
