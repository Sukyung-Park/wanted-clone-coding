import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { ReactComponent as ViewMore } from "../../icons/viewmore.svg";
import { ReactComponent as Online } from "../../icons/online.svg";

import Event1 from "../../static/image/Event1.jpg";
import Event2 from "../../static/image/Event2.jpg";

const EventSlide = () => {
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
        <TextTag>커리어 성장을 위한 맞춤 이벤틑</TextTag>
      </TextTool>
      <ViewMoreTool>
        <TextMore>이벤트 전체보기</TextMore>
        <ViewMore />
      </ViewMoreTool>
      <Wrap>
        <Slider className="slider" {...settings}>
          <ItemTool>
            <Item1 src={Event1} />

            <Box>
              <div>
                <BoxBrand>네트워킹</BoxBrand>
                <BoxText>
                  앤틀러 : 스타트업 제너레이터 프로그램 참가자 모집
                </BoxText>
                <Date>2022.05.31 (화)</Date>
              </div>
            </Box>
          </ItemTool>

          <ItemTool>
            <Item2 src={Event2} />

            <Box>
              <div>
                <BtnBox>
                  <OnlineBtn>
                    <Online />
                    <OnlineText>온라인</OnlineText>
                  </OnlineBtn>
                  <VodBtn>VOD</VodBtn>
                </BtnBox>
                <BoxText>
                  앤틀러 : 스타트업 제너레이터 프로그램 참가자 모집
                </BoxText>
                <Date>2022.05.31 (화)</Date>
              </div>
            </Box>
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
        </Slider>
      </Wrap>
    </div>
  );
};
const VodBtn = styled.div`
  margin: 10px 5px;
  width: 32.04px;
  display: inline-flex;
  font-size: 11px;
  line-height: normal;
  padding: 3px;
  color: #5866dc;
  border-color: #a149e4;
  border: 1px solid;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  heigh: 20px;
  font-weight: 700;
`;

const BtnBox = styled.div`
  display: flex;
`;
const OnlineText = styled.div`
  padding: 0 5px;
`;
const OnlineBtn = styled.button`
  margin: 10px 0;
  width: 60.04px;
  display: inline-flex;
  font-size: 11px;
  line-height: normal;
  padding: 3px;
  color: #fff;
  background-color: #333;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  heigh: 20px;
  font-weight: 700;
`;
const Date = styled.div`
  color: #aaa;
  font-size: 13px;
  font-weight: 600;
  margin: 10px 0;
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
  font-weight: 600;
`;
const Item1 = styled.img`
  height: 300px;
  width: 520px;
  border-radius: 5px;
  object-fit: cover;
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
const Item2 = styled.img`
  height: 300px;
  width: 520px;
  border-radius: 5px;
  object-fit: cover;
`;

const ItemTool = styled.div``;
const Box = styled.div`
  display: flex;
`;

const BoxBrand = styled.div`
  margin: 10px 0;
  width: 52.04px;
  display: inline-flex;
  font-size: 11px;
  line-height: normal;
  padding: 3px;
  color: #a149e4;
  border-color: #a149e4;
  border: 1px solid;
  border-radius: 2px;
  justify-content: center;
  align-items: center;
  heigh: 20px;
  font-weight: 700;
`;
const BoxText = styled.div`
  font-size: 16px;
  color: #333;
  margin: 2px 0 10px 0;
  font-weight: 900;
`;

export default EventSlide;
