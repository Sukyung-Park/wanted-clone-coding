import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../icons/search.svg";
import { ReactComponent as Btnsvg } from "../icons/emailbtn.svg";
import { ReactComponent as Kakao } from "../icons/kakao.svg";
import { ReactComponent as Facebook } from "../icons/facebook.svg";
import Logo from "../static/image/logo.jpg";
import Menu from "../static/image/menu.png";
import Modal from "../components/Modal/modal";
import { useState } from "react";

const Header = () => {
  // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
          <React.Fragment>
            <WithUS onClick={openModal}>회원가입 / 로그인</WithUS>
            <Modal open={modalOpen} close={closeModal}>
              <Main>
                직장인을 위한
                <br />
                커리어 플랫폼, 원티드!
              </Main>
              <Body>
                커리어 성장과 행복을 위한 여정 <br />
                지금 원티드에서 시작하세요.
              </Body>
              <EmailText>이메일</EmailText>
              <EmailBox placeholder="이메일을 입력해 주세요."></EmailBox>
              <EmailBtn>
                <Btnsvg />
                <BtnText>이메일로 계속하기</BtnText>
              </EmailBtn>
              <OrText>or</OrText>
              <OrContinue>다음 계정으로 계속하기</OrContinue>
              <SocialBox>
                <Kakao />
              </SocialBox>
            </Modal>
          </React.Fragment>

          <ButtonSv>기업 서비스</ButtonSv>
        </Section>
      </Nav>
    </div>
  );
};
const SocialBox = styled.div`
  width: 360px;
  height: 84px;
`;
const OrText = styled.div`
  width: 360px;
  height: 14px;
  text-align: center;
  margin: 13px 0;
  font-family: "Pretendard";
  color: #767676;
  font-weight: 500;
  font-size: 13px;
`;
const OrContinue = styled.div`
  width: 360px;
  font-weight: 500;
  height: 20px;
  text-align: center;
  margin: 0 0 17px;
  font-family: "Pretendard";
  color: #767676;
  font-size: 13px;
`;
const EmailBtn = styled.button`
  font-weight: 600;
  color: #fff;
  margin-top: 20px;
  display: flex;
  width: 360px;
  height: 54px;
  background-color: #3366ff;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  border-radius: 27px;
`;
const BtnText = styled.div`
  margin-left: 10px;
`;
const EmailText = styled.div`
  margin: 35px 0 13px 0;
  font-size: 13px;
  font-weight: 400;
  color: #767676;
  font-family: "Pretendard";
`;
const EmailBox = styled.input`
  width: 360px;
  height: 50px;
  font-size: 13px;
  padding-left: 10px;
  border: 1px solid #e1e2e3;
  border-radius: 5px;
`;
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
const WithUS = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
const Main = styled.div`
  text-align: center;
  font-family: "Pretendard";
  font-size: 24px;
  color: #333;
  font-weight: 600;
  line-height: 30px;
  margin-top: 40px;
`;
const Body = styled.div`
  margin-top: 16px;
  font-size: 14px;
  font-family: "Pretendard";
  font-weight: 500;
  text-align: center;
  line-height: 20px;
`;
export default Header;
