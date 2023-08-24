import React from "react";

const styles = {
  navbarStyle: {
    fontSize: "30px",
    paddingBottom: "5rem",
    listStyleType: "none",
    display: "flex",
    gap: "30px",
    justifyContent: "center",
  },
  listStyle: {
    textDecoration: "none",
    color: "black",
    transition: "font-size 0.3s ease-in-out",
  },
};

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navbarStyle}>
      <li className="nav-item">
        <a
          href="#about"
          style={styles.listStyle}
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          style={styles.listStyle}
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          style={styles.listStyle}
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}
