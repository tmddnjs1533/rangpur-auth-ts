import React, { useCallback } from "react";
import { SignUpExplain, SignUpTitle } from "../components/styles/SignUpStyles";
import { Button } from "../components/styles/LoginStyles";
import { serviceUrl } from "../util/url";

const LockedUser = () => {
  const goToHome = useCallback(() => {
    window.location.href = serviceUrl;
  }, []);
  return (
    <div>
      <SignUpTitle>
        <h3>LOCKED</h3>
      </SignUpTitle>
      <SignUpExplain>
        잠금 처리된 계정입니다.
        <br />
        해체하시려면 재인증하세요.
      </SignUpExplain>
      <Button type="button" onClick={goToHome}>
        홈으로
      </Button>
    </div>
  );
};

export default LockedUser;
