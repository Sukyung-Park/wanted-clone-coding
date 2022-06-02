import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Now1 from "../static/image/now1.png";
import Now2 from "../static/image/now2.png";
import styled from "styled-components";
import wantlogo1 from "../static/image/wantlogo1.jpg";
import wantlogo2 from "../static/image/wantlogo2.jpg";
import wantlogo3 from "../static/image/wantlogo3.jpg";
import wantlogo4 from "../static/image/wantlogo4.jpg";
import wantlogo5 from "../static/image/wantlogo5.jpg";
import wantlogo6 from "../static/image/wantlogo6.jpg";
import wantlogo7 from "../static/image/wantlogo7.jpg";
import wantlogo8 from "../static/image/wantlogo8.jpg";

import weeklogo1 from "../static/image/weeklogo1.jpg";
import weeklogo2 from "../static/image/weeklogo2.jpg";
import weeklogo3 from "../static/image/weeklogo3.jpg";
import weeklogo4 from "../static/image/weeklogo4.jpg";
import weeklogo5 from "../static/image/weeklogo5.jpg";
import weeklogo6 from "../static/image/weeklogo6.jpg";
import weeklogo7 from "../static/image/weeklogo7.jpg";
import weeklogo8 from "../static/image/weeklogo8.jpg";

const NowSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 2,
  };
  return (
    <div className="Home__Tool">
      <TextTool>
        <TextTag>테마로 모아보는 요즘 채용</TextTag>
      </TextTool>
      <Wrap>
        <Slider className="slider" {...settings}>
          <ItemTool>
            <Item1></Item1>

            <Box>
              <div>
                <BoxBrand>좋은 기업을 Wanted</BoxBrand>
                <BoxText>
                  실제 면접 후기를 바탕으로 좋은 채용 경험을 제공한 기업을
                  소개합니다.
                </BoxText>
              </div>
            </Box>
            <ImgBox>
              <Img src={wantlogo1} />
              <Img src={wantlogo2} />
              <Img src={wantlogo3} />
              <Img src={wantlogo4} />
              <Img src={wantlogo5} />
              <Img src={wantlogo6} />
              <Img src={wantlogo7} />
              <Img src={wantlogo8} />
              <ImgText>+27</ImgText>
            </ImgBox>
          </ItemTool>

          <ItemTool>
            <Item2></Item2>

            <Box>
              <div>
                <BoxBrand>주말 3일! 주 4일 근무 기업</BoxBrand>
                <BoxText>
                  일과 삶의 균형을 찾을 수 있는 기업을 소개합니다.
                </BoxText>
              </div>
            </Box>
            <ImgBox>
              <Img src={weeklogo1} />
              <Img src={weeklogo2} />
              <Img src={weeklogo3} />
              <Img src={weeklogo4} />
              <Img src={weeklogo5} />
              <Img src={weeklogo6} />
              <Img src={weeklogo7} />
              <Img src={weeklogo8} />
              <ImgText>+3</ImgText>
            </ImgBox>
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

const ImgText = styled.div`
  color: #666666;
  font-size: 14px;
`;
const Img = styled.img`
  width: 30px;
  height: 30px;
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

const ImgBox = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  // justify-content: center;
`;
const TextMore = styled.div`
  margin: 5px 5px;
  font-size: 15px;
  color: #767676;
  font-weight: 500;
`;
const Item1 = styled.div`
  background-image: url(${Now1});
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 520px;
  border-radius: 5px;
`;

const Wrap = styled.div`
  margin: 3% auto;
  // width: 100%;
  width: 1080px;
  height: 500px;
  // border-bottom: 2px solid #eeeeee;
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
  background-image: url(${Now2});
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
  margin-top: 20px;
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
export default NowSlide;
