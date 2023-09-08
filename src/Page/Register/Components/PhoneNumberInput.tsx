import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Phone } from "@mui/icons-material";

interface PhoneNumberInputProps {
  formData: any;
  handleChange: any;
  validations: any;
}

export const PhoneNumberInput: React.FC<PhoneNumberInputProps> = ({
  formData,
  handleChange,
  validations,
}) => {
  return (
    <>
      <TextField
        label="연락처"
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
        style={{ width: "120px", marginRight: "10px" }}
      />
      <TextField
        required
        variant="outlined"
        name="phoneNumberMiddle"
        value={formData.phoneNumberMiddle.split("-")[1]}
        onChange={handleChange}
        style={{ width: "160px", marginRight: "10px" }}
        inputProps={{ maxLength: 4 }}
      />
      <TextField
        required
        variant="outlined"
        name="phoneNumberLast"
        value={formData.phoneNumberLast.split("-")[2]}
        onChange={handleChange}
        style={{ width: "160px" }}
        inputProps={{ maxLength: 4 }}
      />
      {!validations.phoneNumber && (
        <p style={{ marginTop: "5px", color: "red" }}>
          휴대폰 번호가 올바르지 않습니다.
        </p>
      )}
    </>
  );
};
