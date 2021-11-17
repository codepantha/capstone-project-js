import axios from "axios";

const key = 'jOmvR28ksoZ7GUF5P2Cy';
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';
const harryAPI = 'http://hp-api.herokuapp.com/api';


const getCharacter = async () => {
  const response = await axios.get(`${harryAPI}/characters/`);
  const data = await response.data;
  return data;
}

const getData = async (id) => {
  const response = await axios.get(`${url}/apps/${key}/comments/`);
  return response.json();
}


const postData = async (data) => {
  const response = await axios.post(`${url}/${key}/comments?item_id=${button}`, data);
  return response.json();

}

export { getCharacter, getData, postData };