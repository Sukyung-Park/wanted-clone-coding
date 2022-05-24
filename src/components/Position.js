import React from "react";
import { ReactComponent as Searchwhite } from "../icons/search.svg";
import styled from "styled-components";

const Position = () => {
  return (
    <PositionTool>
      <PositionBtn>
        <StyledSearchwhite color="#fff" />
        <PositionText>채용 중인 포지션 보러가기</PositionText>
      </PositionBtn>
    </PositionTool>
  );
};
const PositionTool = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 50px;
`;
const PositionBtn = styled.div`
  width: 1060px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 38.5px;
  background-image: linear-gradient(
    90deg,
    #01a9fe -12%,
    #2f5fef 37%,
    #046afe 72%,
    #00d2dd 110%
  );
`;
const PositionText = styled.div`
  color: #fff;
  font-weight: 700;
`;
const StyledSearchwhite = styled(Searchwhite)`
  fill: #fff;
  width: 28px;
  height: 28px;
  margin-right: 15px;
`;
export default Position;
