import React, { useState } from "react";
import { Grid, Container } from "@mui/material";

import { RegisterHeader } from "./Components/RegisterHeader";
import { InputField } from "./Components/InputFieldProps";
import { EmailInput } from "./Components/EmailInput";
import { GenderRadioGroup } from "./Components/GenderRadioGroup";
import { PhoneNumberInput } from "./Components/PhoneNumberInput";
import { AddressInput } from "./Components/AddressInput";
import { RegisterButton } from "./Components/RegisterButton";
import { BirthDateInput } from "./Components/BirthDateInput";

import "./Register.css";
import "./Post.css";
import { Loading } from "../../Utils/Loading";
import { FetchFail } from "../../Utils/FetchFail";
import SignupRequest from "../../Api/UserService/SignupRequest";
import { signup } from "../../Api/UserService/UserAPI";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    gender: "남",
    birth: "",
    address: "",
    detailAddress: "",
    email: "",
    password: "",
    phoneNumber: "010-",
    phoneNumberMiddle: "",
    phoneNumberLast: "",
  });
  const [validations, setValidations] = useState({
    phoneNumber: true,
    email: true,
  });
  const [popup, setPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleValidation = {
    phoneNumber: (phoneNumberMiddle: string, phoneNumberLast: string) => {
      if (!phoneNumberMiddle || !phoneNumberLast) return false;
      return (
        /^[0-9]{4}$/.test(phoneNumberMiddle) &&
        /^[0-9]{4}$/.test(phoneNumberLast)
      );
    },

    email: (email: string) => {
      const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      if (email.trim() === "" || !regex.test(email)) {
        return true;
      }
      return false;
    },
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "phoneNumberMiddle" || name === "phoneNumberLast") {
      const updatedPhone = formData.phoneNumber.split("-");
      if (name === "phoneNumberMiddle") {
        updatedPhone[1] = value;
      } else {
        updatedPhone[2] = value;
      }

      const newPhoneNumber = updatedPhone.join("-");
      setFormData((prev) => ({ ...prev, phoneNumber: newPhoneNumber }));

      const isValidPhoneNumber = handleValidation.phoneNumber(
        updatedPhone[1],
        updatedPhone[2]
      );
      setValidations((prev) => ({
        ...prev,
        phoneNumber: isValidPhoneNumber,
      }));
    }
  };

  const handleComplete = (data: any) => {
    setFormData((prev) => ({ ...prev, address: data.address }));
    setPopup(false);
  };

  const navigate = useNavigate();
  const handleSignup = async () => {
    const request: SignupRequest = {
      username: formData.username,
      gender: formData.gender,
      birth: formData.birth,
      address: formData.address + " " + formData.detailAddress,
      email: formData.email,
      password: formData.password,
      phoneNumber:
        formData.phoneNumber +
        formData.phoneNumberMiddle +
        "-" +
        formData.phoneNumberLast,
    };
    setIsLoading(true);
    try {
      const response = await signup(request);
      setError("");
      if (response) {
        navigate("/login");
      }
    } catch (error) {
      setError("회원가입에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <FetchFail message={error} />;
  }

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
          <RegisterHeader />
          <Grid container spacing={2} direction="column">
            <Grid item>
              <InputField
                label="사용자 이름"
                name="username"
                value={formData.username}
                onChange={handleChange}
                startIcon="person"
              />
            </Grid>
            <Grid item>
              <EmailInput
                email={formData.email}
                handleChange={handleChange}
                validations={handleValidation.email}
              />
            </Grid>
            <Grid item>
              <InputField
                label="비밀번호"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                startIcon="vpnkey"
              />
            </Grid>

            <Grid item>
              <BirthDateInput value={formData.birth} onChange={handleChange} />
            </Grid>
            <Grid item>
              <GenderRadioGroup
                value={formData.gender}
                onChange={handleChange}
              />
            </Grid>
            <Grid item style={{ height: "100px" }}>
              <PhoneNumberInput
                formData={formData}
                handleChange={handleChange}
                validations={validations}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={8}
              md={6}
              lg={4}
              style={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <AddressInput
                formData={formData}
                handleComplete={handleComplete}
                setPopup={setPopup}
                popup={popup}
                onchange={handleChange}
              />
            </Grid>
            <Grid item md={6}>
              <RegisterButton
                handleSignup={handleSignup}
                disabled={isLoading}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </section>
  );
};
