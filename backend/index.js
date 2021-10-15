const express = require("express");
const cors = require("cors");

// Creating App
const app = express();
const port = 5000;
app.use(cors());
app.use(express.json());

// Router
const router = express.Router();

// Send OTP Route
router.post("/send_otp", (req, res) => {
  try {
    const { mobile } = req.body;

    // Function to send OTP

    return res.status(200).send({ success: "OTP Sent" });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Verfiy OTP Route
router.post("/verify_otp", (req, res) => {
  try {
    const { mobile, otp } = req.body;

    // Function to verify OTP

    return res.status(200).send({ success: "OTP is correct" });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Login Using Google
router.post("/login_google", (req, res) => {
  try {
    const { authToken } = req.body;

    // Function to login threw google

    return res.status(200).send({ success: "User Verified" });
  } catch (error) {
    res.status(500).send({ error: "Some error occurred" });
  }
});

// Listening
app.listen(port, () => {
  console.log(`Login Page Backend is listening at http://localhost:${port}`);
});
