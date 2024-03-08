import "./Footer.css";
import FooterService from "./FooterService";
import FooterCopyright from "./FooterCopyright";
import InstitutionalFooter from "./InstitutionalFooter";
import FooterLogo from "./FooterLogo";
import FooterSocialNetworks from "./FooterSocialNetworks";

const Footer = () => {
  return (
    <footer className="footer__content">
      <div className="footer__information">
        <FooterLogo />
        <InstitutionalFooter />
        <FooterService />
        <FooterSocialNetworks />
      </div>
      <FooterCopyright />
    </footer>
  );
};

export default Footer;
