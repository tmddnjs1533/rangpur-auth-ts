import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const Button = styled.div`
  background-color: rgba(255, 255, 255, 0.1);

  display: block;
  width: 100%;
  padding: 11px 0 12px 0;
  border: 0;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);

  a {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 18px;
    color: #fff;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

export default function StyledLink({ label, to }) {
  return (
    <Button>
      <Link to={to}>{label}</Link>
    </Button>
  );
}
