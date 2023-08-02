import axios from 'axios';

const postGpt = async (chatId: number, userId: number, message: string) => {
  try {
    const requestData = {
      userId: userId,
      message: message,
    };

    const response = await axios.post(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt/${chatId}`, requestData);

    const responseData = response.data;
    return responseData

  } catch (error) {
    console.log(error);
  }
};

const fetchGpt = async (chatId: number) => {
  try {
    const response = await axios.get(`http://${import.meta.process.env.BACKEND}:${import.meta.env.PORT}/gpt/${chatId}`);
    const chatHistoryData = response.data;
    return chatHistoryData;

  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

export { postGpt, fetchGpt };