import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductDescriptionPage from "./pages/ProductDescriptionPage";
import HowItWorks from "./pages/HowItWorks";
import CartDetailsPage from "./pages/CartDetailsPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingpage":
        title = "";
        metaDescription = "";
        break;
      case "/productdescriptionpage":
        title = "";
        metaDescription = "";
        break;
      case "/howitworks":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productlistingpage" element={<ProductListingPage />} />
      <Route
        path="/productdescriptionpage"
        element={<ProductDescriptionPage />}
      />
      <Route path="/howitworks" element={<HowItWorks />} />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
    </Routes>
  );
}
export default App;
