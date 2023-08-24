import React, { useState } from "react";
import Navigation from "./navigation";
import About from "./about";
import Projects from "./project";
import Contact from "./contact";
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

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header class="header" style={styles.background}>
      <div id="header" style={styles.font}>
        <h3 style={styles.headingStyle}>Liana Pakingan</h3>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
    </header>
  );
}
