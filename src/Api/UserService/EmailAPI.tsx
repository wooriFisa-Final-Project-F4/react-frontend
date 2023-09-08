import axios from "axios";

const API_BASE_URL = "https://artemoderni.com/api/email/v1";

export const sendAuthenticationCode = async (
  email: string
): Promise<string> => {
  const response = await axios.post(`${API_BASE_URL}/code`, null, {
    params: {
      email: email,
    },
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.status !== 200) {
    throw new Error("이메일 전송에 실패했습니다.");
  }

  return response.data;
};
