import card from './components/card';
import appId from './appId';

const getCharactersAndLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const res = await fetch(url);
  const likes = await res.json();

  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);

  card(characters, likes);
};

export default getCharactersAndLikes;
