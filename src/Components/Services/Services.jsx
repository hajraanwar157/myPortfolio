import "./Services.css";
import themePattern from "../../assets/theme_pattern.svg";
import Services_Data from "../../assets/services_data";

function Services() {
  return (
    <div id="services" className="services">
      <div className="services-title">
        <h1>My Services</h1>
        <img src={themePattern} alt="" />
      </div>
      <div className="services-container">
        {Services_Data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              {/* <h3>{service.s_no}</h3> */}
              <h2>{service.s_name}</h2>
              <p>{service.s_desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;
