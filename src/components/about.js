import React from "react";
// import aboutMeImage from "../assets/aboutme_pic.png";
import aboutMeImage from "../assets/portfolio_pic.jpg";
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
    // background: "linear-gradient(#FAE2FF, #B6A6CA)",
    border: "0.5rem solid #DBCEFF",
    display: "flex",
    width: "40%",
    height: "40%",
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
          projects I have completed{" "}
          <br></br> <br></br>
          To give some background about myself, I graduated from the University
          of California, Irvine (UCI) in 2020 with my Bachelor's degree in
          Neurobiology. I then went to the University of Southern California
          (USC) and graduated in 2022 with my Master's degree in Neuroimaging
          and Informatics. I am currently expanding my horizons by pursuing a 
          second Master’s degree in Data Analytics at San José State University. 
          <br></br> <br></br>
          My academic background is in neurodegenerative research with a concentration in Alzheimer's disease. 
          As a Human Brain Imaging Research Coordinator, I conducted outreach and assessed the quality of large electromagnetic brain datasets. 
          Through my research roles, I discovered my passion for working with data and improving data quality to support better conclusions. 
          These experiences ultimately showed me how research and data analytics can complement each other: research provides the real-world questions and domain context, 
          while data analytics makes findings more reliable and reproducible.
          <br></br> <br></br>
          Currently, I am contracted with DataAnnotation as an AI Data Annotator, reviewing model responses for accuracy, 
          consistency, and quality. This role has reinforced my belief that AI is a practical tool that will 
          meaningfully shape both scientific research and data analytics by streamlining analysis and improving 
          access to insights.
          <br></br> <br></br>
          Thank you for taking the time to check my out my portfolio. If you
          would like to contact me, feel free to reach out on the 'Contact Me'
          page. I'm always looking for new opportunities!
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
