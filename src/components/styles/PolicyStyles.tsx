import { closeX } from "assets/SVG";
import styled from "@emotion/styled";
import { $primary, $secondary, $white } from "util/themeColor";
import { Dialog } from "@material-ui/core";

export const PolicyContainer = styled.div`
  box-sizing: border-box;
  backdrop-filter: blur(10px);
  margin-bottom: 36px;
  &:hover {
  }
  .label {
    color: rgba(${$white}, 0.8);
    flex-grow: 1;
    font-size: 14px;
    cursor: pointer;
    vertical-align: top;
    &.bold {
      font-weight: bold;
    }
    span {
      color: #ff6060;
      vertical-align: top;
      font-size: 8px;
    }
  }
  .desc {
    color: rgba(${$white}, 0.8);
    font-family: "Noto Sans KR", sans-serif;
    font-size: 12px;
    font-weight: 100;
    padding-left: 28px;
    span {
      font-family: "Spartan", sans-serif;
    }
  }
  input {
    width: 1px;
    height: 1px;
    position: relative;
    margin: 8px 18px 8px 8px;
    &:before,
    &:after {
      position: absolute;
      left: -7px;
      top: -7px;
      background-color: transparent;
      width: 15px;
      height: 15px;
      box-sizing: border-box;
      border: 1px solid #fff;
      border-radius: 4px;
    }
    &:before {
      content: "";
    }
    &:checked::after {
      content: "";
      background-repeat: no-repeat;
      background-color: ${$primary};
      background-position: 2px 2px;
      background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='9.375' height='7.768' viewBox='0 0 9.375 7.768'%3E%3Cpath d='M-16854.51-15548.546l3.205,3.637,4.07-5.976' transform='translate(16855.568 15551.927)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5'/%3E%3C/svg%3E");
    }
  }
  .checkbox {
    display: flex;
    margin-bottom: 6px;
  }
  .all_check {
    padding-bottom: 16px;
    margin-bottom: 16px;
    border-bottom: 1px solid rgba(${$white}, 0.1);
  }
  .btn_fullTextModal {
    color: rgb(${$secondary});
    background-color: transparent;
    border: 0 none;
    font-size: 10px;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const StyledDialog = styled(({ className, ...props }) => (
  <Dialog classes={{ paper: className }} {...props} />
))`
  &.styled {
    border-radius: 15px;
    padding: 24px 25px 37px;
    .dialog_header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      h4 {
        font-family: "Noto Sans KR", sans-serif;
        font-weight: 500;
        font-size: 25px;
        color: rgba(${$primary});
      }
      .btn_close {
        width: 14px;
        height: 14px;
        display: block;
        background-color: transparent;
        border: 0 none;
        text-indent: -9999px;
        overflow: hidden;
        background-repeat: no-repeat;
        background-image: url("data:image/svg+xml,${closeX}");
        cursor: pointer;
      }
    }
    .dialog_content {
      width: 343px;
      height: 340px;
      margin-bottom: 40px;
    }
  }
`;
