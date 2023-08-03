import axios from 'axios';

const postGpt = async (chatId: number, userId: number, message: string) => {
  try {
    const requestData = {
      userId: userId,
      message: message,
    };

    const response = await axios.patch(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt/${chatId}`, requestData);

    const responseData = response.data;
    return responseData

  } catch (error) {
    console.log(error);
  }
};

const fetchGpt = async (chatId: number) => {
  try {
    const response = await axios.get(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt/${chatId}`);
    const chatHistoryData = response.data;
    return chatHistoryData;

  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

const createGpt = async (userId: number) => {
  try {
    const requestData = {
      userId: userId,
    };

    const response = await axios.post(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt`, requestData);

    const responseData = response.data;
    return responseData

  } catch (error) {
    console.log(error);
  }
};

const deleteGpt = async (chatId: number) => {
  try {
    const response = await axios.delete(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt/${chatId}`);
    const responseData = response.data;
    return responseData

  } catch (error) {
    console.log(error);
  }
};

const fetchGptList = async (userId: number) => {
  try {
    const response = await axios.get(`http://${import.meta.env.BACKEND}:${import.meta.env.PORT}/gpt/user/${userId}`);
    const userChatList = response.data;
    return userChatList;

  } catch (error) {
    console.error('Error fetching chat history:', error);
  }
};

export default { postGpt, fetchGpt, createGpt, deleteGpt, fetchGptList};