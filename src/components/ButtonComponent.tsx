import React, {FC } from "react";
import { CircularProgress } from "@material-ui/core";
import { Button, LoadingButton } from "./styles/LoginStyles";

interface ButtonComponentType {
  isLoading: boolean;
  onClick: () => {}
  children?: FC | undefined;
  disabled?: boolean | undefined;
  isSubmit?: boolean | undefined;
}

function ButtonComponent({ isLoading, children, onClick, disabled, isSubmit = false }: ButtonComponentType) {
  return (
    <>
      {isLoading ? (
        <LoadingButton>
          <CircularProgress />
        </LoadingButton>
      ) : (
        <Button type={!isSubmit ? "button" : "submit"} onClick={onClick} disabled={disabled}>
          {children}
        </Button>
      )}
    </>
  );
}

export default ButtonComponent;
