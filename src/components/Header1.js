import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="background6">
        <nav className="logo-parent">
          <div className="logo1">
            <div className="logo-icon-parent">
              <img
                className="logo-icon1"
                loading="lazy"
                alt=""
                src="/vector.svg"
              />
              <a className="everselink5">EverseLink</a>
            </div>
          </div>
          <div className="navigation1">
            <div className="item-link12">Home</div>
            <div className="item-link13">Destinations</div>
            <div className="item-link14">How It Works</div>
            <div className="item-link15">Blog</div>
            <div className="item-link16">FAQs</div>
          </div>
          <div className="language-download">
            <div className="language-selector">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
              <a className="en1">EN</a>
            </div>
            <button className="button7">
              <div className="godownload1">GoDownload</div>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
