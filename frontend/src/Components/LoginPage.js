import React from "react";

export default function LoginPage() {
  const keyCodes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Backspace",
  ];

  const checkOTPInput = () => {
    const otpInputs = document.getElementsByClassName("otpInputField");
    for (let i = 0; i < Array.from(otpInputs).length; i++) {
      const val = otpInputs[i].value;
      if (val === "") return i;
    }
    return Array.from(otpInputs).length - 1;
  };

  const changeFocus = () => {
    const otpInputs = document.getElementsByClassName("otpInputField");
    otpInputs[checkOTPInput()].focus();
  };

  const keyDown = (e) => {
    e.preventDefault();
    const key = e.key;
    if (!keyCodes.includes(key)) return;
    const otpInputs = document.getElementsByClassName("otpInputField");
    if (key !== "Backspace") {
      if (e.target.value === "") e.target.value = Number(e.key);
    } else {
      if (e.target.value !== "") e.target.value = "";
      else {
        let i = checkOTPInput();
        if (i > 0) otpInputs[i - 1].value = "";
      }
    }
    changeFocus();
  };

  const sendOtp = (e) => {
    e.preventDefault();
    const otpInputs = document.getElementsByClassName("otpInputField");
    Array.from(otpInputs).forEach((e) => {
      e.value = "";
    });
  };

  function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log("ID: " + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log("Name: " + profile.getName());
    console.log("Image URL: " + profile.getImageUrl());
    console.log("Email: " + profile.getEmail()); // This is null if the 'email' scope is not present.
  }

  return (
    <div id="loginPage" onSubmit={sendOtp} className="authComponent">
      <h2>Login</h2>
      <form action="" className="authForm">
        <label htmlFor="">Mobile</label>
        <input type="number" placeholder="Enter mobile number" />
        <label htmlFor="">OTP</label>
        <div id="otpInput">
          <input
            className="otpInputField"
            onFocus={() => changeFocus()}
            onKeyDown={(e) => keyDown(e)}
            type="number"
            disabled={true}
          />
          <input
            className="otpInputField"
            onFocus={() => changeFocus()}
            onKeyDown={(e) => keyDown(e)}
            type="number"
            disabled={true}
          />
          <input
            className="otpInputField"
            onFocus={() => changeFocus()}
            onKeyDown={(e) => keyDown(e)}
            type="number"
            disabled={true}
          />
          <input
            className="otpInputField"
            onFocus={() => changeFocus()}
            onKeyDown={(e) => keyDown(e)}
            type="number"
            disabled={true}
          />
        </div>
        <button type="submit" id="submitBtn">
          Send OTP
        </button>
      </form>
      <div className="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
  );
}
