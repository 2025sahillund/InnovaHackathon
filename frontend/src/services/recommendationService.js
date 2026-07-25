import api from "./api";

export const generateRecommendation = async (
  payload
) => {
  const response = await api.post(
    "/recommendation/generate",
    payload
  );

  return response.data;
};