import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import FooterDesktop from "../components/FooterDesktop";
import "./AccouhtPage.css";

const AccouhtPage = () => {
  return (
    <div className="accouhtpage">
      <FrameComponent
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <FrameComponent1 />
      <FooterDesktop linkAppleAppStore1svg="/link--appleappstore1svg@2x.png" />
    </div>
  );
};

export default AccouhtPage;
