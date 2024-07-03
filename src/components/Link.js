import PropTypes from "prop-types";
import "./Link.css";

const Link = ({ className = "", europepng, heading2Europe }) => {
  return (
    <div className={`link5 ${className}`}>
      <img className="europepng-icon" loading="lazy" alt="" src={europepng} />
      <div className="heading-2-europe-parent">
        <div className="heading-23">{heading2Europe}</div>
        <div className="frame-group">
          <div className="from-parent">
            <div className="from">from</div>
            <div className="div">€3.99</div>
          </div>
          <img className="icon" alt="" src="/icon.svg" />
        </div>
      </div>
    </div>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  europepng: PropTypes.string,
  heading2Europe: PropTypes.string,
};

export default Link;
