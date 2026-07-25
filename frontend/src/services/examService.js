import api from "./api";

export const generateExam = async (payload) => {
  const response = await api.post(
    "/exam/generate",
    payload
  );

  return response.data;
};