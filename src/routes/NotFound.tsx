import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { $primary } from "../util/themeColor";
import Img from "../assets/images/Img";

export const BtnContainer = styled.div`
  padding: 55px 0 45px;
  display: flex;
  justify-content: center;
  .button {
    width: 198px;
    height: 38px;
    border: 1px solid rgb(${$primary});
    margin-right: 20px;
    font-size: 12px;
    cursor: pointer;
    &.filled {
      background-color: rgb(${$primary});
      color: #fff;
      &:hover {
        background-color: #7d839b;
      }
    }
    &.outlined {
      color: rgb(${$primary});
      background: none;
      &:hover {
        background-color: #7d839b;
        color: #fff;
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
  a {
    display: block;
    text-align: center;
    line-height: 38px;
  }
  &.no_padding {
    padding: 0;
  }
`;

const PageNotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: calc(100vh - 64px);
  width: 100vw;
  position: absolute;
  left: 0;
  top: 64px;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  p {
    color: rgba(200, 200, 200, 1);
    font-size: 16px;
    padding: 20px 0;
  }
  .desc404 {
    width: 554px;
    text-align: center;
    position: relative;
  }

  .dino {
    width: 77px;
    height: 77px;
    position: absolute;
    left: 50%;
    top: 198px;
    transform: translateX(-50%);
  }
  .dino img {
    width: 100%;
  }

  .pageNotFound {
    font-size: 50px;
    font-weight: 700;
    color: #f4b953;
  }

  .text {
    padding-top: 5px;
    font-size: 16px;
    color: rgba(93, 99, 122, 0.5);
    line-height: 19px;
    margin-bottom: 50px;
  }
`;

const NotFound = () => {
  return (
    <PageNotFound>
      <div className="desc404">
        <div className="error font_en">
          <img src={Img.not_found} alt="404" />
        </div>
        <div className="dino">
          <img src={Img.dino} alt="공룡" />
        </div>
        <div className="pageNotFound font_en">Page Not Found</div>
        <div className="text">
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          입력하신 주소가 정확한지 다시 한 번 확인해주시기 바랍니다.
        </div>
      </div>
      <BtnContainer style={{ padding: 0 }}>
        <Link to="/" className="button filled" style={{ margin: 0 }}>
          홈으로
        </Link>
      </BtnContainer>
    </PageNotFound>
  );
};

export default NotFound;
