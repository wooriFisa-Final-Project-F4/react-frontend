import React from "react";
import { Button, Typography } from "@mui/material";
import { BorderBottom, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
export const RegisterButton = ({
  handleSignup,
  disabled,
}: {
  handleSignup: any;
  disabled: any;
}) => {
  return (
    <>
      <Button
        fullWidth
        variant="contained"
        style={{ backgroundColor: "black" }}
        onClick={handleSignup}
        disabled={disabled}
      >
        회원가입
      </Button>
      <Typography
        style={{ marginTop: "5px", marginBottom: "5px", textAlign: "center" }}
      >
        <Link to="/login" style={{ borderBottom: "1px solid" }}>
          이미 계정이 있으신가요? 로그인 하러가기
        </Link>
      </Typography>
    </>
  );
};
