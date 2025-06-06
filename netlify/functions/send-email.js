// netlify/functions/send-email.js
const nodemailer = require('nodemailer');
exports.handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
  try {
    await transporter.sendMail({
      from: email,
      to: 'ibehchimaobi98@gmail.com',
      subject: `Contact Form Submission from ${name}`,
      text: message,
    });
    return { statusCode: 200, body: JSON.stringify({ message: 'Email sent' }) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};