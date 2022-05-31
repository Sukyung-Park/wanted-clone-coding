import React from "react";
import styled from "styled-components";
import SubscribeImg from "../../static/image/subscribe1.png";
import { ReactComponent as Check } from "../../icons/check.svg";

const Subscribe = () => {
  return (
    <MainBox>
      <BoxTool>
        <TextBox>
          <MainText>Wanted + 구독해야 하는 이유</MainText>
          <SubText>구독자의 서류 합격률이 비구독자보다 1.5배 높아요!</SubText>
          <Btn>
            <Check width="16px" height="16px" />
            <BtnText>첫 구독 0원 신청하기</BtnText>
          </Btn>
        </TextBox>
        <Img src={SubscribeImg} />
      </BoxTool>
    </MainBox>
  );
};
const MainText = styled.div`
  font-size: 30px;
  font-weight: 900;
  margin-bottom: 10px;
`;
const SubText = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Btn = styled.button`
  display: flex;
  width: 260px;
  height: 50px;
  background-color: #3366ff;
  padding 0px 27px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: 900;
  font-size: 16px;
`;
const BtnText = styled.div`
  margin: 0 3px;
`;
const TextBox = styled.div`
margin: 5px 100px; 5px 0px;
`;
const Img = styled.img`
  width: 544px;
  height: 158px;
`;
const BoxTool = styled.div`
  display: flex;
  width: 1214.4px;
  height: 158px;
  margin: 0 auto;
`;
const MainBox = styled.div`
  width: 100%;
  height: 158px;
  background: #f7f7f7;
  padding: 60px 0;
`;
export default Subscribe;
