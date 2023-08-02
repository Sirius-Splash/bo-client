import axios from 'axios';
require('dotenv').config()

const postGpt = async (chatId: number, userId: number, message: string) => {
  try {
    const requestData = {
      userId: userId,
      message: message,
    };

    const response = await axios.post(`${process.env.BACKEND}gpt/${chatId}`, requestData);

    const responseData = response.data;
    return responseData

  } catch (error) {
    console.log(error);
  }
};

const fetchGpt = async (chatId: number) => {
  try {
    const response = await axios.get(`${process.env.BACKEND}:${process.env.PORT}/gpt/${chatId}`);
    const chatHistoryData = response.data;
    return chatHistoryData;

  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

export { postGpt, fetchGpt };