import axios from "axios";

const key = 'abc234';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const getData = async () => {
  const response = await axios.get(`${url}/apps/${key}/comments/`);
  return response.data;
}


const postData = async (data) => {
  const response = await axios.post(`${url}/${key}`, data);
  return response.data;
}

export { getData, postData };