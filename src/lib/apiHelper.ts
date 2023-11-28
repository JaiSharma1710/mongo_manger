import axios from 'axios';

export const getData = async (url: string) => {
  const data = await axios.get(url);
  return data;
};

export const postData = async (url: string, payload: any) => {
  const response = await axios.post(url, payload);
  return response;
};
