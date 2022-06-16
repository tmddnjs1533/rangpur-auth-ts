import React from "react";
import styled from "@emotion/styled";

const Content = styled.div`
  display: flex;
  align-items: center;
`;

const Icon = styled.i`
  flex-grow: 0;
  flex-shrink: 1;
  display: block;
  font-size: 20px;
  border: 1px solid #fff;
  width: 30px;
  height: 30px;
  color: #fff;
  border-radius: 50%;
  margin-right: 20px;
  background-repeat: no-repeat;
  background-position: center;
  text-align: center;
  font-style: normal;
  &.check {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16.177' height='14.288' viewBox='0 0 16.177 14.288'%3E%3Cg transform='translate(-1679.1 -350.953)'%3E%3Cline x2='5.602' y2='7.469' transform='translate(1680.5 356.372)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3Cpath d='M7.787.842,0,12.341' transform='translate(1686.102 351.5)' fill='none' stroke='%23fff' stroke-linecap='round' stroke-width='2'/%3E%3C/g%3E%3C/svg%3E");
  }
`;
export const errorConfig = {
  autoClose: true,
  style: {
    backgroundColor: "#7C6966",
  },
};

export const successConfig = {
  autoClose: true,
  style: {
    backgroundColor: "#5E7175",
  },
};

const CustomToast = ({ variant, text }) => {
  if (variant === "error") {
    return (
      <Content>
        <Icon>!</Icon>
        <p>{text}</p>
      </Content>
    );
  } else if (variant === "success") {
    return (
      <Content>
        <Icon className="check" />
        <p>{text}</p>
      </Content>
    );
  }
};

export default CustomToast;
