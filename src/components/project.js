import React from "react";
import gameshareImage from "../assets/projects/gameshare_image.jpg";
import earthquakeImage from "../assets/projects/earthquaketracker_image.jpg";
import cssImage from "../assets/projects/cssportfolio_image.jpg";
import quizImage from "../assets/projects/codequiz_image.jpg";
import weatherImage from "../assets/projects/weatherdashboard_image.jpg";
import banner from "../assets/banners/projects_pic.png";

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
    fontSize: "100px",
  },
  projectTitle: {
    fontSize: "50px",
    fontWeight: "bold",
  },
  projectDescription: {
    fontSize: "20px",
    padding: "0 5rem",
  },
  pictureStyle: {
    border: "0.5rem solid #DBCEFF",
    width: "60%",
    flex: "1",
    height: "auto",
    boxSizing: "border-box",
    margin: "0 0 5rem 0",
  },
  bannerStyle: {
    display: "flex",
    width: "40%",
    height: "50%",
    margin: "auto",
    padding: "2rem",
  },
};

export default function Projects() {
  return (
    <section style={styles.background}>
      <div id="projects" style={styles.font}>
        <img
          class="project_banner"
          style={styles.bannerStyle}
          src={banner}
          alt="Projects"
        />

        <div class="project_display">
          <div class="project">
            <div class="project_title" style={styles.projectTitle}>
              GameShare
            </div>
            <p style={styles.projectDescription}>
              An application where you can search through a free-to-play game
              database and add games to your own personal library. <br></br>
              <br></br>Uses FreeToGame API.
            </p>
            <a href="https://gameshare-97b263a86cef.herokuapp.com/">
              <img
                class="gameshare_picture"
                style={styles.pictureStyle}
                src={gameshareImage}
                alt="GameShare"
              />
            </a>
          </div>

          <div class="project">
            <div class="project_title" style={styles.projectTitle}>
              Earthquake Tracker
            </div>
            <p style={styles.projectDescription}>
              An application for finding earthquakes based on your own specific
              search criteria. <br></br>
              <br></br>Uses USGS Earthquake Catalog API and Google Maps API.
            </p>
            <a href="https://github.com/lpakingan/project-1-earthquake-tracker">
              <img
                class="earthquake_picture"
                style={styles.pictureStyle}
                src={earthquakeImage}
                alt="Earthquake Tracker"
              />
            </a>
          </div>

          <div class="project">
            <div class="project_title" style={styles.projectTitle}>
              Weather Dashboard
            </div>
            <p style={styles.projectDescription}>
              An application for finding the future weather forecast for any
              city. <br></br>
              <br></br>Uses OpenWeather API.
            </p>
            <a href="https://github.com/lpakingan/challenge-6-weather-dashboard">
              <img
                class="weather_picture"
                style={styles.pictureStyle}
                src={weatherImage}
                alt="Weather Dashboard"
              />
            </a>
          </div>

          <div class="project">
            <div class="project_title" style={styles.projectTitle}>
              Code Quiz
            </div>
            <p style={styles.projectDescription}>
              A Javascript-based timed quiz on coding.
            </p>
            <a href="https://github.com/lpakingan/challenge-4-code-quiz">
              <img
                class="quiz_picture"
                style={styles.pictureStyle}
                src={quizImage}
                alt="Code Quiz"
              />
            </a>
          </div>

          <div class="project">
            <div class="project_title" style={styles.projectTitle}>
              CSS Portfolio
            </div>
            <p style={styles.projectDescription}>
              My first portfolio built using CSS.
            </p>
            <a href="https://github.com/lpakingan/css-portfolio">
              <img
                class="portfolio_picture"
                style={styles.pictureStyle}
                src={cssImage}
                alt="CSS Portfolio"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
