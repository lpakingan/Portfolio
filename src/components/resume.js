import title from "../assets/banners/resume_pic.png";

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
    fontSize: "30px",
    fontWeight: "bold",
  },
  bannerStyle: {
    display: "flex",
    width: "40%",
    height: "50%",
    margin: "auto",
    padding: "2rem",
  },
  listStyle: {
    listStyleType: "none",
    color: "black",
    fontSize: "20px",
  },
};

export default function Resume() {
  return (
    <section class="resume" style={styles.background}>
      <div id="resume" style={styles.font}>
        <img
          class="resume_title"
          style={styles.bannerStyle}
          src={title}
          alt="Resume Banner"
        />
      </div>
      <h1 style={styles.headingStyle}>Front-end Proficiencies</h1>
      <u1 style={styles.listStyle}>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>React</li>
      </u1>
      <h1 style={styles.headingStyle}>Back-end Proficiencies</h1>
      <u1 style={styles.listStyle}>
        <li>APIs</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>REST</li>
        <li>GraphQL</li>
      </u1>
    </section>
  );
}
