import defaultIMG from '../assets/images/hp-side-img3.png';
import { getCharacter, getComments, postData } from './handShake';

const pop = () => {
  const body = document.body;
  const container = document.createElement('div');
  const modal = document.createElement('div');
  const formContainer = document.createElement('div');
  const button = document.createElement('button');

  // const post = postData();
  // const form = document.getElementById('form-container');
  // const username = document.createElement('input');
  // const comentario = document.createElement('input');
  // const btnPost = document.createElement('button');

  container.classList.add('modal-container');
  container.id = 'modal-container';
  modal.classList.add('modal');
  modal.id = 'modal';
  button.innerText = 'Close';
  button.id = 'close-btn';
  button.classList.add('modal-close');
  button.classList.add('btnClose');
  body.appendChild(container);
  container.appendChild(modal);
  modal.appendChild(button);

  formContainer.innerHTML = `
  <form id="form" action="">
  <input type="text" id="name" placeholder="Name" required>
  <textarea id="review" name="review" placeholder="Add your comment..." rows="5" cols="50" required></textarea>
  <button type="button" id="submit-comment">Comment</button>
  </form>
  `;
  modal.appendChild(formContainer);

  const btnSubmit = document.getElementById('submit-comment');
  btnSubmit.onclick = submitComment;

  formContainer.classList.add('form-container');
}

const submitComment = () => {
  // const id = document.getElementById('modal-title').value;
  const username = document.getElementById('name').value;
  const comment = document.getElementById('review').value;
  const myComment = {
    "item_id": "Harry",
    "username": username,
    "comment": comment
  };

  const response = postData(myComment);
  response.then((resp) => {
    console.log(resp);
  });
};

export default pop;