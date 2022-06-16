import React, { useState } from "react";
import { Button } from "components/styles/SignUpStyles";

import { PolicyContainer } from "./styles/PolicyStyles";
import PolicyDialog from "./PolicyDialog";

const SignUpPolicy = ({ handleNext }) => {
  const [allCheck, setAllCheck] = useState({
    useTermAgree: false,
    privacyPolicyAgree: false,
  });
  const [open, setOpen] = React.useState(false);
  const [name, setName] = useState("");
  const onUseTermChange = () =>
    setAllCheck((prev) => ({
      ...prev,
      useTermAgree: !prev.useTermAgree,
    }));
  const onPrivacyPolicyChange = () =>
    setAllCheck((prev) => ({
      ...prev,
      privacyPolicyAgree: !prev.privacyPolicyAgree,
    }));

  const onAllChkChange = () => {
    setAllCheck((prev) => ({
      useTermAgree: !prev.useTermAgree,
      privacyPolicyAgree: !prev.privacyPolicyAgree,
    }));
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onAgreeClick = () => {
    const key = name === "이용약관" ? "useTermAgree" : "privacyPolicyAgree";
    setAllCheck((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const useTermAgreeOpen = () => {
    setOpen(true);
    setName("이용약관");
  };
  const privacyPolicyAgreeOpen = () => {
    setOpen(true);
    setName("개인정보처리방침");
  };
  return (
    <>
      <PolicyContainer>
        <div className="all_check">
          <input
            type="checkbox"
            id="allChk"
            checked={allCheck.useTermAgree && allCheck.privacyPolicyAgree}
            onChange={onAllChkChange}
          />
          <label htmlFor="allChk" className="label bold">
            모두 동의합니다.
          </label>
          <p className="desc">
            <span>Annotation Cloud Platform</span>의
            <br />
            이용약관, 개인정보처리방침에 모두 동의합니다.
          </p>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="useTerm"
            checked={allCheck.useTermAgree}
            onChange={onUseTermChange}
          />
          <label htmlFor="useTerm" className="label">
            [필수]이용 약관에 동의합니다.
          </label>
          <button
            type="button"
            className="btn_fullTextModal"
            onClick={useTermAgreeOpen}
          >
            전문보기
          </button>
        </div>
        <div className="checkbox">
          <input
            type="checkbox"
            id="privacyPolicy"
            checked={allCheck.privacyPolicyAgree}
            onChange={onPrivacyPolicyChange}
          />
          <label htmlFor="privacyPolicy" className="label">
            [필수]개인정보처리방침 에 동의합니다.
          </label>
          <button
            type="button"
            className="btn_fullTextModal"
            onClick={privacyPolicyAgreeOpen}
          >
            전문보기
          </button>
        </div>
      </PolicyContainer>

      <Button
        variant="contained"
        color="primary"
        style={{ marginBottom: 40 }}
        onClick={handleNext}
        disabled={!allCheck.useTermAgree && !allCheck.privacyPolicyAgree}
      >
        Next
      </Button>
      <PolicyDialog
        name={name}
        open={open}
        handleClose={handleClose}
        onAgreeClick={onAgreeClick}
      />
    </>
  );
};

export default SignUpPolicy;
