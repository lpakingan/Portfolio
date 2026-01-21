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
        src="https://drive.google.com/file/d/1W8vsehY8R2BuvZzIk6pDrcUWITIS-rzV/preview"
        type="application/pdf"
        style={styles.embedStyle}
      />

      <h1 style={styles.headingStyle}>Programming</h1>
      <u1 style={styles.listStyle}>
        <li>Python (pandas, NumPy)</li>
        <li>SQL</li>
      </u1>

      <h1 style={styles.headingStyle}>Data Engineering</h1>
      <u1 style={styles.listStyle}>
        <li>ETL/ELT</li>
        <li>Data pipelines</li>
        <li>Workflow orchestration (Airflow)</li>
        <li>Transformation modeling (dbt)</li>
      </u1>

      <h1 style={styles.headingStyle}>Databases/Warehousing</h1>
      <u1 style={styles.listStyle}>
        <li>Snowflake</li>
      </u1>

      <h1 style={styles.headingStyle}>Visualization</h1>
      <u1 style={styles.listStyle}>
        <li>Tableau</li>
        <li>Power BI</li>
        <li>Matplotlib</li>
      </u1>

      <h1 style={styles.headingStyle}>Analytics</h1>
      <u1 style={styles.listStyle}>
        <li>Exploratory Data Analysis (EDA)</li>
        <li>Data cleaning</li>
        <li>Feature engineering</li>
        <li>Predictive modeling (machine learning)</li>
      </u1>
    </section>
  );
}
