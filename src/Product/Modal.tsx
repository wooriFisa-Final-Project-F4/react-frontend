import React from "react";

export const Modal = (message: string) => {
  return (
    <div className="modal">
      <span>{message}</span>
      <button>확인</button>
      <button>취소</button>
    </div>
  );
};
