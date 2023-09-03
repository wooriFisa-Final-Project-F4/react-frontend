import React, { useEffect, useState } from "react";
import DaumPostcode from "react-daum-postcode";
import "./Post.css";

export const Post = (props: any) => {
  const complete = (data: any) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setcompany({
      ...props.company,
      address: fullAddress,
    });
  };

  const handleClose = () => {
    if (props.setPopup) {
      props.setPopup(false);
    }
  };

  return (
    <div className="postmodal">
      <div className="postmodal-content">
        <button className="close-btn" onClick={handleClose}>
          &times;
        </button>
        <DaumPostcode autoClose onComplete={complete} />
      </div>
    </div>
  );
};
