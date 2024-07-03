import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <section className={`heading-1-parent ${className}`}>
      <div className="heading-11" />
      <div className="hero-content">
        <div className="your-gateway-to-connectivity-o-parent">
          <h1 className="your-gateway-to">
            Your Gateway to Connectivity on the Go
          </h1>
          <div className="in-todays-fast-paced">
            In today's fast-paced world, staying connected is no longer a luxury
            but a necessity. ay goodbye to frustrating dead zones and unreliable
            connections – with EverseLink
          </div>
        </div>
        <div className="form">
          <div className="data-input">
            <input
              className="where-do-you"
              placeholder="Where do you need data for?"
              type="text"
            />
            <img className="button-icon" alt="" src="/button.svg" />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
