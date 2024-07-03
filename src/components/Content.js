import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <section className={`content ${className}`}>
      <img
        className="americajpg-icon1"
        loading="lazy"
        alt=""
        src="/americajpg1@2x.png"
      />
      <div className="hero-title-parent">
        <div className="hero-title">
          <div className="hero-e-sim">
            <div className="esim-for">eSim for</div>
            <h1 className="heading-12">United States</h1>
          </div>
          <div className="strong-get">Get Data On The Go from €3.99</div>
        </div>
        <div className="tablist">
          <button className="tab">
            <div className="about-wrapper">
              <div className="about">About</div>
            </div>
            <div className="horizontal-divider" />
          </button>
          <div className="tabs">
            <div className="tab-how">How to get set up</div>
          </div>
          <div className="tabs1">
            <div className="tab-compatibility">Compatibility</div>
          </div>
        </div>
        <div className="experience-uninterrupted-conne-container">
          <p className="experience-uninterrupted-conne">
            Experience uninterrupted connectivity like never before with
            EverseLink's eSIM service tailored for the United States.
          </p>
          <p className="whether-youre-traveling">
            Whether you're traveling coast to coast or exploring the vibrant
            cities and breathtaking landscapes of the United States,
            EverseLink's eSIM ensures you stay connected every step of the way.
          </p>
        </div>
        <div className="heading-1-get-connected-parent">
          <div className="heading-13">Get Connected</div>
          <div className="plan-options">
            <div className="background7">
              <div className="plan-details">
                <div className="gb-for-1999">25gb for €19.99</div>
              </div>
              <div className="separator" />
              <div className="download-option-wrapper">
                <div className="download-option">
                  <img
                    className="icon2"
                    loading="lazy"
                    alt=""
                    src="/icon1.svg"
                  />
                  <div className="download-app">Download App</div>
                </div>
              </div>
              <div className="plan-cycle">
                <div className="all-plans-have">
                  All plans have a 30-day cycle
                </div>
              </div>
            </div>
            <div className="background8">
              <div className="gb-for-399-wrapper">
                <div className="gb-for-399">2gb for €3.99</div>
              </div>
              <div className="separator1" />
              <div className="background-inner">
                <div className="vector-parent">
                  <img
                    className="vector-icon2"
                    loading="lazy"
                    alt=""
                    src="/vector-11.svg"
                  />
                  <div className="download-app1">Download App</div>
                </div>
              </div>
              <div className="all-plans-have-a-7-day-cycle-wrapper">
                <div className="all-plans-have1">
                  All plans have a 7-day cycle
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
