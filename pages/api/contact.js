import nodemailer from "nodemailer";
import { validateContactFormInput } from "../../utils/validation.helpers";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract Message Details
    const { firstName, lastName, email, subject, message } = req.body;

    // Validate Message Details (TSK: Add more validation!)
    const { msg, isValid } = validateContactFormInput(req.body);
    if (!isValid) return res.status(422).json({ message: msg });

    // Create a transporter email client
    const transporter = nodemailer.createTransport({
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: process.env.CONTACT_EMAIL_USERNAME,
        pass: process.env.CONTACT_EMAIL_PASSWORD,
      },
      //       secure: true,
    });

    // Format the data
    const mailData = {
      from: process.env.CONTACT_EMAIL_USERNAME,
      to: "will@bulletproof-code.com",
      subject:
        "New Message - Bulletproof Blog Contact Form Submission Received",
      text:
        "Subject: " +
        subject +
        "\nMessage: " +
        message +
        "\nName: " +
        firstName +
        " " +
        lastName +
        "\n" +
        email,
    };

    // Send the mail && catch any errors
    try {
      const info = await transporter.sendMail(mailData);

      // Success!
      return res.status(201).json({ message: msg, info: info });
    } catch (err) {
      return res.status(500).json({
        message: "Failed to Send Email. Please try again.",
        error: err.message,
      });
    }
  }
}
