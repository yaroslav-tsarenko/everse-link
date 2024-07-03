import PropTypes from "prop-types";
import "./StepPairOne.css";

const StepPairOne = ({
  className = "",
  goMoWorldIconsFA2032048x2,
  goMoWorldIconsFA2042048x2,
}) => {
  return (
    <div className={`step-pair-one1 ${className}`}>
      <div className="gomoworld-icons-fa2-03-2048x20-parent">
        <img
          className="gomoworld-icons-fa2-03-2048x20"
          loading="lazy"
          alt=""
          src={goMoWorldIconsFA2032048x2}
        />
        <div className="heading-4-install-your-esim-parent">
          <div className="heading-41">Install Your eSIM</div>
          <div className="from-here-follow-container">
            <span>
              <p className="from-here-follow">
                From here, follow the instructions on
              </p>
              <p className="screen-to-install">
                screen to install your eSIM. Find more
              </p>
              <p className="details-on-this">
                details on this through the FAQs
              </p>
              <p className="below">below.</p>
            </span>
          </div>
        </div>
      </div>
      <div className="gomoworld-icons-fa2-04-2048x20-parent">
        <img
          className="gomoworld-icons-fa2-04-2048x20"
          loading="lazy"
          alt=""
          src={goMoWorldIconsFA2042048x2}
        />
        <div className="heading-4-activate-your-esim-parent">
          <div className="heading-42">Activate Your eSIM</div>
          <div className="once-you-reach-container">
            <span>
              <p className="once-you-reach">Once you reach your destination</p>
              <p className="country-tap-to">
                country, tap to open the GoMoWorld
              </p>
              <p className="app-and-go">app and Go!</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

StepPairOne.propTypes = {
  className: PropTypes.string,
  goMoWorldIconsFA2032048x2: PropTypes.string,
  goMoWorldIconsFA2042048x2: PropTypes.string,
};

export default StepPairOne;
