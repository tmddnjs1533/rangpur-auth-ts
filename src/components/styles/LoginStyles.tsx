import styled from "@emotion/styled";
import Icon from "assets/images/icon.png";
import { $secondary, $white } from "../../util/themeColor";

export const LoginArea = styled.div`
  width: 360px;
  padding: 50px 20px;
  margin: 0 auto 50px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const SignUpLink = styled.p`
  text-align: center;
  color: #fff;
  font-size: 12px;
  padding-top: 5px;
  a {
    color: rgb(${$secondary});
    text-decoration: none;
  }
`;

export const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.1);
  font-size: 18px;
  color: #fff;
  display: block;
  width: 100%;
  padding: 11px 0 12px 0;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  &:not(:disabled):hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
  ${({ findPw }: {findPw?: boolean}) =>
    findPw &&
    ` 
    margin-top: 20px;
    margin-bottom: 45px;
  `};
  &:disabled {
    color: rgba(${$white}, 0.3);
  }
`;

export const LoadingButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  height: 50px;
  svg {
    circle {
      stroke: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const SocialLogin = styled.div`
  h3 {
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    padding-top: 50px;
    a {
      color: rgb(${$secondary});
    }
  }
  ul {
    width: 100%;
    height: 40px;
    padding: 15px 0 20px;
    margin-bottom: 45px;
    opacity: 50%;
    display: flex;
    justify-content: space-between;
    li {
      width: 103px;
      height: 38px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 15px;
      margin-right: 22px;

      &:nth-of-type(3) {
        margin-right: 0;
      }
      a {
        display: block;
        width: 60px;
        height: 16px;
        overflow: hidden;
        margin: 9px auto 0;
        background-repeat: no-repeat;
        background-image: url(${Icon});
        background-position: -40px -6px;
      }
    }
    .social_kakao a {
      background-position: -40px -22px;
    }
    .social_google a {
      background-position: -40px -39px;
    }
  }
`;

export const ButtonLink = styled.button`
  background: transparent;
  border: 0 none;
  text-align: center;
  font-size: 12px;
  padding-top: 5px;
  color: rgb(${$secondary});
  cursor: pointer;
  display: block;
  margin: 40px auto 0;
  &:hover {
    text-decoration: underline;
  }
`;
