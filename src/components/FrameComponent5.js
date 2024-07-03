import Header1 from "./Header1";
import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`header-parent ${className}`}>
      <Header1 />
      <div className="cart-content-wrapper">
        <div className="cart-content">
          <div className="cart-title-container">
            <h1 className="your-cart">Your Cart</h1>
          </div>
          <div className="view-or-edit">
            View or edit your cart before checkout
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
