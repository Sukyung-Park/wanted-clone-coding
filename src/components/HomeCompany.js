import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeImg from "../static/image/home.png";
import Homebanner1 from "../static/image/homebanner1.jpg";
import Homebanner2 from "../static/image/homebanner2.jpg";
import styled from "styled-components";
import { ReactComponent as ViewMore } from "../icons/viewmore.svg";
import Homeimg1 from "../static/image/homeimg1.jpg";
import Homeimg2 from "../static/image/homeimg2.jpg";

const HomeSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: false,
  };
  return (
    <div className="Home__Tool">
      <TextTool>
        <TextTag>#재택근무</TextTag>
        <Img src={HomeImg} />
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
                <Img1 src={Homeimg1} />
                <div>
                  <BoxBrand>리앤한</BoxBrand>
                  <BoxText>판매, 유통</BoxText>
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
                <Img1 src={Homeimg2} />
                <div>
                  <BoxBrand>리앤한</BoxBrand>
                  <BoxText>판매, 유통</BoxText>
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
  margin: 20px 2px 10px 2px;
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
  background-image: url(${Homebanner1});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 520px;
  border-radius: 5px;
`;

const Wrap = styled.div`
  margin: 5% auto;
  width: 100%;
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
  background-image: url(${Homebanner2});
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
const ItemTool = styled.div``;
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
export default HomeSlide;
