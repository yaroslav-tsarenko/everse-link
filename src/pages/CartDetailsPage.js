import FrameComponent5 from "../components/FrameComponent5";
import CartItems from "../components/CartItems";
import FooterDesktop from "../components/FooterDesktop";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent5 />
      <CartItems />
      <FooterDesktop
        linkAppleAppStore1svg="/link--appleappstore1svg4@2x.png"
        linkGooglePlayStore1svg="/link--googleplaystore1svg4@2x.png"
        linkOutputOnlinepngtoolsp="/link--outputonlinepngtoolspng4@2x.png"
        linkEsimsIoBadge7png="/link--esimsiobadge7png4@2x.png"
      />
    </div>
  );
};

export default CartDetailsPage;
