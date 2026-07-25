import api from "./api";

export const generateRoadmap = async (data) => {
  const response = await api.post(
    "/api/roadmap/generate",
    data
  );

  return response.data;
};