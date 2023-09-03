import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ProductReadResponse from "../../Api/ProducService/ProductResponse";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { getAuctionStatus } from "../../Utils/ProductStatusUtils";
import "./ProductCard.css";
export const ProductCard = (props: ProductReadResponse) => {
  const { label } = getAuctionStatus(props.auctionStatus);
  const { color } = getAuctionStatus(props.auctionStatus);
  return (
    <Grid item xs={15} className="product-card">
      <div
        style={{
          display: "flex",
          border: "1px solid #ccc",
          padding: "16px",
        }}
      >
        <img src={props.images[0]} alt={props.name} className="product_image" />
        <div>
          <Typography variant="h5">{props.name}</Typography>
          <Typography variant="h6" color="text.secondary">
            {props.artist}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            style={{ color: color }}
          >
            {label}
          </Typography>
        </div>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            flexDirection: "row",
            padding: "10px",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" color="text.primary">
            ₩ {parseInt(props.auctionPrice, 10).toLocaleString("ko-KR")}
          </Typography>
          <FavoriteBorderOutlinedIcon
            style={{ color: "black", margin: "30px", fontSize: "25px" }}
          />
        </div>
      </div>
    </Grid>
  );
};
