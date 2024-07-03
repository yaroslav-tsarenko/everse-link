import PropTypes from "prop-types";
import "./FooterDesktop.css";

const FooterDesktop = ({
  className = "",
  linkAppleAppStore1svg,
  linkGooglePlayStore1svg,
  linkOutputOnlinepngtoolsp,
  linkEsimsIoBadge7png,
}) => {
  return (
    <footer className={`footer-desktop ${className}`}>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="footer-branding">
              <div className="footer-logo">
                <img className="footer-logo-icon" alt="" src="/vector-2.svg" />
                <div className="everselink-wrapper">
                  <b className="everselink4">EverseLink</b>
                </div>
              </div>
            </div>
            <h1 className="heading-31">GoDownload Now!</h1>
            <div className="app-stores">
              <div className="store-links">
                <img
                  className="link-apple-app-store-1svg"
                  loading="lazy"
                  alt=""
                  src={linkAppleAppStore1svg}
                />
                <img
                  className="link-google-play-store-1svg"
                  loading="lazy"
                  alt=""
                  src={linkGooglePlayStore1svg}
                />
              </div>
            </div>
          </div>
          <div className="footer-right">
            <div className="footer-links">
              <div className="social-links">
                <div className="link">
                  <div className="symbol"></div>
                </div>
                <div className="link1">
                  <div className="symbol1"></div>
                </div>
                <div className="link2">
                  <div className="symbol2"></div>
                </div>
                <div className="link3">
                  <div className="symbol3"></div>
                </div>
                <div className="link4">
                  <div className="symbol4"></div>
                </div>
              </div>
            </div>
            <div className="everselinkcom">
              © 2024 EverseLink.com     |     All Rights Reserved
            </div>
            <div className="footer-bottom">
              <div className="legal">
                <div className="image-links">
                  <img
                    className="link-output-onlinepngtoolsp"
                    loading="lazy"
                    alt=""
                    src={linkOutputOnlinepngtoolsp}
                  />
                </div>
                <img
                  className="link-esims-io-badge-7png"
                  loading="lazy"
                  alt=""
                  src={linkEsimsIoBadge7png}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-navigation">
          <div className="footer-menu-items">
            <div className="item-link5">News Room</div>
            <div className="item-link6">Legal</div>
            <div className="item-link7">Privacy Policy</div>
            <div className="item-link8">{`Terms & Conditions`}</div>
            <div className="item-link9">Cookie Policy</div>
            <div className="item-link10">Code of Practice</div>
            <div className="item-link11">Accessibility</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

FooterDesktop.propTypes = {
  className: PropTypes.string,
  linkAppleAppStore1svg: PropTypes.string,
  linkGooglePlayStore1svg: PropTypes.string,
  linkOutputOnlinepngtoolsp: PropTypes.string,
  linkEsimsIoBadge7png: PropTypes.string,
};

export default FooterDesktop;
