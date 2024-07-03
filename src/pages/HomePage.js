import Header from "../components/Header";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import StepOne from "../components/StepOne";
import StepPairOne from "../components/StepPairOne";
import FooterDesktop from "../components/FooterDesktop";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <FrameComponent2 />
      <FrameComponent1 />
      <FrameComponent />
      <section className="how-it-works-title-parent">
        <div className="how-it-works-title">
          <h1 className="heading-2">How EverseLink Works</h1>
        </div>
        <div className="steps">
          <div className="step-pair-one">
            <StepOne
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png@2x.png"
              heading4DownloadTheApp="Download The App"
              headToTheAppStoreOrGoogle="Head to the App Store or Google Play,"
              searchGoMoWorldAndDownloa="search ‘GoMoWorld’ and download."
            />
            <StepOne
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2022048x20481png@2x.png"
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
          <div className="brand-logo-parent">
            <div className="brand-logo">
              <img className="image-3-icon" alt="" src="/image-3@2x.png" />
              <div className="brand-link">
                <div className="brand-border" />
                <img className="brand-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
            <h1 className="everselink">EverseLink</h1>
          </div>
          <StepPairOne
            goMoWorldIconsFA2032048x2="/gomoworld-icons-fa2032048x20481png@2x.png"
            goMoWorldIconsFA2042048x2="/gomoworld-icons-fa2042048x20481png@2x.png"
          />
        </div>
        <div className="setup-video">
          <button className="button">
            <a
              className="view-setup-video"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-2"
              target="_blank"
            >
              View Setup Video
            </a>
          </button>
        </div>
      </section>
      <section className="call-to-action">
        <div className="background">
          <h1 className="go">Go</h1>
        </div>
        <div className="gomoworld-website-imagefiles-d">
          <h1 className="coonect">Coonect</h1>
        </div>
      </section>
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png@2x.png"
      />
    </div>
  );
};

export default HomePage;
