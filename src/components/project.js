import React, { useState } from "react";
import stockpriceGif from "../assets/projects/stockprice_gif.gif";
import homecreditGif from "../assets/projects/hc_gif.gif";
import palworldGif from "../assets/projects/palworld_gif.gif";
import eventfullImage from "../assets/projects/eventfull_image.jpg";
import gameshareGif from "../assets/projects/gameshare_gif.gif";
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
  sectionHeader: {
    fontSize: "60px",
    fontWeight: "bold",
    cursor: "pointer",
    padding: "1rem",
    margin: "2rem 0 1rem 0",
    background: "#A09ABC",
    borderRadius: "1rem",
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
  },
  bannerStyle: {
    display: "flex",
    width: "40%",
    height: "50%",
    margin: "auto",
    padding: "2rem",
  },
  buttonStyle: {
    padding: "0.5rem",
    margin: " 2rem 0.5rem",
    fontFamily: "Outfit",
    color: "black",
    background: "#A09ABC",
    fontSize: "20px",
    borderRadius: "0.5rem",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  },
  dividerStyle: {
    fontSize: "20px",
    fontWeight: "bold",
  },
};

export default function Projects() {
  const [showDataVis, setShowDataVis] = useState(false);
  const [showWebDev, setShowWebDev] = useState(false);

  return (
    <section style={styles.background}>
      <div id="projects" style={styles.font}>
        <img
          class="project_banner"
          style={styles.bannerStyle}
          src={banner}
          alt="Projects"
        />

        <div style={styles.sectionHeader} onClick={() => setShowDataVis(!showDataVis)}>
          Data Visualization {showDataVis ? "▼" : "▶"}
        </div>

        {showDataVis && (
          <div class="project_display">
            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Home Credit Default Risk Analysis Project
              </div>
              <p style={styles.projectDescription}>
                Group project that created an EDA and machine learning pipeline for predicting loan default risk for underbanked populations lacking traditional credit histories.
                <br></br>
                <br></br>Implements Exploratory Data Analysis (EDA), machine learning, and data visualization (Power BI)
              </p>
              <img
                class="hc_gif"
                style={styles.pictureStyle}
                src={homecreditGif}
                alt="Home Credit Dashboard"
              />
              <br></br>
              <a href="https://github.com/lpakingan/HC-Default-Risk-Project" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Stock Price Prediction Analytics System
              </div>
              <p style={styles.projectDescription}>
                A stock price prediction system that orchestrates ETL/ELT and dbt pipelines to identify stock price trends
                <br></br>
                <br></br>Implements Apache Airflow, Snowflake, dbt, Tableau
              </p>
              <img
                class="stockprice_gif"
                style={styles.pictureStyle}
                src={stockpriceGif}
                alt="Stock Price Prediction Analytics Dashboard"
              />
              <br></br>
              <a href="https://github.com/lpakingan/DATA226_Lab2" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>

              <a href="https://public.tableau.com/app/profile/lpak/viz/sma_visualizations/AVGOandNVDASMAComparison" target="_blank">
                <button style={styles.buttonStyle}>Tableau</button>
              </a>
            </div>
          </div>
        )}

        <div style={styles.sectionHeader} onClick={() => setShowWebDev(!showWebDev)}>
          Web Development {showWebDev ? "▼" : "▶"}
        </div>

        {showWebDev && (
          <div class="project_display">
            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Palworld Helper
              </div>
              <p style={styles.projectDescription}>
                A hobby project turned search engine for Palworld information.{" "}
                <br></br>
                <br></br>Uses Palworld API, Handlebars
              </p>
              <img
                class="palworld_gif"
                style={styles.pictureStyle}
                src={palworldGif}
                alt="Palworld Helper"
              />
              <br></br>
              <a href="https://github.com/lpakingan/PalworldHelper" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://palworld-helper-1d9970466a26.herokuapp.com/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Eventfull
              </div>
              <p style={styles.projectDescription}>
                A social networking platform where event-goers can connect with
                one another pre-event in order to optimize their event experience.{" "}
                <br></br>
                <br></br>Uses SeatGeek API, MongoDB, React
              </p>
              <img
                class="eventfull_picture"
                style={styles.pictureStyle}
                src={eventfullImage}
                alt="Eventfull"
              />
              <br></br>
              <a href="https://github.com/lpakingan/Eventfull" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://eventfull-c6ee6f293464.herokuapp.com/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                GameShare
              </div>
              <p style={styles.projectDescription}>
                An application where you can search through a free-to-play game
                database and add games to your own personal library. <br></br>
                <br></br>Uses FreeToGame API, SQL, Express.js
              </p>
              <img
                class="gameshare_picture"
                style={styles.pictureStyle}
                src={gameshareGif}
                alt="GameShare"
              />
              <br></br>
              <a href="https://github.com/lpakingan/GameShare" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://gameshare-97b263a86cef.herokuapp.com/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Earthquake Tracker
              </div>
              <p style={styles.projectDescription}>
                An application for finding earthquakes based on your own specific
                search criteria. <br></br>
                <br></br>Uses USGS Earthquake Catalog API and Google Maps API,
                HTML/CSS
              </p>
              <img
                class="earthquake_picture"
                style={styles.pictureStyle}
                src={earthquakeImage}
                alt="Earthquake Tracker"
              />
              <br></br>
              <a href="https://github.com/lpakingan/EarthquakeTracker" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://lpakingan.github.io/EarthquakeTracker/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Weather Dashboard
              </div>
              <p style={styles.projectDescription}>
                An application for finding the future weather forecast for any
                city. <br></br>
                <br></br>Uses OpenWeather API, HTML/CSS
              </p>
              <img
                class="weather_picture"
                style={styles.pictureStyle}
                src={weatherImage}
                alt="Weather Dashboard"
              />
              <br></br>
              <a href="https://github.com/lpakingan/WeatherDashboard" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://lpakingan.github.io/WeatherDashboard/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                Code Quiz
              </div>
              <p style={styles.projectDescription}>
                A Javascript-based timed quiz on coding.
              </p>
              <img
                class="quiz_picture"
                style={styles.pictureStyle}
                src={quizImage}
                alt="Code Quiz"
              />
              <br></br>
              <a href="https://github.com/lpakingan/CodeQuiz" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://lpakingan.github.io/CodeQuiz/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>

            <div class="project">
              <p style={styles.dividerStyle}>---------- 𓆩✧𓆪 ----------</p>
              <div class="project_title" style={styles.projectTitle}>
                CSS Portfolio
              </div>
              <p style={styles.projectDescription}>
                My first portfolio built using CSS.
              </p>
              <img
                class="portfolio_picture"
                style={styles.pictureStyle}
                src={cssImage}
                alt="CSS Portfolio"
              />
              <br></br>
              <a href="https://github.com/lpakingan/css-portfolio" target="_blank">
                <button style={styles.buttonStyle}>GitHub</button>
              </a>
              <a href="https://lpakingan.github.io/css-portfolio/" target="_blank">
                <button style={styles.buttonStyle}>Deployed</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}