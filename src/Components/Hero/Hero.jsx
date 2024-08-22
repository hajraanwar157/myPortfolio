import "./Hero.css";

import AnchorLink from "react-anchor-link-smooth-scroll";
import img from "../../assets/cropped_image.png";
function Hero() {
  return (
    <div id="hero" className="hero">
      <img src={img} alt="" />
      <h1>
        <span>Hi I'm Hajra Anwar,</span> Full stack developer based in Pakistan
      </h1>
      <p>
        With a passion for creating exceptional websites and mobile
        applications. Over 1+ year of experience in custom website and mobile
        app development.
      </p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={10} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div
          className="hero-resume"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1I5bUBmSoUyGB-NbTqJguHi3fFaOU6Mue/view?usp=sharing",
              "_blank"
            )
          }
        >
          My Resume
        </div>
      </div>
    </div>
  );
}

export default Hero;
