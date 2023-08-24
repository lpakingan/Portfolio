import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

const styles = {
  background: {
    background: "linear-gradient(#E1DEE9, #D4BEBE)",
    padding: "0",
    margin: "0",
  },
  font: {
    fontFamily: "Outfit",
    textAlign: "center",
  },
  headingStyle: {
    fontSize: "100px",
  },
  paragraphStyle: {
    fontSize: "25px",
    paddingBottom: "5rem",
    padding: "0 5rem",
  },
  inputStyle: {
    fontFamily: "Outfit",
    textAlign: "center",
    width: "30%",
    borderRadius: "0.5rem",
    border: "none",
  },
  messageStyle: {
    fontFamily: "Outfit",
    height: "5rem",
    width: "30%",
    verticalAlign: "top",
    textAlign: "left",
    borderRadius: "0.5rem",
    border: "none",
  },
  buttonStyle: {
    padding: "0.5rem",
    fontFamily: "Outfit",
    color: "black",
    background: "#A09ABC",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  },
};

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage("Make sure you enter your name and email!");
      return;
    }
    if (!message) {
      setErrorMessage("Please enter a message!");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
    setErrorMessage("Message successfully sent!");
  };

  return (
    <section style={styles.background}>
      <div style={styles.font}>
        <h1 style={styles.headingStyle}>Contact Me!</h1>
        <form className="form">
          <p style={styles.paragraphStyle}>Name</p>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Name"
            style={styles.inputStyle}
          />
          <p style={styles.paragraphStyle}>Email</p>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
            style={styles.inputStyle}
          />
          <p style={styles.paragraphStyle}>Message</p>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="input"
            placeholder="Message"
            style={styles.messageStyle}
          />
          <p></p>
          <button
            type="button"
            style={styles.buttonStyle}
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </form>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
