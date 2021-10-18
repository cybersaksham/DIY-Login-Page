import React, { useEffect } from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";

export default function LoginPage(props) {
  const { name, setName } = props;
  const history = useHistory();
  const HOST = "http://localhost:5000/";
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

  const showError = (txt) => {
    document.getElementById("errorText").innerText = txt;
    if (localStorage["alertTime"] != null)
      clearTimeout(localStorage["alertTime"]);
    let s = setTimeout(() => {
      document.getElementById("errorText").innerText = "";
    }, 2500);
    localStorage["alertTime"] = s;
  };

  const checkOTPInput = () => {
    const otpInputs = document.getElementsByClassName("otpInputField");
    for (let i = 0; i < Array.from(otpInputs).length; i++) {
      const val = otpInputs[i].value;
      if (val === "") return i;
    }
    return Array.from(otpInputs).length - 1;
  };

  const changeFocus = async () => {
    const otpInputs = document.getElementsByClassName("otpInputField");
    otpInputs[checkOTPInput()].focus();
    if (otpInputs[otpInputs.length - 1].value !== "") {
      let otpText = "";
      Array.from(otpInputs).forEach((el) => {
        otpText += el.value;
        el.value = "";
      });
      const response = await fetch(HOST + "verify_otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mobile: document.getElementById("mobInp").value,
          otp: otpText,
        }),
      });
      const json = await response.json();
      changeFocus();
      if (!json.error) setName(document.getElementById("mobInp").value);
      else showError(json.error);
    }
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

  const sendOtp = async (e) => {
    e.preventDefault();
    const otpInputs = document.getElementsByClassName("otpInputField");
    Array.from(otpInputs).forEach((el) => {
      el.value = "";
    });
    if (document.getElementById("mobInp").value === "") {
      showError("Enter correct mobile");
      return;
    }
    const response = await fetch(HOST + "send_otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mobile: document.getElementById("mobInp").value }),
    });
    const json = await response.json();
    if (!json.error) {
      Array.from(otpInputs).forEach((el) => {
        el.disabled = false;
      });
      document.getElementById("submitBtn").innerText = "Resend OTP";
    } else {
      showError(json.error);
    }
  };

  const responseGoogle = (response) => {
    setName(response.profileObj.name);
  };

  useEffect(() => {
    if (name !== "") history.push("/main");
    return () => {};
  }, [name]);

  return (
    <div id="loginPage" onSubmit={sendOtp} className="authComponent">
      <h2>Login</h2>
      <p id="errorText"></p>
      <form action="" className="authForm">
        <label htmlFor="">Mobile</label>
        <input type="number" placeholder="Enter mobile number" id="mobInp" />
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
      <GoogleLogin
        clientId="758224727877-f28k6e0s5br1jgm7pctidica2a9bfl0d.apps.googleusercontent.com"
        buttonText="Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
