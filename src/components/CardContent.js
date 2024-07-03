import PropTypes from "prop-types";
import "./CardContent.css";

const CardContent = ({
  className = "",
  productThumbnail,
  fentyBeauty50OFFGiftCard,
  discount20OFF,
}) => {
  return (
    <div className={`card-content ${className}`}>
      <div className="wrapper-product-thumbnail">
        <img
          className="product-thumbnail-icon"
          loading="lazy"
          alt=""
          src={productThumbnail}
        />
      </div>
      <div className="card-title">
        <div className="fenty-beauty-50">{fentyBeauty50OFFGiftCard}</div>
        <div className="discount-20-off">{discount20OFF}</div>
      </div>
      <div className="card-actions">
        <div className="item-price">
          <div className="price-value">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="price-adjustment">
          <div className="adjust-buttons">
            <div className="price-controls">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="icon-separator">3</div>
            <input className="price-controls1" type="checkbox" />
          </div>
          <div className="item-time">
            <div className="hourly">Hourly</div>
            <div className="duration-value">
              <img className="time-input-icon" alt="" src="/time-input.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="separator2">$120.00</div>
    </div>
  );
};

CardContent.propTypes = {
  className: PropTypes.string,
  productThumbnail: PropTypes.string,
  fentyBeauty50OFFGiftCard: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default CardContent;
