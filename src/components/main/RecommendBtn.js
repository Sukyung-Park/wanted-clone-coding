import React from "react";
import styled from "styled-components";

const RecommendBtn = () => {
  return (
    <BtnTool>
      <Button>직군/직무를 입력하면 관련 콘텐츠를 추천해 드려요. 👀</Button>
    </BtnTool>
  );
};
const BtnTool = styled.div`
  width: 1060px;
  height: 64.4px;
  margin: 100px auto;

  line-height: normal;
`;
const Button = styled.button`
  width: 1060px;
  height: 64.4px;
  font-size: 17px;
  color: #fff;
  border: none;
  border-radius: 38.5px;
  font-weight: 700;
  background-image: linear-gradient(90deg,#01a9fe -12%,#2f5fef 37%,#046afe 72%,#00d2dd 110%);
}
`;
export default RecommendBtn;
