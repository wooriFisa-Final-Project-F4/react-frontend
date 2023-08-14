import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Container,
  Typography,
  InputAdornment,
} from "@mui/material";
import { Email, VpnKey, Phone, Cake, Person, Home } from "@mui/icons-material";
import DaumPostcode from "react-daum-postcode";
import { Post } from "./Post";
import "./Register.css";

export const Register = () => {
  const [userDetails, setUserDetails] = useState({
    username: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    phoneNumberMiddle: "",
    phoneNumberLast: "",
    address: "",
    detailAddress: "",
  });
  const [validPhoneNumber, setValidPhoneNumber] = useState(true);

  const validatePhoneNumber = () => {
    if (
      /^[0-9]{4}$/.test(userDetails.phoneNumberMiddle) &&
      /^[0-9]{4}$/.test(userDetails.phoneNumberLast)
    ) {
      setValidPhoneNumber(true);
    } else {
      setValidPhoneNumber(false);
    }
  };

  const [popup, setPopup] = useState(false);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
    if (name === "phoneNumberMiddle" || name === "phoneNumberLast") {
      validatePhoneNumber();
    }
  };

  const handleComplete = (data: any) => {
    setUserDetails((prevDetails) => ({
      ...prevDetails,
      address: data.address,
    }));
    setPopup(false);
  };

  return (
    <section className="signup">
      <div
        className="signup_div"
        style={{
          paddingTop: "40px",
          margin: "auto",
          backgroundColor: "rgba(255, 255, 255, 0.882)",
        }}
      >
        <Container
          style={{
            width: "470px",
          }}
        >
          <Typography
            mt={5}
            variant="h4"
            component="h1"
            color="textPrimary"
            style={{ textAlign: "center" }}
          >
            회원가입
          </Typography>
          <Grid container spacing={2} direction="column">
            <Grid item>
              <TextField
                style={{ width: "200px" }}
                required
                label="사용자 이름"
                name="username"
                variant="outlined"
                value={userDetails.username}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: "400px" }}
                required
                label="이메일 ID"
                name="email"
                variant="outlined"
                value={userDetails.email}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                  endAdornment: <Button variant="outlined">인증</Button>,
                }}
              />
            </Grid>
            <Grid item>
              <TextField
                style={{ width: "320px" }}
                required
                label="비밀번호"
                name="password"
                variant="outlined"
                type="password"
                value={userDetails.password}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <VpnKey />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <h4>생년월일</h4>
              <TextField
                variant="outlined"
                type="date"
                name="age"
                value={userDetails.age}
                onChange={handleChange}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Cake />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item>
              <h4>연락처</h4>
              <TextField
                required
                variant="outlined"
                value="010"
                InputProps={{
                  readOnly: true,
                  startAdornment: (
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  ),
                }}
                style={{ width: "100px", marginRight: "10px" }}
              />
              <TextField
                required
                variant="outlined"
                name="phoneNumberMiddle"
                onChange={handleChange}
                style={{ width: "100px", marginRight: "10px" }}
                inputProps={{ maxLength: 4 }}
              />
              <TextField
                required
                variant="outlined"
                name="phoneNumberLast"
                onChange={handleChange}
                style={{ width: "100px" }}
                inputProps={{ maxLength: 4 }}
              />
              {!validPhoneNumber && (
                <p style={{ marginTop: "5px", color: "red" }}>
                  휴대폰 번호가 올바르지 않습니다.
                </p>
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <div style={{ display: "flex", flexDirection: "row" }}>
                <TextField
                  style={{ width: "350px", marginRight: "10px" }}
                  label="주소"
                  variant="outlined"
                  type="text"
                  name="address"
                  value={userDetails.address}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Home />
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  onClick={() => setPopup(true)}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "100px",
                  }}
                >
                  우편번호 찾기
                </Button>
                {popup && (
                  <Post setcompany={handleComplete} setPopup={setPopup} />
                )}
              </div>
              <TextField
                style={{ width: "460px", marginTop: "5px" }}
                label="상세주소"
                variant="outlined"
                type="text"
                name="detailAddress"
                value={userDetails.detailAddress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: "black" }}
                startIcon={<Home />}
              >
                회원가입
              </Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};
