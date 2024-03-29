import React, { useState, useEffect } from "react";
import Navigation from "./navigation";
import About from "./about";
import Projects from "./project";
import Contact from "./contact";
import Resume from "./resume";
import banner from "../assets/header/header_banner.png";
// import title from "../assets/header/header_pic.png";
import anime from "animejs";

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
  pictureStyle: {
    display: "flex",
    width: "70%",
    height: "50%",
    margin: "0 auto",
  },
  bannerStyle: {
    display: "flex",
    width: "100%",
    margin: "0",
    padding: "0",
    justifyContent: "center",
    alignItems: "center",
  },
};

const animatedHeader = () => {
  anime({
    targets: ".animated-path",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutSine",
    duration: 8000,
    direction: "alternate",
    loop: true,
  });
};

export default function Header() {
  const [currentPage, setCurrentPage] = useState("About");

  useEffect(() => {
    animatedHeader();
  }, []);

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
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <header class="header" style={styles.background}>
      <div id="header" style={styles.font}>
        <div style={styles.bannerStyle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="-10 0 400 50"
            preserveAspectRatio="xMidYMid meet"
            className="animated-svg"
          >
            <path
              d="M 324.62,14.58
            C 322.75,16.47 323.88,17.60 327.62,17.60
              330.12,17.60 331.25,17.10 331.00,15.97
              330.38,14.21 326.00,13.33 324.62,14.58 Z
            M 183.75,15.59
            C 183.75,16.97 184.88,17.60 187.00,17.60
              190.88,17.60 190.50,14.71 186.50,14.08
              184.63,13.83 183.75,14.33 183.75,15.59 Z
            M 153.75,15.34
            C 153.75,17.10 154.50,17.73 156.50,17.35
              160.38,16.85 160.62,14.21 156.88,13.58
              154.38,13.07 153.75,13.45 153.75,15.34 Z
            M 291.75,15.71
            C 289.25,19.49 290.88,25.52 294.50,26.27
              296.75,26.65 296.75,26.53 294.75,24.26
              291.75,20.99 291.88,19.49 295.62,16.59
              297.25,15.21 298.25,13.83 297.88,13.33
              296.25,11.69 293.75,12.70 291.75,15.71 Z
            M 145.38,1.26
            C 141.50,2.77 140.88,6.41 141.38,23.63
              141.88,40.48 143.00,43.12 149.25,42.49
              152.25,42.24 153.62,41.11 155.00,38.09
              156.50,34.70 157.62,33.94 160.88,33.94
              163.62,33.94 165.62,32.94 167.88,30.30
              167.88,30.30 171.00,26.53 171.00,26.53
              171.00,26.53 171.50,32.69 171.50,32.69
              172.25,40.10 174.12,42.74 178.75,42.74
              182.50,42.74 184.50,40.98 185.12,37.21
              185.88,33.19 188.12,33.57 190.12,37.97
              192.38,43.12 198.62,44.50 201.50,40.35
              203.25,37.97 203.25,37.97 204.75,40.35
              206.50,42.99 212.38,43.62 214.75,41.23
              215.62,40.35 216.25,38.34 216.25,36.58
              216.25,33.44 216.38,33.57 220.13,38.09
              224.50,43.50 230.00,44.38 232.75,40.35
              234.50,37.84 234.50,37.84 236.00,40.35
              238.12,43.75 244.50,43.62 246.38,39.98
              246.38,39.98 247.88,37.21 247.88,37.21
              247.88,37.21 248.88,39.98 248.88,39.98
              249.75,42.49 250.75,42.87 254.63,42.49
              258.75,42.11 259.50,41.61 260.50,38.22
              260.50,38.22 261.62,34.32 261.62,34.32
              261.62,34.32 265.38,38.59 265.38,38.59
              269.25,42.99 274.38,44.13 277.25,41.23
              278.12,40.35 278.75,37.21 278.75,34.07
              278.75,34.07 278.75,28.29 278.75,28.29
              278.75,28.29 281.12,33.57 281.12,33.57
              284.12,40.10 288.62,43.12 295.50,43.25
              302.12,43.37 306.38,41.23 309.38,36.08
              309.38,36.08 311.75,32.18 311.75,32.18
              311.75,32.18 312.62,35.58 312.62,35.58
              314.00,40.73 316.12,42.74 319.88,42.74
              324.00,42.74 326.25,40.61 326.25,36.83
              326.25,32.69 329.12,33.31 331.25,38.09
              333.75,43.37 340.25,44.50 342.62,39.98
              342.62,39.98 344.12,37.21 344.12,37.21
              344.12,37.21 345.12,39.98 345.12,39.98
              346.00,42.11 347.12,42.74 350.62,42.74
              354.38,42.74 355.38,42.11 356.75,38.97
              356.75,38.97 358.25,35.20 358.25,35.20
              358.25,35.20 361.88,38.97 361.88,38.97
              366.13,43.37 371.75,44.00 373.75,40.35
              375.38,37.21 375.38,10.06 373.75,5.78
              372.00,1.13 368.00,-0.63 364.38,1.76
              362.75,2.89 361.13,4.90 360.62,6.29
              359.88,8.67 359.50,8.42 355.62,4.27
              352.25,0.75 350.75,0.00 348.50,0.63
              344.88,1.76 342.50,4.78 342.50,8.05
              342.50,10.18 342.12,10.06 340.12,6.79
              337.75,3.02 332.12,0.00 327.25,0.00
              319.75,0.00 312.62,7.04 312.38,14.71
              312.25,17.73 312.00,17.47 310.88,12.95
              310.00,10.06 308.00,6.29 306.38,4.53
              300.12,-2.14 287.38,-0.88 282.00,7.04
              282.00,7.04 279.12,11.44 279.12,11.44
              279.12,11.44 278.38,7.67 278.38,7.67
              277.88,5.53 276.12,2.89 274.38,1.76
              271.50,-0.13 271.00,-0.13 268.25,1.76
              266.50,2.77 264.88,4.90 264.38,6.29
              263.62,8.67 263.25,8.55 259.50,4.40
              254.75,-0.63 253.88,-0.88 249.88,2.39
              247.00,4.65 246.88,4.65 243.50,2.14
              240.25,-0.25 240.00,-0.25 237.00,1.76
              235.13,2.89 233.75,4.40 233.75,5.15
              233.75,5.91 232.75,5.28 231.50,3.77
              228.50,0.13 223.25,0.13 219.25,3.90
              216.38,6.66 216.00,6.66 214.88,4.78
              214.25,3.52 212.50,1.89 211.12,1.13
              208.00,-0.50 203.12,2.26 201.88,6.29
              201.12,8.80 201.00,8.80 198.62,5.78
              195.62,2.01 188.75,-0.50 183.75,0.63
              179.25,1.63 173.88,5.78 172.62,9.30
              171.62,11.69 171.50,11.57 169.50,7.67
              168.25,5.28 165.62,2.89 163.12,1.76
              158.38,-0.25 149.62,-0.50 145.38,1.26 Z
            M 301.00,3.02
            C 306.25,5.78 309.12,9.55 308.38,12.82
              307.88,14.58 308.38,16.47 309.62,17.85
              311.38,19.86 311.38,20.87 310.12,25.39
              309.25,28.29 306.88,32.18 305.00,34.19
              302.12,37.09 300.38,37.71 295.62,37.71
              290.38,37.71 289.12,37.09 284.88,32.81
              280.00,27.91 279.25,25.39 280.00,16.34
              280.38,11.57 284.50,5.53 289.12,3.27
              294.12,0.88 296.62,0.75 301.00,3.02 Z
            M 163.88,3.77
            C 166.88,5.41 170.00,11.44 170.00,15.59
              170.00,23.01 164.25,28.91 156.88,28.91
              154.50,28.91 153.75,29.54 153.75,31.81
              153.75,38.09 145.88,40.23 143.75,34.45
              142.12,30.17 142.12,8.05 143.75,4.90
              144.88,2.89 146.50,2.51 153.25,2.51
              157.75,2.51 162.50,3.14 163.88,3.77 Z
            M 196.38,6.16
            C 198.38,8.17 200.00,11.19 200.00,12.82
              200.13,14.46 200.25,19.36 200.50,23.89
              201.00,34.07 199.75,37.71 195.88,37.71
              192.25,37.71 190.00,35.45 190.00,31.81
              190.00,29.67 189.25,28.91 187.13,28.91
              185.00,28.91 184.00,29.92 183.12,32.94
              182.13,36.08 181.12,37.21 178.50,37.46
              173.50,38.09 172.13,34.45 172.75,21.12
              173.12,10.18 173.25,9.68 177.25,6.16
              183.00,1.01 191.12,1.01 196.38,6.16 Z
            M 212.25,4.02
            C 212.88,4.90 213.62,6.79 213.88,8.05
              214.38,10.31 214.75,10.18 218.88,6.54
              223.88,2.14 227.63,1.51 230.00,4.40
              232.25,7.17 230.50,12.07 226.25,15.09
              226.25,15.09 222.50,17.85 222.50,17.85
              222.50,17.85 226.00,22.38 226.00,22.38
              231.75,29.67 232.75,32.31 231.25,35.20
              228.75,39.73 224.25,38.34 219.12,31.30
              219.12,31.30 214.38,25.02 214.38,25.02
              214.38,25.02 213.75,30.30 213.75,30.30
              213.00,36.33 210.00,39.10 206.62,36.96
              204.75,35.83 204.38,33.19 204.00,20.74
              203.62,5.53 204.38,2.51 208.75,2.51
              210.00,2.51 211.50,3.27 212.25,4.02 Z
            M 243.62,4.27
            C 244.63,5.41 245.00,10.94 244.75,20.74
              244.38,33.19 244.00,35.83 242.25,36.96
              240.62,37.97 239.38,37.97 237.88,36.96
              236.00,35.83 235.62,33.19 235.25,20.74
              234.88,5.53 235.62,2.51 240.00,2.51
              241.25,2.51 242.88,3.27 243.62,4.27 Z
            M 260.88,8.93
            C 260.88,8.93 265.62,15.21 265.62,15.21
              265.62,15.21 266.25,9.93 266.25,9.93
              267.00,3.90 270.00,1.13 273.50,3.27
              275.25,4.40 275.62,7.04 276.00,19.49
              276.38,35.20 275.50,38.09 270.75,37.46
              269.38,37.21 266.12,34.45 263.75,31.05
              263.75,31.05 259.38,25.14 259.38,25.14
              259.38,25.14 259.00,29.79 259.00,29.79
              258.50,35.20 256.88,37.71 253.75,37.71
              249.25,37.71 248.38,34.45 248.62,19.74
              248.75,12.07 249.50,5.03 250.25,4.15
              252.75,1.01 256.25,2.51 260.88,8.93 Z
            M 336.62,5.53
            C 340.88,9.43 341.50,12.19 341.00,25.02
              340.75,33.44 340.12,35.83 338.50,36.96
              335.38,38.85 332.00,36.58 331.50,32.18
              331.13,29.42 330.50,28.91 327.38,28.91
              325.25,28.91 323.88,29.42 324.25,30.05
              325.75,32.43 322.62,37.71 319.62,37.71
              314.62,37.71 313.75,35.45 313.75,22.88
              313.75,11.06 313.75,11.06 318.00,6.79
              321.50,3.27 323.12,2.51 327.88,2.51
              332.00,2.51 334.25,3.27 336.62,5.53 Z
            M 357.12,9.05
            C 357.12,9.05 361.88,15.71 361.88,15.71
              361.88,15.71 362.50,10.18 362.50,10.18
              363.25,3.90 366.13,1.01 369.75,3.27
              371.50,4.40 371.88,7.04 372.25,19.49
              372.62,35.20 371.75,38.09 367.00,37.46
              365.62,37.21 362.38,34.45 360.00,31.05
              360.00,31.05 355.62,25.14 355.62,25.14
              355.62,25.14 355.25,29.79 355.25,29.79
              354.75,35.58 353.12,37.71 349.25,37.71
              345.00,37.71 343.75,34.19 343.75,21.62
              343.75,1.13 348.25,-3.14 357.12,9.05 Z
            M 232.88,21.62
            C 232.88,21.62 232.13,27.53 232.13,27.53
              232.13,27.53 229.75,24.39 229.75,24.39
              229.75,24.39 227.25,21.25 227.25,21.25
              227.25,21.25 230.13,18.10 230.13,18.10
              231.62,16.47 233.00,15.21 233.25,15.46
              233.38,15.59 233.25,18.35 232.88,21.62 Z
            M 114.62,14.71
            C 112.75,16.47 113.88,17.60 117.50,17.60
              120.25,17.60 121.00,17.10 120.50,15.71
              119.75,13.83 116.12,13.20 114.62,14.71 Z
            M 52.12,15.59
            C 51.50,17.10 52.25,17.60 55.12,17.60
              57.62,17.60 58.75,17.10 58.50,15.97
              57.62,13.70 52.88,13.45 52.12,15.59 Z
            M 2.50,2.51
            C -0.12,5.15 -0.25,6.29 0.25,21.87
              0.50,33.69 1.12,39.22 2.38,40.61
              3.63,42.24 6.38,42.74 14.63,42.74
              24.25,42.74 25.12,42.49 26.13,39.98
              26.13,39.98 27.13,37.21 27.13,37.21
              27.13,37.21 28.63,39.98 28.63,39.98
              30.50,43.50 36.62,43.75 39.00,40.35
              40.75,37.84 40.75,37.84 42.25,40.35
              43.12,41.74 45.12,42.74 47.38,42.74
              51.25,42.74 53.25,40.98 53.88,37.21
              54.62,33.31 56.75,33.69 58.75,38.09
              61.13,43.37 66.88,44.38 70.12,40.10
              70.12,40.10 72.25,37.34 72.25,37.34
              72.25,37.34 73.12,40.10 73.12,40.10
              73.88,42.37 74.75,42.87 78.50,42.49
              82.50,42.11 83.25,41.49 84.25,38.22
              84.25,38.22 85.38,34.32 85.38,34.32
              85.38,34.32 89.12,38.59 89.12,38.59
              93.50,43.62 99.13,44.25 101.38,40.10
              101.38,40.10 102.75,37.46 102.75,37.46
              102.75,37.46 104.62,40.23 104.62,40.23
              106.00,42.11 107.50,42.74 110.38,42.49
              113.62,42.24 114.62,41.36 115.62,37.97
              117.12,32.81 118.25,32.81 120.50,38.34
              122.12,42.24 122.88,42.74 126.75,42.74
              130.00,42.74 131.50,41.99 132.62,39.98
              134.75,36.08 133.50,13.07 130.88,8.05
              128.75,4.02 122.25,0.00 117.63,0.00
              113.25,0.00 106.50,3.39 105.00,6.41
              105.00,6.41 103.38,9.30 103.38,9.30
              103.38,9.30 101.75,5.91 101.75,5.91
              98.00,-1.13 91.25,-1.01 88.62,6.03
              88.62,6.03 87.38,9.43 87.38,9.43
              87.38,9.43 84.75,5.91 84.75,5.91
              81.00,0.63 77.88,-0.50 74.38,1.76
              72.75,2.89 71.12,4.90 70.62,6.29
              69.88,8.80 69.75,8.80 67.38,5.78
              61.75,-1.51 50.12,-1.51 43.88,5.78
              40.12,10.06 40.00,10.06 40.00,7.04
              40.00,5.03 38.88,3.02 37.00,1.76
              34.25,0.13 33.38,0.00 30.38,1.51
              26.88,3.14 26.88,3.27 26.13,18.48
              25.75,28.16 24.88,34.45 23.88,35.70
              22.62,37.21 19.88,37.71 13.00,37.71
              1.50,37.71 1.25,37.34 1.25,19.23
              1.25,4.78 2.00,2.51 7.00,2.51
              10.62,2.51 11.25,4.65 11.25,16.47
              11.25,16.47 11.25,26.40 11.25,26.40
              11.25,26.40 16.62,26.40 16.62,26.40
              19.62,26.40 22.62,27.03 23.50,27.91
              24.63,29.04 25.00,29.04 25.00,27.91
              25.00,26.02 22.25,24.77 17.62,24.64
              14.50,24.51 14.38,24.26 13.75,14.21
              13.38,8.55 12.63,3.39 11.88,2.77
              8.88,-0.13 5.13,-0.13 2.50,2.51 Z
            M 37.50,4.90
            C 39.25,8.42 39.12,34.32 37.25,36.21
              35.00,38.47 30.25,37.97 28.75,35.33
              28.12,33.94 27.50,27.15 27.50,20.11
              27.50,6.03 28.63,2.51 33.12,2.51
              34.88,2.51 36.75,3.52 37.50,4.90 Z
            M 65.12,6.41
            C 68.75,10.43 68.88,10.56 68.50,23.76
              68.12,36.58 68.00,37.09 65.25,37.46
              61.50,38.09 58.75,35.70 58.75,31.93
              58.75,29.67 58.12,28.91 55.88,28.91
              53.75,28.91 52.75,29.92 51.88,32.94
              51.00,35.83 49.75,37.21 47.75,37.46
              42.38,38.22 41.25,35.83 41.25,23.01
              41.25,11.06 41.25,11.06 45.50,6.79
              49.13,3.14 50.62,2.51 55.62,2.51
              60.62,2.51 62.00,3.14 65.12,6.41 Z
            M 84.62,8.93
            C 84.62,8.93 89.38,15.21 89.38,15.21
              89.38,15.21 90.00,9.93 90.00,9.93
              90.75,3.90 93.75,1.13 97.25,3.27
              99.00,4.40 99.38,7.04 99.75,19.49
              100.00,29.29 99.62,34.82 98.62,35.95
              96.00,39.22 92.63,37.84 87.88,31.30
              87.88,31.30 83.12,25.02 83.12,25.02
              83.12,25.02 82.50,30.30 82.50,30.30
              81.75,36.33 78.75,39.10 75.38,36.96
              73.50,35.83 73.12,33.19 72.75,20.74
              72.50,10.94 72.88,5.41 73.88,4.27
              76.50,1.01 79.88,2.39 84.62,8.93 Z
            M 126.50,6.16
            C 130.50,9.81 130.62,10.06 131.00,21.87
              131.50,34.32 130.50,37.71 126.50,37.71
              123.75,37.71 120.00,33.94 120.00,31.18
              120.00,29.67 119.13,28.91 117.00,28.91
              114.62,28.91 113.88,29.67 113.50,32.18
              113.00,36.58 109.62,38.85 106.63,36.96
              104.75,35.83 104.38,33.31 104.00,23.01
              104.00,23.01 103.62,10.31 103.62,10.31
              103.62,10.31 107.50,6.41 107.50,6.41
              113.00,1.01 120.62,0.88 126.50,6.16 Z"
              fill="transparent"
              stroke="black"
              strokeWidth="0.8"
              className="animated-path"
            />
          </svg>
        </div>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
        {renderPage()}
      </div>
    </header>
  );
}
