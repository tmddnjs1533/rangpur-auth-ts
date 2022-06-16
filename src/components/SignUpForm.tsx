import React, { useCallback, useRef } from "react";
import { useForm } from "react-hook-form";

import {
  TextField,
  Button,
  SignUpFormContainer,
} from "components/styles/SignUpStyles";
import { customAxiosPost } from "../util/customAxios";
import { CallErrorToast, CallSuccessToast } from "./CallToast";

const SignUpForm = ({ handleNext, setUserId }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = useCallback(
    async (data) => {
      // console.log(data, e);
      const postData = {
        joinTermsAgreeAt: true,
        userEmail: data.userEmail,
        userNm: data.userNm,
        userPw: data.userPw,
        userPwConfirm: data.userPwConfirm,
      };
      await customAxiosPost(
        "user-service/users/signup",
        JSON.stringify(postData),
        (res) => {
          if (res.statusCode === 201) {
            setUserId(res.data.userInfo.userId);
            handleNext();
            CallSuccessToast("성공하였습니다.");
          } else {
            CallErrorToast("회원가입에 실패하였습니다.");
          }
        }
      );
    },
    [handleNext, setUserId]
  );

  const pw = useRef({});
  const pwCheck = useRef({});
  pw.current = watch("userPw", "");
  pwCheck.current = watch("userPwConfirm", "");
  return (
    <SignUpFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <TextField className="i_mail">
            <label className="label" htmlFor="userEmail">
              Email ID
            </label>
            <input
              type="text"
              id="userEmail"
              className="input"
              {...register("userEmail", {
                required: true,
              })}
              autoFocus
            />
          </TextField>

          <TextField className="i_user">
            <label className="label" htmlFor="userNm">
              User Name
            </label>
            <input
              type="text"
              id="userNm"
              className="input"
              {...register("userNm", {
                required: true,
              })}
            />
          </TextField>

          <TextField className="i_lock">
            <label className="label" htmlFor="userPw">
              Password
            </label>
            <input
              id="userPw"
              name="userPw"
              type="password"
              className="input"
              {...register("userPw", {
                required: "비밀번호를 입력해주세요.",
              })}
            />
            {pw.current !== "" ? (
              errors.userPwd ? (
                <span>{errors.userPwd.message}</span>
              ) : (
                ""
              )
            ) : (
              <span>
                비밀번호는 특수문자, 영문 대소문자, 숫자를 모두 포함하여 8자리
                이상으로 입력합니다.
              </span>
            )}
          </TextField>

          <TextField className="i_lock">
            <label className="label" htmlFor="userPwConfirm">
              Password Check
            </label>
            <input
              id="userPwConfirm"
              name="userPwConfirm"
              className="input"
              type="password"
              {...register("userPwConfirm", {
                required: "비밀번호를 한번더 입력해주세요.",
                validate: (value) =>
                  value === pw.current || "비밀번호가 일치하지 않습니다.",
              })}
            />
            {pwCheck.current !== "" ? (
              errors.userPwdCheck ? (
                <span>{errors.userPwdCheck.message}</span>
              ) : (
                <span>사용가능한 비밀번호입니다.</span>
              )
            ) : null}
          </TextField>
        </div>
        <Button type="submit" onClick={handleSubmit(onSubmit)}>
          회원가입
        </Button>
      </form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
