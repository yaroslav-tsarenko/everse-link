import Link from "./Link";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "" }) => {
  return (
    <section className={`search-bar-wrapper ${className}`}>
      <div className="search-bar">
        <div className="form-input">
          <input
            className="search-to-find"
            placeholder="Search to find your destination country"
            type="text"
          />
          <img className="button-icon1" alt="" src="/button1.svg" />
        </div>
        <div className="destination-grid">
          <div className="link6">
            <img
              className="americajpg-icon"
              loading="lazy"
              alt=""
              src="/americajpg@2x.png"
            />
            <div className="destination-cards">
              <a
                className="heading-24"
                href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-1990"
                target="_blank"
              >
                United States
              </a>
              <div className="destination-prices">
                <div className="price-labels">
                  <div className="from1">from</div>
                  <div className="div1">€3.99</div>
                </div>
                <img className="icon1" loading="lazy" alt="" src="/icon.svg" />
              </div>
            </div>
          </div>
          <Link europepng="/europepng@2x.png" heading2Europe="Europe" />
          <Link europepng="/canadapng@2x.png" heading2Europe="Canada" />
          <Link europepng="/indiapng@2x.png" heading2Europe="India" />
          <Link europepng="/mexicopng@2x.png" heading2Europe="Mexico" />
          <Link europepng="/japanpng@2x.png" heading2Europe="Japan" />
          <Link europepng="/australiapng@2x.png" heading2Europe="Australia" />
          <Link
            europepng="/newzealandpng@2x.png"
            heading2Europe="New Zealand"
          />
          <Link europepng="/perupng@2x.png" heading2Europe="Peru" />
          <Link
            europepng="/singaporee1685539534613png@2x.png"
            heading2Europe="Singapore"
          />
          <Link europepng="/thailandpng@2x.png" heading2Europe="Thailand" />
          <Link europepng="/francepng@2x.png" heading2Europe="France" />
        </div>
        <button className="button4">
          <div className="browse-all-170">Browse All 170 Destinations</div>
        </button>
      </div>
    </section>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent4;
