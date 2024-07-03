import BenefitItem from "./BenefitItem";
import PropTypes from "prop-types";
import "./Benefits.css";

const Benefits = ({ className = "" }) => {
  return (
    <section className={`benefits ${className}`}>
      <div className="benefits-title">
        <h1 className="heading-27">EverseLink eSIM</h1>
        <div className="benefits-list">
          <BenefitItem
            goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2022048x20481png2@2x.png"
            heading3NoHiddenCostNoCon="United States Coverage with No Hidden Costs"
            experienceTheFreedomOfCon="Experience the freedom of connectivity across the United States with EverseLink's eSIM service – and best of all, no hidden costs. "
          />
          <BenefitItem
            goMoWorldIconsFA2022048x2="/gomoworld-icons-fa2032048x20482png@2x.png"
            heading3NoHiddenCostNoCon="No SIM No Worries"
            experienceTheFreedomOfCon="Say goodbye to the hassle of traditional SIM cards and hello to worry-free connectivity across the United States with EverseLink's eSIM service."
            propFlex="0.9656"
          />
        </div>
      </div>
    </section>
  );
};

Benefits.propTypes = {
  className: PropTypes.string,
};

export default Benefits;
