import FooterDesktop from "./FooterDesktop";
import PropTypes from "prop-types";
import "./CallToAction.css";

const CallToAction = ({ className = "" }) => {
  return (
    <section className={`call-to-action1 ${className}`}>
      <div className="go-mo-world-image">
        <div className="background9">
          <h1 className="go3">Go</h1>
        </div>
        <div className="gomoworld-website-imagefiles-d3">
          <h1 className="coonect3">Coonect</h1>
        </div>
      </div>
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg2@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg2@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng2@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png2@2x.png"
      />
    </section>
  );
};

CallToAction.propTypes = {
  className: PropTypes.string,
};

export default CallToAction;
