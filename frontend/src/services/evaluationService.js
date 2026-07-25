import api from "./api";

export const evaluateAnswer = async (payload) => {
    const response = await api.post("/evaluation/evaluate", payload);
    return response.data;
};