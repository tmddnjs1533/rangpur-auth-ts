import React from "react";
import { SignUpTitle } from "../components/styles/SignUpStyles";
import StyledLink from "../components/StyledLink";
import styled from "@emotion/styled";
const SignUpCompleteContainer = styled.div`
  .complete_info {
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 37px;
  }
`;
const SignUpComplete = () => {
  return (
    <SignUpCompleteContainer>
      <SignUpTitle>
        <h3>Welcome!</h3>
      </SignUpTitle>
      <div className="complete_info">
        <p>회원가입이 완료되었습니다!</p>
        <p>관리자의 승인이 완료되면 서비스를 이용하실 수 있습니다.</p>
      </div>
      <StyledLink to="/" label="홈으로" />
    </SignUpCompleteContainer>
  );
};

export default SignUpComplete;
