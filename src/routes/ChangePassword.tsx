import React, { useCallback, useState } from "react";
import { SignUpTitle, TextField } from "../components/styles/SignUpStyles";
import { useForm } from "react-hook-form";
import { Button } from "../components/styles/LoginStyles";
import { FormExplain } from "../components/styles/AppStyles";
import { ChangeTempPasswordForm } from "../components/styles/FindPasswordStyles";
import { getToken } from "../util/util";
import { customAxios } from "../util/customAxios";
import { CallErrorToast, CallSuccessToast } from "../components/CallToast";
import { useHistory } from "react-router-dom";
import { $secondary } from "../util/themeColor";

const ChangePassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });
  const history = useHistory();
  const [error, setError] = useState({
    newPassword: null,
    newPasswordConfirm: null,
  });
  const token = getToken();
  const onSubmit = useCallback(
    (data) => {
      console.log(data);
      const { currentPassword, newPassword, newPasswordConfirm } = data;
      const newData = {
        currentPassword,
        newPassword,
        newPasswordConfirm,
      };
      return customAxios({
        method: "post",
        url: "/user-service/users/change-password",
        data: newData,
        token,
      }).then(({ statusCode, data, error }) => {
        if (statusCode === 200) {
          history.push("/");
          return CallSuccessToast(data.msgs);
        }
        if (data.newPassword)
          setError((prev) => ({ ...prev, newPassword: data.newPassword }));
        if (data.newPasswordConfirm)
          setError((prev) => ({
            ...prev,
            newPasswordConfirm: data.newPasswordConfirm,
          }));
        if (data.errs) return CallErrorToast(data.errs);

        return error
          ? CallErrorToast(error)
          : CallErrorToast("실패하였습니다.");
      });
    },
    [history, token]
  );

  return (
    <>
      <SignUpTitle>
        <h3>Change Password</h3>
      </SignUpTitle>
      <FormExplain>
        임시비밀번호 입력 영역입니다. 임시 비밀번호와 변경할 새 비밀번호를
        입력해주세요.
      </FormExplain>
      <ChangeTempPasswordForm>
        <TextField className="i_lock">
          <label htmlFor="currentPassword" className="label">
            Temporary Password
          </label>
          <input
            type="password"
            id="currentPassword"
            className={`input ${errors.currentPassword ? "error" : ""}`}
            placeholder={"임시 비밀번호를 입력하세요."}
            autoComplete="current-password"
            {...register("currentPassword", { required: true })}
          />
        </TextField>
        <TextField className="i_lock">
          <label htmlFor="newPassword" className="label">
            New Password
          </label>
          <input
            type="password"
            id="newPassword"
            className={`input ${
              errors.newPassword || error.newPassword ? "error" : ""
            }`}
            placeholder={"새 비밀번호를 입력하세요"}
            autoComplete="new-password"
            {...register("newPassword", { required: true })}
          />
          {error.newPassword && (
            <span style={{ color: `rgb(${$secondary})` }}>
              {error.newPassword}
            </span>
          )}
        </TextField>
        <TextField className="i_lock">
          <label htmlFor="newPasswordConfirm" className="label">
            New Password Confirm
          </label>
          <input
            type="password"
            id="newPasswordConfirm"
            className={`input ${
              errors.newPasswordConfirm || error.newPasswordConfirm
                ? "error"
                : ""
            }`}
            placeholder={"새 비밀번호를 다시한번 입력하세요"}
            autoComplete="new-password"
            {...register("newPasswordConfirm", { required: true })}
          />
          {error.newPasswordConfirm && (
            <span style={{ color: `rgb(${$secondary})` }}>
              {error.newPasswordConfirm}
            </span>
          )}
        </TextField>
      </ChangeTempPasswordForm>
      <Button
        type="submit"
        onClick={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        비밀번호 변경
      </Button>
    </>
  );
};

export default ChangePassword;
