import { useMemo } from "react";
import PropTypes from "prop-types";
import "./BenefitItem.css";

const BenefitItem = ({
  className = "",
  goMoWorldIconsFA2022048x2,
  heading3NoHiddenCostNoCon,
  experienceTheFreedomOfCon,
  propFlex,
}) => {
  const benefitItemStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className={`benefit-item ${className}`} style={benefitItemStyle}>
      <img
        className="gomoworld-icons-fa2-02-2048x20"
        loading="lazy"
        alt=""
        src={goMoWorldIconsFA2022048x2}
      />
      <div className="benefit-description">
        <div className="heading-32">{heading3NoHiddenCostNoCon}</div>
        <div className="experience-the-freedom1">
          {experienceTheFreedomOfCon}
        </div>
      </div>
    </div>
  );
};

BenefitItem.propTypes = {
  className: PropTypes.string,
  goMoWorldIconsFA2022048x2: PropTypes.string,
  heading3NoHiddenCostNoCon: PropTypes.string,
  experienceTheFreedomOfCon: PropTypes.string,

  /** Style props */
  propFlex: PropTypes.any,
};

export default BenefitItem;
