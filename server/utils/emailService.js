
import nodemailer from 'nodemailer';

// Create a transporter using a dummy account for testing (Ethereal)
// or your real credentials if provided.
// Since no env vars for email are present, we log the email to console
// and attempt to use Ethereal if possible, or just fail gracefully.
const sendEmail = async (to, subject, text) => {
    console.log(`[EMAIL MOCK] Sending email to ${to}`);
    console.log(`[EMAIL MOCK] Subject: ${subject}`);
    console.log(`[EMAIL MOCK] Body: ${text}`);

    // In a real app, you would use:
    /*
    const transporter = nodemailer.createTransport({
        service: 'gmail', // or other
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: '"PolicyPulse AI" <noreply@policypulse.ai>',
        to,
        subject,
        text
    });
    */

    // For demonstration purposes, we will rely on the console log
    // as we don't have valid SMTP credentials.
    return true;
};

export default sendEmail;
