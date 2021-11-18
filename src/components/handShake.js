import axios from "axios";

const app_id = '1gPBmu94RP09f4VoDws0';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const harryAPI = 'http://hp-api.herokuapp.com/api';



const getCharacter = async () => {
  const response = await axios.get(`${harryAPI}/characters/`);
  const data = await response.data;
  return data;
}

const getComments = async (id) => {
  const response = await axios.get(`${url}/apps/${app_id}/comments?item_id=0`);
  const comments = await response.data;


  return comments;
}


const postData = async (data) => {
  const response = await axios.post(`${url}/${key}/comments?item_id=${id}`, data);
  return response.json();
}

export { getCharacter, getComments, postData };