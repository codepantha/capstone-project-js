/* eslint-disable import/no-cycle */

import card from './components/card';
import appId from './appId';
import modal, { displayComments } from './components/modal';

export const getCharactersAndLikes = async () => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`;
  const res = await fetch(url);
  const likes = await res.json();

  const result = await fetch('https://hp-api.herokuapp.com/api/characters');
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
  const result = await fetch('https://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, 10);
  modal(characters[characterId], characterId);
};

export const getPopUpCharacterComments = async (characterId) => {
  const result = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${characterId}`);
  const data = await result.json();
  return data;
};

export const addNewComment = async (userDetails) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: userDetails.characterId,
      username: userDetails.username,
      comment: userDetails.comment,
    }),
  });
  await displayComments(userDetails.characterId);
};
