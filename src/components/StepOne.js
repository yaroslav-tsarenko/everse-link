import { useMemo } from "react";
import PropTypes from "prop-types";
import "./StepOne.css";

const StepOne = ({
  className = "",
  goMoWorldIconsFA2012048x2,
  heading4DownloadTheApp,
  headToTheAppStoreOrGoogle,
  searchGoMoWorldAndDownloa,
  propPadding,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMinHeight,
}) => {
  const stepOneStyle = useMemo(() => {
    return {
      padding: propPadding,
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
      minHeight: propMinHeight,
    };
  }, [propPadding, propAlignSelf, propFlex, propMinWidth, propMinHeight]);

  return (
    <div className={`step-one ${className}`} style={stepOneStyle}>
      <img
        className="gomoworld-icons-fa2-01-2048x20"
        loading="lazy"
        alt=""
        src={goMoWorldIconsFA2012048x2}
      />
      <div className="heading-4-download-the-app-parent">
        <div className="heading-4">{heading4DownloadTheApp}</div>
        <div className="head-to-the-container">
          <span>
            <p className="head-to-the">{headToTheAppStoreOrGoogle}</p>
            <p className="search-gomoworld-and">{searchGoMoWorldAndDownloa}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

StepOne.propTypes = {
  className: PropTypes.string,
  goMoWorldIconsFA2012048x2: PropTypes.string,
  heading4DownloadTheApp: PropTypes.string,
  headToTheAppStoreOrGoogle: PropTypes.string,
  searchGoMoWorldAndDownloa: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propMinHeight: PropTypes.any,
};

export default StepOne;
