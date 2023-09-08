import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

interface GenderRadioGroupProps {
  value: string;
  onChange: any;
}

export const GenderRadioGroup: React.FC<GenderRadioGroupProps> = ({
  value,
  onChange,
}) => {
  return (
    <FormControl component="fieldset" style={{ paddingLeft: "5px" }}>
      <h4>성별</h4>
      <RadioGroup
        row
        aria-label="gender"
        name="gender"
        value={value}
        onChange={onChange}
      >
        <FormControlLabel value="녀" control={<Radio />} label="여자" />
        <FormControlLabel value="남" control={<Radio />} label="남자" />
      </RadioGroup>
    </FormControl>
  );
};
