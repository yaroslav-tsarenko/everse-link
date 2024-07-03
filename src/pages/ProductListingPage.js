import Header from "../components/Header";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import StepOne from "../components/StepOne";
import StepPairOne from "../components/StepPairOne";
import FooterDesktop from "../components/FooterDesktop";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <Header />
      <section className="hero-banner">
        <h1 className="heading-1">Connect Anywhere, with EverseLink</h1>
        <div className="hero-subtitle">
          <div className="experience-the-freedom">
            Experience the freedom of connectivity without boundaries with
            EverseLink. Our mission is simple: to keep you connected wherever
            life takes you.
          </div>
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent3 overlay="/overlay@2x.png" />
      <section className="how-it-works">
        <div className="how-it-works-title1">
          <b className="heading-21">How EverseLink Works</b>
        </div>
        <div className="step-rows-parent">
          <div className="step-rows">
            <StepOne
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2012048x20481png1@2x.png"
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
              goMoWorldIconsFA2012048x2="/gomoworld-icons-fa2022048x20481png1@2x.png"
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
          <div className="everse-link-image-parent">
            <div className="everse-link-image">
              <img className="image-3-icon1" alt="" src="/image-3@2x.png" />
              <div className="link-highlight">
                <div className="link-highlight-child" />
                <img className="vector-icon" alt="" src="/vector-1.svg" />
              </div>
            </div>
            <h2 className="everselink1">EverseLink</h2>
          </div>
          <StepPairOne
            goMoWorldIconsFA2032048x2="/gomoworld-icons-fa2032048x20481png1@2x.png"
            goMoWorldIconsFA2042048x2="/gomoworld-icons-fa2042048x20481png1@2x.png"
          />
        </div>
        <div className="setup-video1">
          <button className="button1">
            <a
              className="view-setup-video1"
              href="https://www.figma.com/design/5cxUhYpt3idQs6MbI4WUfM?node-id=3-2"
              target="_blank"
            >
              View Setup Video
            </a>
          </button>
        </div>
      </section>
      <section className="background-parent">
        <div className="background1">
          <h1 className="go1">Go</h1>
        </div>
        <div className="gomoworld-website-imagefiles-d1">
          <h1 className="coonect1">Coonect</h1>
        </div>
      </section>
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg1@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng1@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png1@2x.png"
      />
    </div>
  );
};

export default ProductListingPage;
