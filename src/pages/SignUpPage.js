import Header1 from "../components/Header1";
import PageBody from "../components/PageBody";
import FooterDesktop from "../components/FooterDesktop";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <Header1 />
      <PageBody />
      <FooterDesktop linkAppleAppStore1svg="/link--appleappstore1svg@2x.png" />
    </div>
  );
};

export default SignUpPage;
