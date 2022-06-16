import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, Redirect, useLocation } from "react-router-dom";

import { InputBox } from "../util/InputBox";
import { SignUpLink, SocialLogin } from "../components/styles/LoginStyles";
import { useTranslation } from "react-i18next";

import axios from "axios";
import { useMutation } from "react-query";
import { apiBaseUrl, domain } from "../util/url";
import { CallErrorToast } from "../components/CallToast";
import NotAllowedUser from "./NotAllowedUser";
import LockedUser from "./LockedUser";
import { TextField } from "../components/styles/SignUpStyles";
import ButtonComponent from "../components/ButtonComponent";

const login = async (data) => {
  const res = await axios.post(
    `${apiBaseUrl}/user-service/login`,
    JSON.stringify(data),
    {
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
    }
  );
  return res.data;
};

function useURLParams(): URLSearchParams {
  return new URLSearchParams(useLocation().search);
}

const Login = () => {
  const [loginStatus, setLoginStatus] = useState("before-login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { t } = useTranslation();
  let query = useURLParams();
  const { isLoading, mutateAsync } = useMutation((data) => login(data), {
    retry: 1,
  });
  const onAuthRoute = useCallback(
    ({ status, link, failureCnt, data, token }) => {
      console.log("로그인 완료");
      if (status) {
        if (status === 401) {
          // 계정 미승인-> 승인 안내 페이지로 이동
          console.log("승인 안내 페이지로 이동");
          if (data) CallErrorToast(data.errs);
          if (!failureCnt) setLoginStatus("not-allowed");
        } else if (status === 423) {
          // 잠금 -> 잠금 안내 페이지(이메일 인증메일 발송)로 이동
          console.log("잠금 안내 페이지로 이동");
          // history.push("/locked");
          //setLoginStatus("locked");
        }
      } else {
        Cookies.set("hfac", token, { domain });
        window.location.href = link;
      }
    },
    []
  );

  const onSubmit = useCallback(
    async (currData) => {
      //console.log(currData);
      let data = {
        ...currData,
      };
      const url = !query.get("url") ? undefined :  decodeURIComponent(query.get("url") as string);
      if (url !== "null") {
        data["requestURL"] = url;
      }

      //console.log(data);
      return await mutateAsync(data)
        .then(({ status, link, failureCnt, data, token }) => {
          onAuthRoute({ status, link, failureCnt, data, token });
          // console.log(userDetails, token);
        })
        .catch(() => CallErrorToast(t("fail.user.invalid")));
    },
    [mutateAsync, onAuthRoute, query, t]
  );

  if (loginStatus === "before-login") {
    return (
      <>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField className="i_mail">
            <label htmlFor="userEmail" className="label">
              Email ID
            </label>
            <input
              type="text"
              id="userEmail"
              className={`input ${errors.userEmail && "error"}`}
              placeholder={t("placeholder.email")}
              {...register("userEmail")}
              autoFocus
            />
          </TextField>
          <TextField className="i_lock">
            <label htmlFor="userPwd" className="label">
              Password
            </label>
            <input
              type="password"
              id="userPwd"
              className={`input ${errors.userPwd && "error"}`}
              placeholder={t("placeholder.pw")}
              {...register("userPw", { required: true })}
            />
          </TextField>
          <InputBox>
            <input
              id="rememberMe"
              type="checkbox"
              {...register("rememberMe")}
            />
            <label htmlFor="rememberMe" className="checkbox_label">
              <span>{t("label.keepLogin")}</span>
            </label>
            <Link to="/find-password">{t("button.forgotPassword")}</Link>
          </InputBox>
          <ButtonComponent
            onClick={handleSubmit(onSubmit)}
            isLoading={isLoading}
            isSubmit={true}
          >
            {t("button.login")}
          </ButtonComponent>
        </form>
        <SocialLogin>
          <h3>{t("label.socialLogin")}</h3>
          <ul>
            <li>
              <Link to="/" title={t("button.withLogin.naver")} />
            </li>
            <li className="social_kakao">
              <Link to="/" title={t("button.withLogin.google")} />
            </li>
            <li className="social_google">
              <Link to="/" title={t("button.withLogin.kakao")} />
            </li>
          </ul>
          <SignUpLink>
            {t("label.notUser")}
            <Link to="/signup">{t("button.signup")}</Link>
          </SignUpLink>
        </SocialLogin>
      </>
    );
  } else if (loginStatus === "not-allowed") {
    return <NotAllowedUser />;
  } else if (loginStatus === "locked") {
    return <LockedUser />;
  } else {
    return <Redirect to="/not-found" />;
  }
};

export default Login;
