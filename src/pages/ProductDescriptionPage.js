import Header1 from "../components/Header1";
import Content from "../components/Content";
import Benefits from "../components/Benefits";
import HowItWorks from "../components/HowItWorks";
import CallToAction from "../components/CallToAction";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <Header1 />
      <Content />
      <Benefits />
      <HowItWorks />
      <CallToAction />
    </div>
  );
};

export default ProductDescriptionPage;
