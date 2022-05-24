import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../icons/search.svg";
import Logo from "../static/image/logo.jpg";
import Menu from "../static/image/menu.png";

const Header = () => {
  return (
    <div className="header__tool">
      <Nav className="header__nav">
        <Section>
          <Button>
            <MenuIcon src={Menu} />
          </Button>
          <A>
            <LogoIcon src={Logo} />
          </A>
        </Section>

        <Section>
          <Ul>
            <Li>채용</Li>
            <Li>이벤트</Li>
            <Li>직군별 연봉</Li>
            <Li>이력서</Li>
            <Li>커뮤니티</Li>
            <Li>프리랜서</Li>
            <Li>AI 합격예측</Li>
          </Ul>
        </Section>

        <Section>
          <Button>
            <Search />
          </Button>
          <WithUS>회원가입 / 로그인</WithUS>
          <ButtonSv>기업 서비스</ButtonSv>
        </Section>
      </Nav>
    </div>
  );
};

const A = styled.a`
  font-weight: bolder;
  font-size: 17px;
`;
const Nav = styled.nav`
  justify-content: space-between;
  align-items: center;
`;
const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 15px;
`;
const ButtonSv = styled.button`
  margin: 0 15px;
  background-color: transparent;
  font-size: 13px;
  border: 1px solid #e1e2e3;
  width: 91.58px;
  height: 30px;
  border-radius: 15px;
`;
const MenuIcon = styled.img`
  width: 17px;
  height: 14px;
`;
const LogoIcon = styled.img`
  width: 77px;
  height: 42px;
`;
const Ul = styled.ul`
  display: flex;
`;
const Li = styled.li`
  margin: 0 10px;
`;
const Section = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 600;
`;
const WithUS = styled.div`
  margin-top: 7px;
`;
export default Header;
