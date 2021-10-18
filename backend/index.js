const express = require("express");
const cors = require("cors");

// Creating App
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// Send OTP Route
app.post("/send_otp", (req, res) => {
  try {
    const { mobile } = req.body;

    // Function to send OTP

    return res.status(200).send({ success: "OTP Sent", mobile });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Verfiy OTP Route
app.post("/verify_otp", (req, res) => {
  try {
    const { mobile, otp } = req.body;

    // Function to verify OTP
    if (otp !== "1234")
      return res.status(400).send({ error: "OTP is incorrect", mobile, otp });

    return res.status(200).send({ success: "OTP is correct", mobile, otp });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Login Using Google
app.post("/login_google", (req, res) => {
  try {
    const { authToken } = req.body;

    // Function to login threw google

    return res.status(200).send({ success: "User Verified", authToken });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Listening
app.listen(port, () => {
  console.log(`Login Page Backend is listening at http://localhost:${port}`);
});
