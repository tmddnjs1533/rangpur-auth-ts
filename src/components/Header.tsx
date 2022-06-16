import React from "react";
import { HeaderContainer } from "./styles/HeaderStyles.";
import logo from "assets/images/humanf_logoB_textWhite.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <header className="header">
        <div className="logo">
          <h1>
            <img src={logo} alt="로고_사람과숲" />
          </h1>
        </div>
      </header>
    </HeaderContainer>
  );
};

export default Header;
