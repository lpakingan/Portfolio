import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";
import banner from "../assets/banners/contact_pic.png";

const styles = {
  background: {
    background: "linear-gradient(#FAE2FF, #B6A6CA)",
    padding: "2rem",
    margin: "1rem auto",
    borderRadius: "3rem",
    width: "70%",
  },
  font: {
    fontFamily: "Outfit",
    textAlign: "center",
  },
  headingStyle: {
    fontSize: "80px",
  },
  paragraphStyle: {
    fontSize: "25px",
    padding: "0 5rem",
  },
  inputStyle: {
    fontFamily: "Outfit",
    textAlign: "center",
    width: "30%",
    borderRadius: "0.5rem",
    border: "none",
    fontSize: "15px",
  },
  messageStyle: {
    fontFamily: "Outfit",
    height: "5rem",
    width: "30%",
    fontSize: "15px",
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
    fontSize: "15px",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
  },
  bannerStyle: {
    display: "flex",
    width: "40%",
    height: "50%",
    margin: "auto",
    padding: "2rem",
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
        <img
          class="contact_banner"
          style={styles.bannerStyle}
          src={banner}
          alt="Contact Me"
        />
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
