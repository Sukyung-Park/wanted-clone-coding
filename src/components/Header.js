import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div>
      <nav>
        <div>
          <button>
            <img src="image/menu.png" />
          </button>
          <a>
            <img src="image/logo.png" />
          </a>
        </div>

        <div>
          <ul>
            <li>채용</li>
            <li>이벤트</li>
            <li>직군별 연봉</li>
            <li>이력서</li>
            <li>커뮤니티</li>
            <li>프리랜서</li>
            <li>AI 합격예측</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
