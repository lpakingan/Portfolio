import React from "react";

const styles = {
  navbarStyle: {
    fontSize: "30px",
    paddingBottom: "2rem",
    listStyleType: "none",
    display: "flex",
    flexWrap: "wrap",
    gap: "30px",
    justifyContent: "center",
    fontWeight: "bold",
    paddingLeft: "0",
  },
  listStyle: {
    textDecoration: "none",
    color: "black",
  },
  activeStyle: {
    borderBottom: "2px solid black",
  },
};

export default function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs" style={styles.navbarStyle}>
      <li className="nav-item">
        <a
          href="#about"
          style={{
            ...styles.listStyle,
            ...(currentPage === "About" ? styles.activeStyle : {}),
          }}
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          style={{
            ...styles.listStyle,
            ...(currentPage === "Portfolio" ? styles.activeStyle : {}),
          }}
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
          style={{
            ...styles.listStyle,
            ...(currentPage === "Contact" ? styles.activeStyle : {}),
          }}
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          style={{
            ...styles.listStyle,
            ...(currentPage === "Resume" ? styles.activeStyle : {}),
          }}
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}
