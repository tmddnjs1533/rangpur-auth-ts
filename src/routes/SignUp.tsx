import React, { useCallback, useState } from "react";
import SignUpForm from "components/SignUpForm";
import SignUpPolicy from "components/SignUpPolicy";
import {
  Button,
  SignUpExplain,
  SignUpTitle,
} from "components/styles/SignUpStyles";
import styled from "@emotion/styled";
import { $primary, $white } from "util/themeColor";
import { checkPaper, emailCheck, formPencil } from "assets/SVG";
import { customAxiosPost } from "../util/customAxios";
import { toast } from "react-toastify";
import CustomToast from "../components/CustomToastBody";
import { useHistory } from "react-router-dom";

const $width = 30;
const StyledStepper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  margin-bottom: 37px;
  .step {
    width: ${$width}px;
    height: ${$width}px;
    flex-shrink: 0;
    position: relative;
    padding-left: 40px;
    opacity: 0.2;
    .chk {
      width: ${$width}px;
      height: ${$width}px;
      box-sizing: border-box;
      display: block;
      border-radius: 50%;
      border: 1px solid white;
      flex-shrink: 0;
      background-color: ${$primary};
      color: #fff;
      text-align: center;
      padding: 8px 0;
      cursor: pointer;
      .i_chk {
        width: 100%;
        height: 100%;
        display: block;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15' viewBox='0 0 9.375 7.768'%3E%3Cpath d='M-16854.51-15548.546l3.205,3.637,4.07-5.976' transform='translate(16855.568 15551.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E");
        &.i_checkPaper {
          background-image: url("data:image/svg+xml, ${checkPaper}");
        }
        &.i_formPencil {
          background-image: url("data:image/svg+xml, ${formPencil}");
        }
        &.i_mailCheck {
          background-image: url("data:image/svg+xml, ${emailCheck}");
        }
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        width: 40px;
        height: 1px;
        background-color: #fff;
        opacity: 0.2;
      }
    }
    &.active {
      opacity: 1;
      .chk::after {
        opacity: 1;
      }
    }
    &:first-of-type {
      padding-left: 0;
      .chk::after {
        content: none;
      }
    }
    .lbl {
      color: rgba(${$white}, 1);
      text-align: center;
      white-space: nowrap;
      margin-top: 5px;
      display: flex;
      justify-content: center;
    }
  }
`;

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };
  const history = useHistory();
  const goToPolicy = () => activeStep >= 1 && setActiveStep(0);
  const goToForm = () => activeStep >= 2 && setActiveStep(1);
  const goToLogin = useCallback(() => {
    history.push("/");
  }, [history]);
  const [userId, setUserId] = useState("");
  const resendEmail = useCallback(async () => {
    await customAxiosPost(
      "user-service/users/" + userId + "/send-mail",
      "",
      ({ statusCode }) => {
        if (statusCode === 200) {
          toast(
            <CustomToast
              variant="success"
              text="인증 메일을 재발송하였습니다."
            />,
            {
              autoClose: true,
              style: {
                backgroundColor: "#5E7175",
              },
            }
          );
        } else {
          toast(<CustomToast variant="error" text="실패하였습니다." />, {
            autoClose: true,
            style: {
              backgroundColor: "rgba(248,129,23,0.2)",
            },
          });
        }
      }
    );
  }, [userId]);

  return (
    <>
      <SignUpTitle>
        <h3>JOIN MEMBER</h3>
      </SignUpTitle>
      <StyledStepper>
        <div className={activeStep >= 0 ? "step active" : "step"}>
          <span className="chk" onClick={goToPolicy}>
            <i className="i_chk i_checkPaper" />
          </span>
          <p className="lbl">약관 동의</p>
        </div>
        <div className={activeStep >= 1 ? "step active" : "step"}>
          <span className="chk" onClick={goToForm}>
            <i className="i_chk i_formPencil" />
          </span>
          <p className="lbl">정보 입력</p>
        </div>
        <div className={activeStep >= 2 ? "step active" : "step"}>
          <span className="chk">
            <i className="i_chk i_mailCheck" />
          </span>
          <p className="lbl">완료</p>
        </div>
      </StyledStepper>
      <div>
        {activeStep === 0 ? (
          <div>
            <SignUpPolicy handleNext={handleNext} />
          </div>
        ) : null}
        {activeStep === 1 ? (
          <div>
            <SignUpForm
              handleNext={handleNext}
              handleBack={handleBack}
              setUserId={setUserId}
            />
          </div>
        ) : null}
        {activeStep === 2 ? (
          <div>
            <SignUpExplain>
              거의 다 완료 되었습니다.
              <br />
              입력해주신 이메일 주소로 인증을 위한 이메일을 발송하였습니다.
              <br />
              메일 함을 확인해주세요.
            </SignUpExplain>
            <Button type="button" onClick={resendEmail}>
              이메일 재요청
            </Button>
            <Button type="button" onClick={goToLogin}>
              로그인하러가기
            </Button>
          </div>
        ) : null}
      </div>
    </>
  );
};
export default SignUp;
