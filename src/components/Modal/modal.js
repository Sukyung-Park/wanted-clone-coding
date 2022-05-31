import React from "react";
import "../Modal/modal.css";
import Logo from "../../static/image/logo.jpg";
import styled from "styled-components";

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <LogoIcon src={Logo} />
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <div className="text" onClick={close}>
              걱정마세요! 여러분의 지원 활동은 SNS에 노출되지 않습니다. <br />
              회원가입 시 개인정보 처리방침과 이용약관을 확인하였으며,
              동의합니다.
            </div>
          </footer>
        </section>
      ) : null}
    </div>
  );
};
const LogoIcon = styled.img`
  width: 70px;
  height: 40px;
`;

export default Modal;
