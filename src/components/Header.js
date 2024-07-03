import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="background3">
        <div className="logo-container">
          <div className="logo">
            <div className="logo-link">
              <img
                className="logo-icon"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <a className="everselink3">EverseLink</a>
            </div>
          </div>
          <div className="navigation">
            <div className="item-link">Home</div>
            <div className="item-link1">Destinations</div>
            <div className="item-link2">How It Works</div>
            <div className="item-link3">Blog</div>
            <div className="item-link4">FAQs</div>
          </div>
          <div className="language-switcher">
            <div className="language-dropdown">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <a className="en">EN</a>
            </div>
            <button className="button3">
              <div className="godownload">GoDownload</div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
