import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`benefits-content-parent ${className}`}>
      <div className="benefits-content">
        <div className="benefits-card">
          <div className="seamless-connectivity-with-no-parent">
            <h1 className="seamless-connectivity-with">
              Seamless Connectivity with No Hidden Costs
            </h1>
            <div className="at-everselink-we">
              At EverseLink, we believe in transparency and simplicity. That's
              why we're proud to offer seamless connectivity without any hidden
              costs. Unlike other providers that surprise you with additional
              fees and charges, EverseLink provides a straightforward pricing
              structure that you can trust.
            </div>
          </div>
          <button className="gostart-wrapper">
            <b className="gostart">GoStart</b>
          </button>
        </div>
      </div>
      <div className="background4">
        <img
          className="gomoworld-website-imagefiles-d-icon"
          loading="lazy"
          alt=""
          src="/gomoworld-website-imagefiles-d201webp@2x.png"
        />
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
