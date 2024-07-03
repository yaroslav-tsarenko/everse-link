import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`gomoworld-website-imagefiles-d-parent ${className}`}>
      <img
        className="gomoworld-website-imagefiles-d-icon1"
        loading="lazy"
        alt=""
        src="/gomoworld-website-imagefiles-d203webp@2x.png"
      />
      <div className="background5">
        <div className="features-card">
          <div className="features-title-wrapper">
            <div className="features-title">
              <h1 className="heading-3">Unleash Connectivity</h1>
              <div className="everselink-revolutionizes-the-container">
                <p className="everselink-revolutionizes-the">{`EverseLink revolutionizes the way you stay connected by offering a SIM-free experience with no hidden costs. `}</p>
                <p className="blank-line">&nbsp;</p>
                <p className="everselink-ensures-that">
                  EverseLink ensures that you're always connected to what
                  matters most.
                </p>
              </div>
            </div>
          </div>
          <button className="get-started-wrapper">
            <b className="get-started">Get Started</b>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
