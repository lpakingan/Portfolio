import github from "../assets/footer/github-logo.png";
import instagram from "../assets/footer/instagram-logo.png";
import linkedin from "../assets/footer/linkedin-logo.png";
import email from "../assets/footer/email-logo.png";

const styles = {
  background: {
    background: "linear-gradient(#FAE2FF, #B6A6CA)",
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
  },
  pictureStyle: {
    height: "50px",
    width: "50px",
    boxSizing: "border-box",
    display: "inline-block",
    margin: "1rem",
  },
  font: {
    fontFamily: "Outfit",
  },
  paragraphStyle: {
    fontSize: "25px",
    fontWeight: "bold",
    color: "white",
    padding: "0 0 0 2rem",
  },
};

export default function Footer() {
  return (
    <footer class="footer" style={styles.background}>
      <a href="https://github.com/lpakingan" target="_blank">
        <img
          class="github_icon"
          style={styles.pictureStyle}
          src={github}
          alt="github"
        />
      </a>
      <a href="https://www.instagram.com/l.pakingan/" target="_blank">
        <img
          class="instagram_icon"
          style={styles.pictureStyle}
          src={instagram}
          alt="instagram"
        />
      </a>
      <a href="https://www.linkedin.com/in/lianapakingan/" target="_blank">
        <img
          class="linkedin_icon"
          style={styles.pictureStyle}
          src={linkedin}
          alt="linkedin"
        />
      </a>
      <a href="mailto:pakinganliana@gmail.com" target="_blank">
        <img
          class="email_icon"
          style={styles.pictureStyle}
          src={email}
          alt="email"
        />
      </a>
      <div style={styles.font}>
        <p style={styles.paragraphStyle}> Liana Pakingan 2026</p>
      </div>
    </footer>
  );
}
