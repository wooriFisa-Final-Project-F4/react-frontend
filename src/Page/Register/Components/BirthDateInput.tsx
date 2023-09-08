import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Cake } from "@mui/icons-material";

export const BirthDateInput = ({
  value,
  onChange,
}: {
  value: string;
  onChange: any;
}) => {
  return (
    <div>
      <TextField
        style={{ width: "460px" }}
        label="생년월일"
        variant="outlined"
        type="date"
        name="birth"
        value={value}
        onChange={onChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Cake />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};
