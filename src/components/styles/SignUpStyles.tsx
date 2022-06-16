import styled from "@emotion/styled";
import { check, emailSVG, lockSVG, oneUser } from "assets/SVG";
import {$primary, $secondary, $white} from "../../util/themeColor";
export const Button = styled.button`
  background-color: rgba(${$white}, 0.1);
  font-size: 18px;
  color: #fff;
  display: block;
  width: 100%;
  padding: 11px 0 12px 0;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  &:not(:disabled):hover {
    background-color: rgba(${$white}, 0.25);
  }
  ${({ findPw }) =>
    findPw &&
    ` 
    margin-top: 20px;
    margin-bottom: 45px;
  `};
  &:disabled {
    color: rgba(${$white}, 0.3);
  }
`;
export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 8px;
  margin-bottom: 27px;
  position: relative;
  span.error {
    position: absolute;
    right: 0;
    bottom: 0;
    color: rgb(${$secondary});
  }
  .label {
    font-family: "Spartan", sans-serif;
    font-size: 18px;
    color: #fff;
    padding-bottom: 5px;
  }
  .input {
    border: 0;
    border-bottom: 1px solid #fff;
    padding: 7px 0 8px 30px;
    color: #fff;
    font-size: 12px;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: left center, right center;
    &[type="password"] {
      font-family: Dotum, Arial, sans-serif !important;
    }
    &::placeholder {
      color: rgba(${$white}, 0.5);
    }
    &.error {
      color: rgba(${$secondary}, 1);
      border-bottom: 1px solid rgb(${$secondary});
      &::placeholder {
        color: rgba(${$secondary}, 0.5);
      }
    }
  }
  span {
    color: #fff;
    text-align: right;
  }
  &.i_mail .input {
    background-image: url("data:image/svg+xml,${emailSVG("fff")}");
    &.error {
      background-image: url("data:image/svg+xml,${emailSVG("f4b953")}"),
        url("data:image/svg+xml,${check()}");
    }
  }
  &.i_lock {
    margin-bottom: 15px;
    .input {
      background-image: url("data:image/svg+xml,${lockSVG("fff")}");
      &.error {
        background-image: url("data:image/svg+xml,${lockSVG("f4b953")}"),
          url("data:image/svg+xml,${check()}");
      }
    }
  }
  &.i_user .input {
    background-image: url("data:image/svg+xml,${oneUser("fff")}");
  }
`;

export const Typography = styled.h1`
  font-size: 30px;
  color: rgb(${$primary});
`;

export const SignUpTypography = styled.div`
  h3 {
    text-align: center;
    font-size: 24px;
    color: rgba(${$white}, 0.8);
    margin: 50px 0 30px;
  }
`;

export const SignUpFormContainer = styled.div`
  .container {
    margin-bottom: 30px;
  }
`;

export const SignUpTitle = styled.div`
  h3 {
    font-family: "font_en", "Spartan", sans-serif;
    text-align: center;
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #fff;
  }
`;

export const SignUpExplain = styled.p`
  font-size: 16px;
  text-align: center;
  padding: 40px 0;
  color: #fff;
`;
