import "./MyWork.css";
import themePattern from "../../assets/theme_pattern.svg";
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg";
function MyWork() {
  return (
    <div id="work" className="mywork">
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <div className="single-portfolio">
              <img className="pic" key={index} src={work.w_img} alt="" />
              <div
                onClick={() => {
                  window.open(work.link, "_blank");
                }}
                className="mywork-showmore"
              >
                <p>Visit</p>
                <img src={arrow_icon} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyWork;
