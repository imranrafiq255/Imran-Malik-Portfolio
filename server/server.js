const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mohammedimranrafique@gmail.com",
      pass: "toboxtdbrpteeqxb",
    },
  });

  const mailOptions = {
    from: email,
    to: "mohammedimranrafique@gmail.com",
    subject: "Contact for hiring",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({
        success: false,
        message: error.toString(),
      });
    }
    return res.status(200).json({
      success: true,
      message: "Email sent: " + info.response,
    });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
