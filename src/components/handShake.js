import axios from "axios";

const app_id = 'abc234';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const harryAPI = 'http://hp-api.herokuapp.com/api';


const getCharacter = async () => {
  const response = await axios.get(`${harryAPI}/characters/`);
  const data = await response.data;
  return data;
}

const getComments = async () => {
  const response = await axios.get(`${url}/apps/${app_id}/comments/`);
  const data = await response.data;
  console.log(response);
  return data;
}


const postData = async (data) => {
  const response = await axios.post(`${url}/${key}/comments?item_id=${button}`, data);
  return response.json();

}

export { getCharacter, getComments, postData };