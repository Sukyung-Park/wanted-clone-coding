import React from "react";
import styled from "styled-components";
import Bannerbg from "../static/image/bannerbg.png";
import LogoWanted from "../static/image/logowantedai.png";
import Logocolor from "../static/image/logocolor.png";
import { ReactComponent as Question } from "../icons/question.svg";

const Pass = () => {
  return (
    <PassTool>
      <LogoTool>
        <LogoColor src={Logocolor} />
        <Logowanted src={LogoWanted} />
      </LogoTool>
      <Passup>
        <Logo src={LogoWanted} />
        <Text>가 제안하는 합격률 높은 포지션</Text>
        <Question />
      </Passup>
      <Recommend>회원가입하면 포지션을 추천해드려요.</Recommend>
      <Button>지금 시작하기</Button>
    </PassTool>
  );
};

const PassTool = styled.div`
  width: 100%;
  background-image: url(${Bannerbg});
  background: #f4f8fb;
  height: 320.64px;
`;
const LogoTool = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 35px;
  margin-bottom: 15px;
  margin-left: -30px;
`;

const LogoColor = styled.img`
  width: 80px;
  height: 79.32px;
`;
const Logowanted = styled.img`
  width: 170px;
  height: 27.68px;
`;
const Passup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Text = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-left: 2px;
  margin-right: 10px;
`;
const Logo = styled.img`
  width: 114px;
  height: 18.56px;
`;
const Recommend = styled.div`
  font-size: 16px;
  text-align: center;
  margin: 10px 0;
`;
const Button = styled.button`
  color: #fff;
  background: #3366ff;
  width: 141.63px;
  height: 42px;
  display: block;
  margin: 0 auto;
  border-radius: 25px;
  border: none;
  font-weight: 700;
  font-size: 16px;
  margin-top: 25px;
`;
export default Pass;
