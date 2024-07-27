import "./Footer.css";

import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
function Footer() {
  const openLinkedin = () => {
    window.open("https://www.linkedin.com/in/hajra-anwar-34134b1b7/", "_blank");
  };
  const openGithub = () => {
    window.open("https://github.com/hajraanwar157", "_blank");
  };
  return (
    <div className="footer">
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          Made by <span className="name">Hajra Anwar</span>
        </p>
        <div className="footer-bottom-right">
          <img src={linkedin} alt="" onClick={openLinkedin} />
          <img src={github} alt="" onClick={openGithub} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
