import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { Menu as AntMenu } from "antd";

export const HeaderSection = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: 1rem 1.5rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
`;

export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

export const NavLink = styled.div`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled.div`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const Burger = styled.div`
  @media only screen and (max-width: 890px) {
  align-self: center;
    display: block;
  }

  display: none;

  svg {
    fill: #2e186a;
  }
`;

export const NotHidden = styled.div`
  @media only screen and (max-width: 890px) {
    display: none;
  }

  display: flex;
  align-items: center;
`;

export const Menu = styled.h5`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  color: #333;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1rem;
  color: #333;
  transition: color 0.2s ease-in;
  margin: 0.5rem 1rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 1rem;
  }

  &:hover {
    color: #0073e6;
  }
`;

export const Label = styled.span`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  margin-right: auto;
  // justify-content: space-around;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)`
  font-size: 22px;
`;

export const Span = styled.span`
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-weight: bold;
  color: #0a0a0f;
  font-family: 'Proxima Nova', sans-serif;

  &:hover,
  &:active,
  &:focus {
    color: #000;
    text-underline-position: under;
    text-decoration: underline;
  }
`;
export const CustomDropdownMenu = styled(AntMenu)`
  width: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`;

export const CustomMenuItemGroup = styled(AntMenu.ItemGroup)`

  display: flex;
  flex-direction: column;

  .ant-menu-item {
    padding-left: 24px !important;
  }

  .ant-menu-item-group-title {
    font-weight: bold;
    color: #ff5733;
  }
`;
