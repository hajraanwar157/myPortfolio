import "./About.css";
import themePattern from "../../assets/theme_pattern.svg";
import img from "../../assets/profileImg.jpeg";
function About() {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              I'm Hajra Anwar, a skilled full stack developer with a passion for
              creating exceptional web and mobile applications with over 1+ year
              of experience in custom website and mobile app development.
            </p>
            <p>
              I specialize in utilizing technologies like Flutter, firebase,
              React, NodeJS, HTML, CSS, Bootstrap, tailwind,typescript and
              JavaScript to deliver high-quality and user-friendly websites with
              a focus on responsive design and a commitment to timely delivery.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>Flutter</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Firebase</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "75%" }} />
            </div>

            <div className="about-skill">
              <p>Nodejs</p>
              <hr style={{ width: "65%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p>
              <hr style={{ width: "75%" }} />
            </div>
            <div className="about-skill">
              <p>Typescript</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Bootstrap</p>
              <hr style={{ width: "80%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>5+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
      </div>
    </div>
  );
}

export default About;
