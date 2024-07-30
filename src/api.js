import axios from "axios";
import axiosRetry from "axios-retry";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=30&difficulty=medium&type=multiple";

const api = axios.create();
axiosRetry(api, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export const fetchQuestions = async () => {
  try {
    const response = await api.get(API_URL);
    return response.data.results;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      console.error("Rate limit exceeded. Please wait and try again later.");
    } else {
      console.error("An error occurred while fetching questions:", error);
    }
    throw error;
  }
};
