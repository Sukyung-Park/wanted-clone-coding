import React from "react";
import styled from "styled-components";
import LogoImg from "../static/image/logo_wanted_black.png";
import Instagram from "../static/image/social_instagram.png";
import Youtube from "../static/image/social_youtube.png";
import Facebook from "../static/image/social_facebook.png";
import Blog from "../static/image/social_blog.png";
import Kakao from "../static/image/social_kakao.png";
import Post from "../static/image/social_post.png";
import Apple from "../static/image/social_apple.png";
import Google from "../static/image/social_google.png";

const Footer = () => {
  return (
    <FooterTool>
      <FooterINfo>
        <RightBox>
          <Ul>
            <Li>
              <Logo src={LogoImg} />
            </Li>
            <Li>기업소개</Li>
            <Li>이용약관</Li>
            <Li>개인정보 처리방침</Li>
            <Li>고객센터</Li>
          </Ul>
        </RightBox>
        <LeftBox>
          <Img src={Instagram} />
          <Img src={Youtube} />
          <Img src={Facebook} />
          <Img src={Blog} />
          <Img src={Kakao} />
          <Img src={Post} />
          <Img src={Google} />
          <Img src={Apple} />
        </LeftBox>
      </FooterINfo>
      <FooterText>
        <Text>
          (주)원티드랩 (대표이사:이복기) | 서울특별시 송파구 올림픽로 300
          롯데월드타워 35층 | 통신판매번호 : 2020-서울송파-3147 <br />
          유료직업소개사업등록번호 : (국내) 제2020-3230259-14-5-00018호 | (국외)
          서울동부-유-2020-2 | 사업자등록번호 : 299-86-00021 | 02-539-7118 ©{" "}
          <br />
          Wantedlab, Inc.
        </Text>
        <Select>
          <option key="ko" value="ko">
            한국(한국어)
          </option>
          <option key="eng" value="eng">
            Worldwide(English)
          </option>
        </Select>
      </FooterText>
    </FooterTool>
  );
};
const FooterText = styled.div`
  display: flex;
  width: 1060px;
  height: 86px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;
const Text = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #767676;
  line-height: 1.6666em;
`;
const Select = styled.select`
  width: 250px;
  height: 40px;
  background: #f2f4f7;
  border-radius: 5px;
  font-size: 14px;
  line-height: 2.1;
  color: #717171;
`;

const Img = styled.img`
  margin: 0 5px;
`;
const Ul = styled.ul`
  display: flex;
  align-items: center;
  jutify-content: center;
  font-size: 15px;
  color: #3a3a3a;
  font-weight: 700;
`;
const Li = styled.li`
  margin: 0 15px;
`;
const LeftBox = styled.div``;
const RightBox = styled.div``;
const Logo = styled.img``;
const FooterINfo = styled.nav`
  width: 1060px;
  height: 89.44px;
  margin: 0 auto;
  border-bottom: 2px solid #ececec;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const FooterTool = styled.div`
  width: 100%;
  height: 245.44px;
  bottom: 0;
  border-top: 2px solid #ececec;
`;
export default Footer;
