import StepOne from "./StepOne";
import PropTypes from "prop-types";
import "./HowItWorks.css";

const HowItWorks = ({ className = "" }) => {
  return (
    <section className={`how-it-works1 ${className}`}>
      <div className="how-it-works-title2">
        <h1 className="heading-28">How EverseLink Works</h1>
        <div className="how-it-works-steps">
          <StepOne
            goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png2@2x.png"
            heading4DownloadTheApp="Download The App"
            headToTheAppStoreOrGoogle="Head to the App Store or Google Play,"
            searchGoMoWorldAndDownloa="search ‘GoMoWorld’ and download."
            propPadding="0px 4px 49px"
            propAlignSelf="unset"
            propFlex="0.9786"
            propMinWidth="222px"
            propMinHeight="232px"
          />
          <StepOne
            goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2022048x20481png-1@2x.png"
            heading4DownloadTheApp="Choose Your Destination"
            headToTheAppStoreOrGoogle="From the dropdown menu, choose the"
            searchGoMoWorldAndDownloa="country you’re going to."
            propPadding="0px 1px 49px"
            propAlignSelf="unset"
            propFlex="1"
            propMinWidth="222px"
            propMinHeight="232px"
          />
          <div className="step-item">
            <img
              className="gomoworld-icons-fa2-03-2048x201"
              loading="lazy"
              alt=""
              src="/gomoworld-icons-fa2032048x20481png2@2x.png"
            />
            <div className="heading-4-install-your-esim-group">
              <div className="heading-43">Install Your eSIM</div>
              <div className="from-here-follow-container1">
                <span>
                  <p className="from-here-follow1">
                    From here, follow the instructions on
                  </p>
                  <p className="screen-to-install1">
                    screen to install your eSIM. Find more
                  </p>
                  <p className="details-on-this1">
                    details on this through the FAQs
                  </p>
                  <p className="below1">below.</p>
                </span>
              </div>
            </div>
          </div>
          <div className="step-item1">
            <img
              className="gomoworld-icons-fa2-04-2048x201"
              loading="lazy"
              alt=""
              src="/gomoworld-icons-fa2042048x20481png2@2x.png"
            />
            <div className="heading-4-activate-your-esim-group">
              <div className="heading-44">Activate Your eSIM</div>
              <div className="once-you-reach-container1">
                <span>
                  <p className="once-you-reach1">
                    Once you reach your destination
                  </p>
                  <p className="country-tap-to1">
                    country, tap to open the GoMoWorld
                  </p>
                  <p className="app-and-go1">app and Go!</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <button className="button8">
          <b className="view-full-instruction-container">
            <a
              className="v"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-2"
              target="_blank"
            >
              V
            </a>
          </b>
        </button>
      </div>
    </section>
  );
};

HowItWorks.propTypes = {
  className: PropTypes.string,
};

export default HowItWorks;
