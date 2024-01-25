import React from "react";
import aboutMeImage from "../assets/aboutme_pic.png";
import banner from "../assets/banners/about_pic.png";

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
    border: "0.5rem solid #DBCEFF",
    display: "flex",
    width: "50%",
    height: "50%",
    margin: "0 auto",
  },
  bannerStyle: {
    display: "flex",
    width: "40%",
    height: "50%",
    margin: "auto",
    padding: "2rem",
  },
};

export default function About() {
  return (
    <section class="about_me" style={styles.background}>
      <div id="about_me" style={styles.font}>
        <img
          class="welcome"
          style={styles.bannerStyle}
          src={banner}
          alt="Welcome Banner"
        />
        <p style={styles.paragraphStyle}>
          My name is Liana Pakingan, and this is my working portfolio of various
          front-end, back-end, and full-stack projects I have completed.{" "}
          <br></br> <br></br>
          To give some background about myself, I graduated from the University
          of California, Irvine (UCI) in 2020 with my Bachelor's degree in
          Neurobiology. I then went to the University of Southern California
          (USC) and graduated in 2022 with my Master's degree in Neuroimaging
          and Informatics.
          <br></br> <br></br>I have been involved in neurodegenerative research
          the majority of my academic career, with my main concentration in
          Alzheimer's disease. In my latest career, I was a Human Brain Imaging
          Research Coordinator, where I was conducting outreach for,
          standardizing and assessing quality of large electromagnetic brain
          datasets. As someone who understands the need to be proficient when it
          comes to handling big data, especially in research studies, I most
          recently have received certification in computer programming
          techniques such as JavaScript and database management through SQL. You
          can see examples of this in 'Portfolio' tab. Through these new-found
          proficiencies, I believe I can now excel in a data-driven or web
          development role.
          <br></br> <br></br>
          Thank you for taking the time to check my portfolio out! If you would
          like to contact me, feel free to reach out on the 'Contact Me' page.
          I'm always looking for new projects to collaborate on!
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
