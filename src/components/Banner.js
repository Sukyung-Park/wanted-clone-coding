import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { useCallback, useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from "../static/image/banner1.jpg";
import Banner2 from "../static/image/banner2.jpg";
import Banner3 from "../static/image/banner3.jpg";
import { ReactComponent as Prevarrowsvg } from "../icons/prevarrow.svg";
import { ReactComponent as Nextarrowsvg } from "../icons/nextarrow.svg";

const CenterSlide = () => {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "215px",
    slidesToShow: 1,
    speed: 500,
    arrows: false,
    prevArrow: (
      <ArrowButton pos="left">
        <Prevarrowsvg />
      </ArrowButton>
    ),
    nextArrow: (
      <ArrowButton pos="right">
        <Nextarrowsvg />
      </ArrowButton>
    ),
  };

  return (
    <SlideContainer>
      <Slider {...settings}>
        <SlidePage>
          <MultiItem>
            <Img className="card" src={Banner1} />
          </MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>
            <Img className="card" src={Banner2} />
          </MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>
            <Img className="card" src={Banner3} />
          </MultiItem>
        </SlidePage>
        {/* <SlidePage>
          <MultiItem>4</MultiItem>
        </SlidePage>
        <SlidePage>
          <MultiItem>5</MultiItem>
        </SlidePage>
        <SlidePage> */}
      </Slider>
    </SlideContainer>
  );
};
const ArrowButton = styled.button``;
const MultiItem = styled.div`
  color: #e67e22;
  opacity: 1;
`;
const Img = styled.img`
  width: 1060px;
  position: relative;
  // left: -50px;
  height: 299.98px;
  border-radius: 5px;
`;

const SlideContainer = styled.div`
  .center .slick-center ${MultiItem} {
    opacity: 1;
    height: 299.98px;
    width: 1200px;
    overflow-x: hidden;
    overflow-y: hidden;
    box-sizing: border-box;
    height: 330.98px;
  }

  .center ${MultiItem} {
    opacity: 0.8;
    transition: all 300ms ease;
    height: 299.98px;
  }
`;

const SlidePage = styled.div`
  margin-top: 25px;
  // padding: ${(props) => props.padding};

  ${MultiItem} {
    color: #fff;
    font-size: 36px;
    position: relative;
    text-align: center;
  }
`;

export default CenterSlide;
