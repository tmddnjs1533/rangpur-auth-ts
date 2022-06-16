import styled from "@emotion/styled";
import { $primary } from "../../util/themeColor";

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  background-color: rgb(${$primary});
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .header {
    width: 100%;
    max-width: 1880px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: flex-start;
    .logo {
      width: 240px;
      height: 100%;
      margin-left: 20px;
      h1 {
        width: 120px;
        height: 28px;
        margin-top: 15px;
        img {
          width: 100%;
        }
      }
    }
    .info {
      width: 1640px;
      height: 100%;
      position: relative;
    }
    .infoImg {
      width: 35px;
      height: 35px;
      border-radius: 35px;
      overflow: hidden;
      background-color: #ecedef;
      position: absolute;
      right: 20px;
      top: 14px;
      img {
        margin-top: -63px;
      }
    }
  }
`;
