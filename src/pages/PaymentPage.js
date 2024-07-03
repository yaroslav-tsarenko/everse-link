import Header1 from "../components/Header1";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FooterDesktop from "../components/FooterDesktop";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <Header1 />
      <section className="footer-container">
        <div className="footer-container-inner">
          <FrameComponent3 />
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <FrameComponent2 />
        </div>
      </section>
      <FooterDesktop linkAppleAppStore1svg="/link--appleappstore1svg1@2x.png" />
    </div>
  );
};

export default PaymentPage;
