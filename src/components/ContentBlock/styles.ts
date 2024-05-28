import { Row } from "antd";
import styled from "styled-components";

export const ContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 4rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const StyledRow = styled(Row)`
  flex-direction: ${({ direction }: { direction: string }) =>
    direction === "left" ? "row" : "row-reverse"};
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;
export const StyledSvgIcon = styled.div`
  margin-left: 15px;
  width: 80%;
  height: 80%;
  border-radius: 15px;
  transition: transform 0.5s, box-shadow 0.5s;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: perspective(1000px) rotateY(10deg) rotateX(10deg);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background-color: white;
  }
`;

export const ImageWrapper = styled.div`
  perspective: 1000px;
`;
