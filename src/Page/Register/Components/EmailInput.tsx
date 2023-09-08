import React, { useState } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { Email } from "@mui/icons-material";
import { emailCertification } from "../../../Api/UserService/UserAPI";
import { sendAuthenticationCode } from "../../../Api/UserService/EmailAPI";

export const EmailInput = ({
  email,
  handleChange,
  validations,
}: {
  email: string;
  handleChange: (event: any) => void;
  validations: (email: string) => boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputField, setInputField] = useState(false);
  const [certificationCode, setCertificationCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [timer, setTimer] = useState<number | null>(null);
  const [error, setError] = useState("");

  const startTimer = () => {
    let timeLeft = 180;
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        timeLeft -= 1;
        setTimer(timeLeft);
      } else {
        clearInterval(interval);
        setIsLoading(false);
        setInputField(false);
        setError("인증 시간이 만료되었습니다.");
      }
    }, 1000);
  };

  const handleCertify = async () => {
    setError("");
    setIsLoading(true);
    setInputField(true);
    try {
      await sendAuthenticationCode(email);
    } catch (error) {
      console.log(error);
    }
    startTimer();
  };

  const handleVerify = async () => {
    setError("");
    setIsLoading(true);
    try {
      const response = await emailCertification(email, certificationCode);

      setIsVerified(true);
      setIsLoading(false);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField
          style={{ width: "460px" }}
          required
          label="이메일 ID"
          name="email"
          variant="outlined"
          value={email}
          onChange={handleChange}
          disabled={isLoading || isVerified}
          helperText={
            isVerified ? (
              <p style={{ color: "green" }}>인증이 성공했습니다.</p>
            ) : validations(email) ? (
              <p style={{ color: "red" }}>올바른 이메일 형식을 입력하세요</p>
            ) : null
          }
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
            endAdornment: (
              <Button
                variant="outlined"
                disabled={validations(email) || isVerified}
                onClick={isVerified ? undefined : handleCertify}
              >
                {isVerified ? "재전송" : "인증"}
              </Button>
            ),
          }}
        />
      </Grid>
      {inputField && (
        <>
          <Grid item>
            <TextField
              style={{ width: "460px" }}
              label="인증 코드"
              disabled={isVerified}
              variant="outlined"
              value={certificationCode}
              onChange={(e) => setCertificationCode(e.target.value)}
              helperText={<p style={{ color: "red" }}>{error}</p>}
              InputProps={{
                endAdornment: (
                  <>
                    <Typography>
                      {Math.floor(timer! / 60)}:{timer! % 60 < 10 ? "0" : ""}
                      {timer! % 60}
                    </Typography>
                    <Button
                      variant="outlined"
                      disabled={isVerified}
                      onClick={handleVerify}
                      style={{ marginLeft: "10px" }}
                    >
                      확인
                    </Button>
                  </>
                ),
              }}
            />
          </Grid>
        </>
      )}
    </Grid>
  );
};
