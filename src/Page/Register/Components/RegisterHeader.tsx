import React from "react";
import { Typography } from "@mui/material";

export const RegisterHeader = () => {
  return (
    <Typography
      mt={5}
      variant="h4"
      component="h1"
      color="textPrimary"
      style={{ textAlign: "center" }}
    >
      회원가입
    </Typography>
  );
};
