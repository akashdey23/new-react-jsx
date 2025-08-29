import React, { useEffect, useRef, useState } from "react";
import "./otp.css";

const Otp = ({ otpLength = 6 }) => {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));
  const ref = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return; // allow only 0-9 and empty

    const copyOtpFields = [...otpFields];
    copyOtpFields[index] = value;
    setOtpFields(copyOtpFields);

    if (value && index < otpLength - 1) {
      ref.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      e.preventDefault();
      const copyOtpFields = [...otpFields];
      if (otpFields[index]) {
        // delete current
        copyOtpFields[index] = "";
        setOtpFields(copyOtpFields);
      } else if (index > 0) {
        // go back
        ref.current[index - 1].focus();
        copyOtpFields[index - 1] = "";
        setOtpFields(copyOtpFields);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      ref.current[index - 1].focus();
    } else if (e.key === "ArrowRight" && index < otpLength - 1) {
      ref.current[index + 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, ""); // only digits
    if (!pasteData) return;

    const copyOtpFields = [...otpFields];
    for (let i = 0; i < otpLength; i++) {
      copyOtpFields[i] = pasteData[i] || "";
    }
    setOtpFields(copyOtpFields);

    // focus last filled
    const lastIndex = Math.min(pasteData.length, otpLength) - 1;
    if (lastIndex >= 0) ref.current[lastIndex].focus();
  };

  useEffect(() => {
    if (ref.current[0]) ref.current[0].focus();
  }, []);

  return (
    <div className="container">
      {otpFields.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          maxLength={1}
          ref={(input) => (ref.current[index] = input)}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
        />
      ))}
    </div>
  );
};

export default Otp;
