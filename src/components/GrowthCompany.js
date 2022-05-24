import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GrowthImg from "../static/image/Growth.png";
import Growthbanner1 from "../static/image/GrowthImg1.jpg";
import Growthbanner2 from "../static/image/Growthimg2.jpg";
import styled from "styled-components";
import { ReactComponent as ViewMore } from "../icons/viewmore.svg";
import Growthimg1 from "../static/image/growthlogo1.jpg";
import Growthimg2 from "../static/image/growthlogo2.jpg";

const GrowthSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <div className="Home__Tool">
      <TextTool>
        <TextTag>#급성장 중</TextTag>
        <Img src={GrowthImg} />
        <Text>회사를 소개합니다</Text>
      </TextTool>
      <ViewMoreTool>
        <TextMore>포지션으로 더보기</TextMore>
        <ViewMore />
      </ViewMoreTool>
      <Wrap>
        <Slider className="slider" {...settings}>
          <ItemTool>
            <Item1></Item1>
            <Nav>
              <Box>
                <Img1 src={Growthimg1} />
                <div>
                  <BoxBrand>딜리셔스(신상마켓)</BoxBrand>
                  <BoxText>IT, 컨텐츠</BoxText>
                </div>
              </Box>
              <div>
                <FollowButton>팔로우</FollowButton>
              </div>
            </Nav>
          </ItemTool>

          <ItemTool>
            <Item2></Item2>
            <Nav>
              <Box>
                <Img1 src={Growthimg2} />
                <div>
                  <BoxBrand>야놀자</BoxBrand>
                  <BoxText>IT, 컨텐츠</BoxText>
                </div>
              </Box>
              <div>
                <FollowButton>팔로우</FollowButton>
              </div>
            </Nav>
          </ItemTool>

          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
        </Slider>
      </Wrap>
    </div>
  );
};

const Img = styled.img`
  width: 24px;
  height: 24px;
  margin: 0 5px;
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
const Text = styled.div`
  font-size: 22px;
  margin: 0 2px;
`;
const ViewMoreTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: -43px;
`;
const TextMore = styled.div`
  margin: 5px 5px;
  font-size: 15px;
  color: #767676;
  font-weight: 500;
`;
const Item1 = styled.div`
  background-image: url(${Growthbanner1});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 520px;
  border-radius: 5px;
`;

const Wrap = styled.div`
  margin: 5% auto;
  // width: 100%;
  width: 1080px;
  height: 450px;
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
const Item2 = styled.div`
  background-image: url(${Growthbanner2});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 520px;
  border-radius: 5px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 520px;
  margin-top: 20px;
`;
const ItemTool = styled.div`
  width: 1060px;
`;
const Box = styled.div`
  display: flex;
`;
const Img1 = styled.img`
  width: 42px;
  height: 42px;
  border: 1px solid #eeeeee;
`;
const BoxBrand = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-left: 10px;
  margin-bottom: 10px;
`;
const BoxText = styled.div`
  font-size: 14px;
  color: #999999;
  margin-left: 10px;
`;
const FollowButton = styled.button`
  width: 98px;
  height: 40px;
  color: #3366ff;
  border: 1px solid #e1e2e3;
  background-color: transparent;
  border-radius: 30px;
  font-size: 15px;
  font-weight: 700;
`;
export default GrowthSlide;
