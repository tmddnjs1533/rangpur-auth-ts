import React, { useCallback } from "react";
import { SignUpLink } from "components/styles/LoginStyles";
import { Button, SignUpTitle, TextField } from "components/styles/SignUpStyles";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FormExplain } from "../components/styles/AppStyles";
import { customAxios } from "../util/customAxios";
import { CallErrorToast, CallSuccessToast } from "../components/CallToast";
// import loadable from "@loadable/component";
// const ChangeTempPassword = loadable(() => import("routes/ChangeTempPassword"));

const FindPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });
  const history = useHistory();
  // const [isSend, setIsSend] = useState(false);
  const onSubmit = useCallback(
    (data) => {
      const newData = {
        userEmail: data.userEmail,
        userNm: data.userName,
      };
      console.log(data);
      return customAxios({
        method: "post",
        url: "/user-service/users/find-password",
        data: newData,
      }).then(({ statusCode, data }) => {
        if (statusCode === 200) {
          history.push("/");
          //setIsSend((prev) => !prev);
          return CallSuccessToast(data.msgs);
        }
        return CallErrorToast(data.errs);
      });
    },
    [history]
  );
  const { t } = useTranslation();
  // if (isSend) return <ChangeTempPassword setIsSend={setIsSend} />;
  return (
    <>
      <SignUpTitle>
        <h3>Find Password</h3>
      </SignUpTitle>
      <FormExplain>
        이메일과 이름을 입력하면 새로운 비밀번호를 이메일로 발송합니다.
      </FormExplain>
      <TextField className="i_mail">
        <label htmlFor="userEmail" className="label">
          Email ID
        </label>
        <input
          type="text"
          id="userEmail"
          className="input"
          placeholder="이메일을 입력하세요"
          {...register("userEmail", { required: true })}
          autoFocus
        />
      </TextField>
      <TextField className="i_lock">
        <label htmlFor="userName" className="label">
          Name
        </label>
        <input
          type="text"
          id="userName"
          className="input"
          placeholder="이름을 입력하세요"
          {...register("userName", { required: true })}
        />
      </TextField>
      <Button
        type="submit"
        findPw={true}
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        {t("button.findPassword")}
      </Button>
      <SignUpLink>
        {t("label.remindPw")}
        <br />
        <Link to="/">{t("button.goTo.login")}</Link>
      </SignUpLink>
    </>
  );
};

export default FindPassword;
