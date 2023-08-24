import React from "react";
import Navigation from "./navigation";
import banner from "../assets/header/header_banner.png";

const styles = {
  background: {
    backgroundImage: `url(${banner})`,
    padding: "3rem",
    margin: "auto",
    backgroundSize: "cover",
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
};

export default function Header({ currentPage, handlePageChange }) {
  return (
    <header class="header" style={styles.background}>
      <div id="header" style={styles.font}>
        <h3 style={styles.headingStyle}>Liana's Portfolio</h3>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
}
