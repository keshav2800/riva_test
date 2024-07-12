import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import { IconWrapper } from './styles';
import Container from "../../common/Container";
import visa from "../../common/images/visa.webp";
import whatsapp from "../../common/images/whatsapp.png";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { FaWhatsapp } from 'react-icons/fa';


import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  FooterContainer,
  Language,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}


const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="25px" height="25px" />
      </a>
    );
    const iconStyle = {
      marginRight: '8px', // Adjust margin as needed
      verticalAlign: 'middle', // Align icons vertically with text
    };
  
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify="space-between">
            <Col lg={5} md={12} sm={12} xs={24} className="footer-column">
              <Title>{t("My Account")}</Title>
              <Large to="/my-account">{t("My Account")}</Large>
              <Large to="/register">{t("Register")}</Large>
              <Large to="/login">{t("Login")}</Large>
              <Large to="/view-order">{t("View Order")}</Large>
              <Large to="/track-shipment">{t("Track Your Shipment")}</Large>
              <Title>{t("We Accept")}</Title>
              <div className="card-images">
                <img src={visa} alt="Visa" width="170" />
              </div>
            </Col>

            <Col lg={5} md={12} sm={12} xs={24} className="footer-column">
              <Title>{t("Customer Service")}</Title>
              <Large to="/privacy-policy">{t("Privacy Policy")}</Large>
              <Large to="/terms-condition">{t("Terms & Condition")}</Large>
              <Large to="/shipping">{t("Shipping Policy")}</Large>
              <Large to="/return-and-refund-policy">{t("Return and Refund Policy")}</Large>
            </Col>

            <Col lg={5} md={12} sm={12} xs={24} className="footer-column">
              <Title>{t("Information")}</Title>
              <Large to="/about">{t("About Us")}</Large>
              <Large to="/contact">{t("Contact Us")}</Large>
              <Large to="/dropshipping">{t("Drop Shipping")}</Large>
              <Large to="/ecommerce-product-supplier">{t("E-Commerce Product Supplier")}</Large>
            </Col>

            <Col lg={5} md={12} sm={12} xs={24} className="footer-column">
              <Title>{t("Contact Us")}</Title>
              <Para>
              <IconWrapper>
                <FaMapMarkerAlt size={16} />
              </IconWrapper>
              Salaiwada, Sawantwadi Maharashtra-416510,India
              </Para>
              <Para>
              <IconWrapper>
                <FaPhoneAlt size={16} />
              </IconWrapper>
                <a href="tel:+91 9011623566">+91 9011623566</a>
              </Para>
              <Para>
              <IconWrapper>
                <FaEnvelope size={16} />
              </IconWrapper>
                <a href="mailto:rivaorganic2023@gmail.com">rivaorganic2023@gmail.com</a>
              </Para>
              <Title>{t("Join Our Community")}</Title>
              <div className="social-links">
              <SocialLink href="https://whatsapp.com/channel/" src="whatsapp.svg"/>
              </div>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "3rem" }}
          >
            <NavLink to="/">
              <LogoContainer>
                <SvgIcon
                  src="riva_logo.svg"
                  aria-label="homepage"
                  width="101px"
                  height="64px"
                />
              </LogoContainer>
            </NavLink>
            <FooterContainer>
              <SocialLink
                href="https://www.facebook.com/157588044112352"
                src="facebook1.svg"
              />
              <SocialLink
                href="https://www.instagram.com/rivaorganic/"
                src="instagram1.svg"
              />
              <SocialLink
                href="https://www.linkedin.com/in/riva-organic-1315312a4/"
                src="linkedin1.svg"
              />
              <SocialLink
                href="https://www.pinterest.com/rivaorganic/"
                src="pinterest1.svg"
              />
              <SocialLink
                href="https://www.twitter.com/RivaOrganic"
                src="twitterx1.svg"
              />
              <SocialLink
                href="https://www.youtube.com/@RivaOrganic/shorts"
                src="youtube1.svg"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
