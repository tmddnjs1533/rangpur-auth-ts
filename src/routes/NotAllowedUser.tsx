import React, { useCallback } from "react";
import { SignUpExplain, SignUpTitle } from "../components/styles/SignUpStyles";
import { Button } from "../components/styles/LoginStyles";
import { serviceUrl } from "../util/url";

const NotAllowedUser = () => {
  const goToHome = useCallback(() => {
    window.location.href = serviceUrl;
  }, []);

  return (
    <div>
      <SignUpTitle>
        <h3>UNAUTHORIZED</h3>
      </SignUpTitle>
      <SignUpExplain>
        승인되지 않은 사용자입니다.
        <br />
        자세한 문의사항은 관리자에게 문의하세요.
      </SignUpExplain>
      <Button type="button" onClick={goToHome}>
        홈으로
      </Button>
    </div>
  );
};

export default NotAllowedUser;
