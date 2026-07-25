import api from "./api";

export const sendMessage = async (message) => {
  const response = await api.post("/api/assistant/chat", {
    message,
  });

  return response.data;
};