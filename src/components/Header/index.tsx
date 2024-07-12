import { useState } from "react";
import { Link } from 'react-router-dom';
import { Row, Col, Drawer, Dropdown, Menu as AntMenu } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { UserOutlined, LoginOutlined, DownOutlined } from '@ant-design/icons';
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  CustomDropdownMenu,
  CustomMenuItemGroup
} from "./styles";

const Header = ({ t }: { t: TFunction }) => {
  const [visible, setVisibility] = useState(false);

  const toggleButton = () => {
    setVisibility(!visible);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
    setVisibility(false);
  };

  const handleWinningProductsClick = () => {
    window.open("https://rivaorganic.store/collections/all", "_blank");
    setVisibility(false);
  };

  const categoryMenu = (
    <CustomDropdownMenu>
      <CustomMenuItemGroup title="Health and Personal Care">
        <AntMenu.Item key="1" onClick={() => scrollTo("Massager")}>
          Massager
        </AntMenu.Item>
        <AntMenu.Item key="2" onClick={() => scrollTo("Weight Scale")}>
        Weight Scale
        </AntMenu.Item>
        <AntMenu.Item key="3" onClick={() => scrollTo("Personal Care")}>
        Personal Care
        </AntMenu.Item>
        <AntMenu.Item key="4" onClick={() => scrollTo("Beauty Products")}>
        Beauty Products
        </AntMenu.Item>
      </CustomMenuItemGroup>
      <CustomMenuItemGroup title="Gym And Sports">
        <AntMenu.Item key="5" onClick={() => scrollTo("Gym Accessories")}>
        Gym Accessories
        </AntMenu.Item>
        <AntMenu.Item key="6" onClick={() => scrollTo("Sports And Fitness")}>
        Sports And Fitness
        </AntMenu.Item>
        <AntMenu.Item key="7" onClick={() => scrollTo("Toys")}>
        Toys
        </AntMenu.Item>
        <AntMenu.Item key="8" onClick={() => scrollTo("Sports Wear")}>
        Sports Wear
        </AntMenu.Item>
      </CustomMenuItemGroup>
      <CustomMenuItemGroup title="Home Kitchen">
        <AntMenu.Item key="9" onClick={() => scrollTo("Home&Kitchen")}>
        Home&Kitchen
        </AntMenu.Item>
        <AntMenu.Item key="10" onClick={() => scrollTo("Kitchenware")}>
        Kitchenware
        </AntMenu.Item>
        <AntMenu.Item key="11" onClick={() => scrollTo("Cleaning Accessories")}>
        Cleaning Accessories
        </AntMenu.Item>
        <AntMenu.Item key="12" onClick={() => scrollTo("Home Improvement")}>
        Home Improvement
        </AntMenu.Item>
      </CustomMenuItemGroup>
      <CustomMenuItemGroup title="Bags">
        <AntMenu.Item key="13" onClick={() => scrollTo("Travelling Bags")}>
        Travelling Bags
        </AntMenu.Item>
        <AntMenu.Item key="14" onClick={() => scrollTo("Gym Bags")}>
        Gym Bags
        </AntMenu.Item>
        <AntMenu.Item key="15" onClick={() => scrollTo("Cosmetics Bags")}>
        Cosmetics Bags
        </AntMenu.Item>
        <AntMenu.Item key="16" onClick={() => scrollTo("Brown Box")}>
        Brown Box
        </AntMenu.Item>
      </CustomMenuItemGroup>
    </CustomDropdownMenu>
  );

  const MenuItem = () => (
    <>
      <CustomNavLinkSmall onClick={() => scrollTo("about")}>
        <Span>{t("About US")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
        <Span>{t("Mission")}</Span>
      </CustomNavLinkSmall>
      <Dropdown overlay={categoryMenu}>
        <CustomNavLinkSmall>
          <Span>
            {t("Category")} <DownOutlined />
          </Span>
        </CustomNavLinkSmall>
      </Dropdown>
      <CustomNavLinkSmall onClick={() => scrollTo("contact")}>
        <Span>{t("Contact")}</Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall>
        <Span>
          <UserOutlined style={{ marginRight: "8px" }} />
          {t("Login")}
        </Span>
      </CustomNavLinkSmall>
      <CustomNavLinkSmall>
        <Span>
          <LoginOutlined style={{ marginRight: "8px" }} />
          {t("Sign Up")}
        </Span>
      </CustomNavLinkSmall>
    </>
  );

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo193.svg" width="100px" height="100px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={toggleButton}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={visible} onClose={toggleButton}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={toggleButton}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
