import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import YouTube from 'react-youtube';
import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import img from "../../common/images/explore_cover.jpeg";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
  ImageWrapper,
  StyledSvgIcon
} from "./styles";

const ContentBlock = ({
  videoId,
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        >
           <Col lg={11} md={11} sm={12} xs={24}>
           <ImageWrapper>
           <StyledSvgIcon>
                <SvgIcon src={icon} width="100%" height="100%" />
              </StyledSvgIcon>
            </ImageWrapper>
          </Col>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              <Content>{t(content)}</Content>
              {direction === "right" ? (
                <ButtonWrapper>
                  {typeof button === "object" &&
                    button.map(
                      (
                        item: {
                          color?: string;
                          title: string;
                        },
                        id: number
                      ) => {
                        return (
                          <Button
                            key={id}
                            color={item.color}
                            onClick={() => scrollTo("about")}
                          >
                            {t(item.title)}
                          </Button>
                        );
                      }
                    )}
                </ButtonWrapper>
              ) : (
                <ServiceWrapper>
                  <Row justify="space-between">
                    {typeof section === "object" &&
                      section.map(
                        (
                          item: {
                            title: string;
                            content: string;
                            // icon: string;
                            videoId: string;
                          },
                          id: number
                        ) => {
                          return (
                            <Col key={id} span={11}>
                              <YouTube videoId={item.videoId} opts={{ width: '100%', height: '200px' }} />
                              {/* <SvgIcon
                                src={item.icon}
                                width="60px"
                                height="60px"
                              /> */}
                              <MinTitle>{t(item.title)}</MinTitle>
                              <MinPara>{t(item.content)}</MinPara>
                            </Col>
                          );
                        }
                      )}
                  </Row>
                </ServiceWrapper>
              )}
            </ContentWrapper>
          </Col>
        </StyledRow>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
