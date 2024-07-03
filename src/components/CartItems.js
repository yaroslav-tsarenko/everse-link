import CardContent from "./CardContent";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="items-container">
        <div className="item-card">
          <div className="item-table">
            <div className="header2">
              <div className="header-child" />
              <div className="header-labels">
                <div className="product">Product</div>
              </div>
              <div className="header-labels1">
                <div className="price">Price</div>
              </div>
              <div className="quantity">Quantity</div>
              <div className="total">Total</div>
            </div>
            <CardContent
              productThumbnail="/rectangle-4554@2x.png"
              fentyBeauty50OFFGiftCard="Fenty Beauty 50% OFF Gift Card"
              discount20OFF="Discount: 20% OFF"
            />
          </div>
          <div className="item-header">
            <div className="item-divider" />
            <CardContent
              productThumbnail="/rectangle-4554-1@2x.png"
              fentyBeauty50OFFGiftCard="Shopping Spree Gift Card"
              discount20OFF="Worth USD $400"
            />
          </div>
          <div className="item-header1">
            <div className="item-header-child" />
            <div className="wrapper-rectangle-4554-parent">
              <div className="wrapper-rectangle-4554">
                <img
                  className="wrapper-rectangle-4554-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-4554-1@2x.png"
                />
              </div>
              <div className="travel-giftcard-parent">
                <div className="travel-giftcard">Travel GiftCard</div>
                <div className="worth-usd-400">Worth USD $400</div>
              </div>
              <div className="parent">
                <div className="div3">$120.00</div>
                <div className="credits1">12 Credits</div>
              </div>
              <div className="frame-container">
                <div className="price-increase-parent">
                  <div className="price-increase">
                    <img
                      className="icon-plus1"
                      loading="lazy"
                      alt=""
                      src="/iconplus.svg"
                    />
                  </div>
                  <div className="div4">3</div>
                  <input className="price-decrease" type="checkbox" />
                </div>
                <div className="hourly-parent">
                  <div className="hourly1">Hourly</div>
                  <div className="duration-value1">
                    <img
                      className="duration-value-child"
                      alt=""
                      src="/time-input.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="div5">$120.00</div>
            </div>
          </div>
          <div className="action-divider-parent">
            <div className="action-divider" />
            <div className="action-buttons">
              <button className="button9">
                <img className="tag-icon" alt="" src="/tag-icon.svg" />
                <div className="button10">Go Back</div>
                <img className="tag-icon1" alt="" src="/tag-icon.svg" />
              </button>
              <button className="button11">
                <img className="tag-icon2" alt="" src="/tag-icon.svg" />
                <div className="button12">Checkout</div>
                <img className="tag-icon3" alt="" src="/tag-icon.svg" />
              </button>
            </div>
          </div>
        </div>
        <div className="checkout-details">
          <div className="summary-header">
            <div className="header3">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="summary-columns">
            <div className="total-values">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="total-separator">$360.00</div>
            </div>
          </div>
          <div className="additional-charges">
            <div className="charge-labels">
              <div className="charge-types">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="charge-types1">
                <div className="div6">$0.00</div>
                <div className="div7">$0.00</div>
              </div>
            </div>
          </div>
          <div className="summary-divider">
            <div className="summary-divider1" />
          </div>
          <div className="summary-columns1">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div8">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
