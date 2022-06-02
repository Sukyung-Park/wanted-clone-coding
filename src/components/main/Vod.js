import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { ReactComponent as ViewMore } from "../../icons/viewmore.svg";
import Vod1 from "../../static/image/vod1.jpg";
import Vod2 from "../../static/image/vod2.jpg";
import Vod3 from "../../static/image/vod3.jpg";
import Vod4 from "../../static/image/vod4.jpg";

const cards = [
  {
    id: 1,
    img: Vod1,
    name: "원티드랩 류다현",
    title:
      "Wanted Talk Engineering #1: 테스트 코드와 배포 시스템 - 서버 배포 방식",
    content: "(무료) 테스트 코드와 배포 시스템: Wanted...",
  },
  {
    id: 2,
    img: Vod2,
    name: "원티드랩 유지윤",
    title: "Power BI로 데이터 시각화하기",
    content: "Power BI로 데이터 시작하기 : Wanted Ho...",
  },
  {
    id: 3,
    img: Vod3,
    name: "애프터모멘트 박창선",
    title: "터지는 콘텐츠는 이렇게 만듭니다 Part2 : 독자의 마음 - 박창선",
    content: "터지는 콘텐츠는 이렇게 만듭니다 : Wanted...",
  },
  {
    id: 4,
    img: Vod4,
    name: "원티드랩 최보명",
    title: "포트폴리오를 부탁해",
    content: "[무료] 포트폴리오를 부탁해 by 원티드",
  },
  {
    id: 5,
    img: Vod4,
    name: "원티드랩 최보명",
    title: "포트폴리오를 부탁해",
    content: "[무료] 포트폴리오를 부탁해 by 원티드",
  },
];

const Vod = () => {
  return (
    <ArticleTool>
      <VodSlide />
    </ArticleTool>
  );
};

const VodSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
  };
  return (
    <HomeTool>
      <TextTool>
        <TextTag>3분만에 읽는 Wanted+ 아티클</TextTag>
      </TextTool>
      <ViewMoreTool>
        <TextMore>아티클 전체보기</TextMore>
        <ViewMore />
      </ViewMoreTool>
      <Wrap>
        <Slider className="slider" {...settings}>
          {cards.map((card) => {
            return (
              <div key={card.id}>
                <ImageContainer>
                  <Image src={card.img} />
                  <TextContainer>
                    <Name key={card.id}>{card.name}</Name>
                    <Title key={card.id}>{card.title}</Title>
                    <Content key={card.id}>{card.content}</Content>
                  </TextContainer>
                </ImageContainer>
              </div>
            );
          })}
        </Slider>
      </Wrap>
    </HomeTool>
  );
};
const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
`;
const Image = styled.img`
  width: 250px;
  height: 175px;
  object-fit: cover;
  border-radius: 5px;
`;
const ImageContainer = styled.div`
  color: #333;
  font-size: 16px;
  font-weight: 700;
  width: 270px;
  height: 290.14px;
  padding: 10px;
  box-sizing: border-box;
`;
const TextContainer = styled.div``;
const HomeTool = styled.div`
  width: 100%;
  height: 440px;
`;
const ArticleTool = styled.div`
  width: 100%;
  height: 380px;
  background-color: #fff;
`;
const TextTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px 2px 10px 2px;
`;
const TextTag = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin: 0 2px;
`;

const ViewMoreTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const TextMore = styled.div`
  margin: 5px 5px;
  font-size: 15px;
  color: #767676;
  font-weight: 600;
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 1080px;
  height: 325px;
  .slick-prev:before {
    opaicty: 1;
    color: black;
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

const Title = styled.div`
  margin-top: 15px;
  margin-bottom: 5px;
  line-height: 1.5;
  font-weight: 900;
`;
const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 15px;
  color: #aaa;
  font-weight: 600;
`;

export default Vod;
