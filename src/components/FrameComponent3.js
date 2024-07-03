import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "", overlay }) => {
  return (
    <section className={`go-save-promo-wrapper ${className}`}>
      <div className="go-save-promo">
        <div className="go-save-content">
          <div className="heading-2-gosave-parent">
            <h1 className="heading-25">Unlock Savings</h1>
            <div className="get-ready-to">
              Get ready to save big and unlock amazing discounts.
            </div>
          </div>
          <button className="button5">
            <a
              className="gosave"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-973"
              target="_blank"
            >
              GoSave
            </a>
          </button>
        </div>
        <div className="article">
          <img className="overlay-icon" loading="lazy" alt="" src={overlay} />
          <div className="promo-content">
            <div className="heading-26">Here We Everselink !</div>
            <div className="from2">From</div>
            <div className="div2">€3.99</div>
            <div className="special-offers-for">
              Special offers for our launch in the US, Canada and Europe
            </div>
          </div>
          <button className="button6">
            <a
              className="gosignup"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-973"
              target="_blank"
            >
              GoSignUp
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
  overlay: PropTypes.string,
};

export default FrameComponent3;
