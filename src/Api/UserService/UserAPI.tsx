import axios from "axios";
import React from "react";
import SignupRequest from "./SignupRequest";

const API_BASE_URL = "https://artemoderni.com/api/user";
export const signup = async (request: SignupRequest): Promise<string> => {
  const response = await axios.post(`${API_BASE_URL}/v1/signup`, request, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("회원가입에 실패했습니다.");
  }
  return response.data;
};

export const emailCertification = async (
  email: string,
  code: string
): Promise<string> => {
  const response = await axios.post(
    `${API_BASE_URL}/auth/v1/email/certification`,
    {
      email: email,
      certificationNumber: code,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (response.status !== 200) {
    throw new Error("이메일 인증에 실패했습니다.");
  }

  return response.data;
};
