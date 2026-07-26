import api from "./api";

export const sendMessage = async (message) => {
  const response = await api.post("/ai/chat", {
    prompt: message,
  });

  return response.data;
};