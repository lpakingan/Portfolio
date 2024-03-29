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
  embedStyle: {
    height: "50vh",
    width: "80%",
    borderRadius: "2rem",
  },
};

export default function Resume() {
  return (
    <section class="resume" style={{ ...styles.background, height: "auto" }}>
      <div style={styles.font}>
        <img
          class="resume_title"
          style={styles.bannerStyle}
          src={title}
          alt="Resume Banner"
        />
      </div>
      <br></br>
      <embed
        src="https://drive.google.com/file/d/1CA3bwmN9ATs62HKvdwt4R1KXw5sTT1yn/preview"
        type="application/pdf"
        style={styles.embedStyle}
      />
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
