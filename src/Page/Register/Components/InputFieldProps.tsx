import React from "react";
import { TextField, InputAdornment } from "@mui/material";
import { Email, VpnKey, Person } from "@mui/icons-material";

interface InputFieldProps {
  label: string;
  name: string;
  value: string;
  onChange: any; // 이 부분은 더 정확한 타입으로 지정할 수 있습니다.
  type?: string;
  startIcon?: "email" | "vpnkey" | "person";
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  startIcon,
}) => {
  let StartIcon;
  if (startIcon === "email") StartIcon = <Email />;
  else if (startIcon === "vpnkey") StartIcon = <VpnKey />;
  else if (startIcon === "person") StartIcon = <Person />;

  return (
    <TextField
      style={{ width: "460px" }}
      required
      label={label}
      name={name}
      variant="outlined"
      type={type}
      value={value}
      onChange={onChange}
      InputProps={{
        startAdornment: StartIcon ? (
          <InputAdornment position="start">{StartIcon}</InputAdornment>
        ) : undefined,
      }}
    />
  );
};
