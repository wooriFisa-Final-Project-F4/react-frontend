import React from "react";
import { TextField, Button, InputAdornment } from "@mui/material";
import { Home } from "@mui/icons-material";
import DaumPostcode from "react-daum-postcode";
import { Post } from "../Post";

export const AddressInput = ({
  formData,
  handleComplete,
  onchange,
  setPopup,
  popup,
}: {
  formData: any;
  handleComplete: (data: any) => void;
  onchange: (event: any) => void;
  setPopup: any;
  popup: boolean;
}) => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <TextField
          style={{ width: "350px", marginRight: "10px" }}
          label="주소"
          variant="outlined"
          type="text"
          name="address"
          value={formData.address}
          onChange={onchange}
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
        {popup && <Post setcompany={handleComplete} setPopup={setPopup} />}
      </div>
      <TextField
        style={{ width: "460px", marginTop: "15px" }}
        label="상세주소"
        variant="outlined"
        type="text"
        name="detailAddress"
        value={formData.detailAddress}
        onChange={onchange}
      />
    </>
  );
};
