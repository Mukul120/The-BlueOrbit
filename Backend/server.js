const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// POST route to handle form submission
app.post("/api/send-email", async (req, res) => {
    const { name, email, phone, technology, visa, location, message } = req.body;

    try {
        // Create reusable transporter using SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail", // or use custom SMTP like SendGrid
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
        console.log(process.env.EMAIL_USER)

        // Email options
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL, // your receiving email
            subject: "New Contact Form Submission",
            html: `
        <h2>New Message From Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Technology:</strong> ${technology}</p>
        <p><strong>Visa Status:</strong> ${visa}</p>
        <p><strong>Location:</strong> ${location}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        };


        await transporter.sendMail(mailOptions);
        console.log("email sent ");
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to send email." });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
