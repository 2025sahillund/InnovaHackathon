import api from "./api";

export const generateInterview = async (data) => {
  const response = await api.post("/api/interview/generate", data);
  return response.data;
};
export const evaluateInterview = async (data) => {
  const response = await api.post(
    "/api/interview/evaluate",
    data
  );

  return response.data;
};