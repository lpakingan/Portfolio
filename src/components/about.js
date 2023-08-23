import React from "react";
import aboutMeImage from "../assets/aboutme_pic.png";

const styles = {
  background: {
    background: "#E2D0BE",
  },
  headingStyle: {
    fontSize: "100px",
  },
};

export default function About() {
  return (
    <section class="about_me" style={styles.background}>
      <div id="about_me">
        <h1 style={styles.headingStyle}>About Me</h1>
        <p>
          Welcome to my page! This is my working portfolio of all my
          projects/assignments I will be completing during a coding bootcamp I
          am currently attending. My name is Liana! To give some background
          about myself, I graduated from the University of California, Irvine
          (UCI) in 2020 with my Bachelor's degree in Neurobiology. I then went
          to the University of Southern California (USC) and graduated in 2022
          with my Master's degree in Neuroimaging and Informatics. I have been
          involved in neurodegenerative research the majority of my academic
          career, with my main concentration in Alzheimer's disease. I am
          excited to learn how to code and how to apply it in a research
          setting!
        </p>
        <img class="about_me_picture" src={aboutMeImage} alt="About Me" />
      </div>
    </section>
  );
}
