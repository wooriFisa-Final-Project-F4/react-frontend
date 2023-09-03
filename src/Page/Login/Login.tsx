// LoginForm.tsx
import React, { useState } from "react";
import {
  TextField,
  Button,
  InputAdornment,
  IconButton,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import { Visibility, VisibilityOff, Email } from "@mui/icons-material";
import "./Login.css";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
    setIsEmailValid(validateEmail(event.target.value));
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
  };

  return (
    <section className="login">
      <div
        style={{
          paddingTop: "25px",
          height: "100vh",
          backgroundColor: "rgba(255, 255, 255, 0.882)",
        }}
      >
        <Grid
          container
          spacing={3}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Typography mt={5} variant="h4" component="h1" color="textPrimary">
              로그인
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <TextField
              style={{ width: "300px" }}
              label="이메일 ID"
              variant="outlined"
              type="email"
              value={email}
              onChange={handleEmailChange}
              error={!isEmailValid}
              helperText={!isEmailValid && "올바른 형식의 이메일을 입력하세요."}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <TextField
              style={{ width: "300px" }}
              label="비밀번호"
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <VisibilityOff color="action" />
                      ) : (
                        <Visibility color="action" />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} sm={8} md={6} lg={4}>
            <Button
              fullWidth
              variant="contained"
              style={{
                width: "250px",
                backgroundColor: "black",
                marginBottom: "50px",
              }}
            >
              로그인
            </Button>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};
