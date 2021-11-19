/* eslint-disable import/no-cycle */

import card from './components/card';
import appId from './appId';
import modal from './components/modal';

export const getCharactersAndLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const res = await fetch(url);
  const likes = await res.json();

  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);

  card(characters, likes);
};

export const like = async (characterId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: characterId,
    }),
  });
};

export const getPopUpCharacter = async (characterId) => {
  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);

  modal(characters[characterId]);
}
