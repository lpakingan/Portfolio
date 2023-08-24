import github from "../assets/footer/github-logo.png";
import instagram from "../assets/footer/instagram-logo.png";

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
};

export default function Footer() {
  return (
    <footer class="footer" style={styles.background}>
      <a href="https://github.com/lpakingan">
        <img
          class="github_icon"
          style={styles.pictureStyle}
          src={github}
          alt="github"
        />
      </a>
      <a href="https://www.instagram.com/l.pakingan/">
        <img
          class="instagram_icon"
          style={styles.pictureStyle}
          src={instagram}
          alt="instagram"
        />
      </a>
    </footer>
  );
}
