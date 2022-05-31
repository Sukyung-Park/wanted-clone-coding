import React from "react";
import styled from "styled-components";
import { ReactComponent as Search } from "../../icons/search.svg";
import { ReactComponent as ProfileSvg } from "../../icons/profileSvg.svg";
import { ReactComponent as ViewMore } from "../../icons/viewmore.svg";
import { ReactComponent as Matchup } from "../../icons/matchup.svg";
import { ReactComponent as Salary } from "../../icons/salary.svg";

const infomation = () => {
  return (
    <InfoTool>
      <InfoBox>
        <Title>채용 정보를 찾고 계셨나요?</Title>
        <GridContainer>
          <Box>
            <Search width="32px" height="32px;" />
            <TextBox>
              <Text>채용공고</Text>
              <ViewMore />
            </TextBox>
          </Box>
          <Box>
            <ProfileSvg width="32px" height="32px;" />
            <TextBox>
              <Text>내 프로필</Text>
              <ViewMore />
            </TextBox>
          </Box>
          <Box>
            <Matchup width="32px" height="32px;" />
            <TextBox>
              <Text>매치업</Text>
              <ViewMore />
            </TextBox>
          </Box>
          <LastBox>
            <Salary width="32px" height="32px;" />
            <TextBox>
              <Text>매치업</Text>
              <ViewMore />
            </TextBox>
          </LastBox>
        </GridContainer>
      </InfoBox>
    </InfoTool>
  );
};
const TextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  margin-top: -20px;
`;
const Text = styled.div`
  font-size: 16px;
  margin-right: 5px;
`;
const LastBox = styled.div`
  width: 265px;
  height: 100px;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin-top: -15px;
`;
const Box = styled.div`
  width: 265px;
  height: 100px;
  border-right: 1px solid #ececec;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  margin-top: -15px;
`;
const GridContainer = styled.div`
  display: flex;
  width: 1060px;
  height: 102px;
  border: 1px solid #ececec;
`;
const Title = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: 700;
  margin: 60px 0px 30px 0px;
`;
const InfoBox = styled.div`
  width: 1060px;
  height: 161.25px;
  margin: 0 auto;
`;

const InfoTool = styled.div`
  width: 1214.4px;
  height: 251.25px;
  margin: 0 auto;
`;

export default infomation;
