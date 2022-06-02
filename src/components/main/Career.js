import React from "react";
import styledComponents from "styled-components";
import styled from "styled-components";
import { ReactComponent as Questionsvg } from "../../icons/question.svg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactComponent as ViewBtn } from "../../icons/viewbtn.svg";
import CardBox from "./CardBox";

const CarrerSlide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "130px",
    slidesToShow: 6,
    speed: 500,
    arrows: false,
    prevArrow: <ArrowButton pos="left"></ArrowButton>,
    nextArrow: <ArrowButton pos="right"></ArrowButton>,
  };

  return (
    <SlideContainer>
      <Slider {...settings}>
        <div>
          <Item>경영/전략</Item>
        </div>
        <div>
          <Item>브랜딩</Item>
        </div>
        <div>
          <Item>커리어고민</Item>
        </div>
        <div>
          <Item>인간관계</Item>
        </div>
        <div>
          <Item>UX/UI</Item>
        </div>
        <div>
          <Item>조직문화</Item>
        </div>
        <div>
          <Item>서비스기획</Item>
        </div>
        <div>
          <Item>리더십</Item>
        </div>
        <div>
          <Item>개발</Item>
        </div>
        <div>
          <Item>노무</Item>
        </div>
        <div>
          <Item>회사생활</Item>
        </div>
        <div>
          <Item>데이터</Item>
        </div>
        <div>
          <Item>IT/기술</Item>
        </div>
        <div>
          <Item>HR</Item>
        </div>
      </Slider>
    </SlideContainer>
  );
};

const Career = () => {
  return (
    <CarrerBody>
      <TextBox>
        <BodyText>나에게 필요한 커리어 인사이트</BodyText>
        <Questionsvg />
      </TextBox>
      <SlideBox>
        <CarrerSlide />
        <Button>
          <ViewBtn />
        </Button>
      </SlideBox>
      <CardBox />
    </CarrerBody>
  );
};

const CarrerBody = styled.div`
  width: 1060px;
  height: 1020.2px;
  margin: 0 auto;
  margin-bottom: -70px;
  border-bottom: 2px solid #eeeeee;
`;
const BodyText = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-right: 5px;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 0 35px 0;
`;
const Item = styled.button`
  width: 98px;
  height: 50px;
  border-radius: 5px;
  border: none;
  color: #333;
  background-color: #f2f4f7
  border: 1px solid #f2f4f7;
  margin: 0 10px;
  font-size: 15px;
`;
const SlidePage = styled.div``;
const SlideBox = styled.div`
  width: 1060px;
  display: flex;
`;
const ArrowButton = styled.button`
  background-color: black;
  border-radius: 30px;
`;
const SlideContainer = styled.div`
  width: 920px;
  height: 50px;
  margin-left: 35px;
  white-space: nowrap;
`;
const Button = styled.button`
  margin-left: 30px;
  width: 50px;
  height: 50px;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
  box-shadow: 0 4px 4px rbg(0 0 0 / 5%);
  color: #939393;
`;
export default Career;
