import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { ReactComponent as ViewMore } from "../../icons/viewmore.svg";
import Article1 from "../../static/image/article1.jpg";
import Article2 from "../../static/image/article2.jpg";
import Article3 from "../../static/image/article3.jpg";
import Article4 from "../../static/image/article4.jpg";

const cards = [
  {
    id: 1,
    img: Article1,
    title: "글로벌 유럽 회사의 한국인 | 데이터 전문가 편",
    content: "#개발 #IT/기술 #데이터",
  },
  {
    id: 2,
    img: Article2,
    title: "인사담당자 이직이 더 어렵다고요!",
    content: "#개발 #커리어고민 #취업/이직",
  },
  {
    id: 3,
    img: Article3,
    title: "스타트업의 체계 없음이 가장 두려웠죠!",
    content: "#개발 #취업/이직 #커리어고민",
  },
  {
    id: 4,
    img: Article4,
    title: "BBC, 넷플릭스, 구글, 페이스북 엔지니어 인터뷰",
    content: "#개발 #취업/이직 #커리어고민",
  },
  {
    id: 5,
    img: Article4,
    title: "BBC, 넷플릭스, 구글, 페이스북 엔지니어 인터뷰",
    content: "#개발 #취업/이직 #커리어고민",
  },
];

const Article = () => {
  return (
    <ArticleTool>
      <GrowthSlide />
    </ArticleTool>
  );
};

const GrowthSlide = () => {
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
  height: 400px;
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
  margin: 130px 2px 10px 2px;
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
  border-bottom: 2px solid #eeeeee;
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
  margin-top: 20px;
`;
const Content = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-top: 15px;
`;

export default Article;
