import React from "react";

export const FetchFail = (message: any) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <p>{message}</p>
      </div>
    </>
  );
};
