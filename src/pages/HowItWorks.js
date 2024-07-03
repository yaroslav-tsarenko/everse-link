import Header1 from "../components/Header1";
import StepOne from "../components/StepOne";
import StepPairOne from "../components/StepPairOne";
import FrameComponent3 from "../components/FrameComponent3";
import FooterDesktop from "../components/FooterDesktop";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="howitworks">
      <Header1 />
      <section className="frame-parent">
        <div className="heading-2-how-gomoworld-work-wrapper">
          <b className="heading-22">How EverseLink Works</b>
        </div>
        <div className="app-download-icons-parent">
          <div className="app-download-icons">
            <StepOne
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png3@2x.png"
              heading4DownloadTheApp="Download The App"
              headToTheAppStoreOrGoogle="Head to the App Store or Google Play,"
              searchGoMoWorldAndDownloa="search ‘GoMoWorld’ and download."
              propPadding="0px 3px"
              propAlignSelf="stretch"
              propFlex="unset"
              propMinWidth="unset"
              propMinHeight="unset"
            />
            <StepOne
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2022048x20481png3@2x.png"
              heading4DownloadTheApp="Choose Your Destination"
              headToTheAppStoreOrGoogle="From the dropdown menu, choose the"
              searchGoMoWorldAndDownloa="country you’re going to."
              propPadding="unset"
              propAlignSelf="stretch"
              propFlex="unset"
              propMinWidth="unset"
              propMinHeight="unset"
            />
          </div>
          <div className="app-preview-parent">
            <div className="app-preview">
              <img className="image-3-icon2" alt="" src="/image-3@2x.png" />
              <div className="app-preview-overlay">
                <div className="app-preview-overlay-child" />
                <img
                  className="vector-icon1"
                  loading="lazy"
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <h1 className="everselink2">EverseLink</h1>
          </div>
          <StepPairOne
            goMoWorldIconsFA2032048x2="/gomoworld-icons-fa2032048x20481png3@2x.png"
            goMoWorldIconsFA2042048x2="/gomoworld-icons-fa2042048x20481png3@2x.png"
          />
        </div>
        <div className="button-wrapper">
          <button className="button2">
            <a
              className="view-setup-video2"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-2"
              target="_blank"
            >
              View Setup Video
            </a>
          </button>
        </div>
      </section>
      <FrameComponent3 overlay="/overlay1@2x.png" />
      <section className="background-group">
        <div className="background2">
          <h1 className="go2">Go</h1>
        </div>
        <div className="gomoworld-website-imagefiles-d2">
          <h1 className="coonect2">Coonect</h1>
        </div>
      </section>
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg3@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg3@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng3@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png3@2x.png"
      />
    </div>
  );
};

export default HowItWorks;
