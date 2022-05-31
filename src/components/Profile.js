import React from "react";
import styled from "styled-components";
import { ReactComponent as ProfileSvg } from "../icons/profileSvg.svg";
import { ReactComponent as MatchupSvg } from "../icons/matchup.svg";

const Profile = () => {
  return (
    <ProfileTool>
      <Ul>
        <LiPro>
          <Button>
            <ProfileSvg />
            <Text>내 프로필</Text>
          </Button>
        </LiPro>
        <Li>
          <Button>
            <MatchupSvg />
            <Text>매치업</Text>
          </Button>
        </Li>
      </Ul>
    </ProfileTool>
  );
};

const ProfileTool = styled.div`
  width: 100%;
  height: 225px;
  align-items: center;
  justify-content: center;
  display: flex;
`;
const Ul = styled.ul`
  width: 1060px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LiPro = styled.li`
  background: #f2f5ff;
  width: 529.5px;
  height: 80px;
  border-radius: 50px 0 0 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Li = styled.li`
  background: #f2fbf5;
  width: 529.5px;
  height: 80px;
  border-radius: 0 50px 50px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
`;
const Text = styled.div`
  font-size: 16px;
  color: #333333;

  width: 85.18px;
`;
export default Profile;
