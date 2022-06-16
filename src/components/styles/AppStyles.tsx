import styled from "@emotion/styled";
import backLogo from "assets/images/back_logo.png";
import { $primary } from "util/themeColor";

export const JumboText = styled.div`
  width: 100%;
  padding: 100px 0 60px;
  text-align: center;
  color: #fff;
  h3 {
    font-size: 50px;
  }
  span {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);

  h5 {
    font-weight: 100;
  }
  button {
    background: transparent;
    border: 0 none;
    color: rgba(255, 255, 255, 0.5);
    padding: 0 10px;
    font-size: 12px;
    position: relative;
    cursor: pointer;
    &:hover {
      color: rgba(255, 255, 255, 1);
    }
    &:last-of-type::after {
      content: "";
      position: absolute;
      left: 0;
      top: 2px;
      width: 1px;
      height: 10px;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
`;

export const AuthContainer = styled.div`
  width: 100%;
  // height: 100vh;
  position: relative;
  top: 65px;
  bottom: 0;
  background-color: rgb(${$primary});
  background-image: url(${backLogo});
  background-repeat: no-repeat;
  background-position: -85px calc(100% + 110px);
  background-attachment: fixed;
  .auth_content {
    width: 100%;
    height: calc(100vh - 65px);
  }
`;

export const FilledButton = styled.button`
  background-color: rgb(${$primary});
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  height: 50px;
  border: 0 none;
`;

const WhiteX = styled.i`
  display: block;
  width: 14px;
  height: 14px;
  margin: auto 0;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.121' height='16.121' viewBox='0 0 16.121 16.121'%3E%3Cg transform='translate(1.061 1.061)'%3E%3Cline x2='14' y2='14' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3Cline x1='14' y2='14' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='1.5'/%3E%3C/g%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: center;
`;

export const CloseButton = ({ closeToast }) => <WhiteX onClick={closeToast} />;

export const FormExplain = styled.p`
  font-size: 12px;
  font-weight: 100;
  text-align: center;
  padding: 0 0 40px;
  color: #fff;
`;
