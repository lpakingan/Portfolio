import React from "react";
import aboutMeImage from "../assets/aboutme_pic.png";

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
    paddingBottom: "5rem",
    padding: "0 5rem",
  },
  pictureStyle: {
    borderRadius: "50%",
    background: "linear-gradient(#FAE2FF, #B6A6CA)",
    border: "0.5rem solid #B6A6CA",
    display: "flex",
    width: "50%",
    height: "50%",
    margin: "0 auto",
  },
};

export default function About() {
  return (
    <section class="about_me" style={styles.background}>
      <div id="about_me" style={styles.font}>
        <h1 style={styles.headingStyle}>Welcome to my Portfolio!</h1>
        <p style={styles.paragraphStyle}>
          Hello! This is my working portfolio of all my projects and assignments
          I have completed during a coding bootcamp I am currently attending.{" "}
          <br></br> <br></br>
          My name is Liana! To give some background about myself, I graduated
          from the University of California, Irvine (UCI) in 2020 with my
          Bachelor's degree in Neurobiology. I then went to the University of
          Southern California (USC) and graduated in 2022 with my Master's
          degree in Neuroimaging and Informatics. <br></br> <br></br>I have been
          involved in neurodegenerative research the majority of my academic
          career, with my main concentration in Alzheimer's disease. I am
          excited to learn how to code and how to apply it in a research
          setting!
        </p>
        <img
          class="about_me_picture"
          style={styles.pictureStyle}
          src={aboutMeImage}
          alt="About Me"
        />
      </div>
    </section>
  );
}
