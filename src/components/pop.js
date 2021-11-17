import defaultIMG from '../assets/images/hp-side-img3.png';
import {getCharacter} from './handShake';

const pop = () => {
  const body = document.body;
  const container = document.createElement('div');
  const modal = document.createElement('div');
  const infoContainer = document.createElement('div');
  const descriptionContainer = document.createElement('div');
  const commentsContainer = document.createElement('div');
  const formContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');
  const p3 = document.createElement('p');
  const button = document.createElement('button');
  const btn = document.createElement('button');
  const img = document.createElement('img');
  const headComments = document.createElement('h2');
  const comments = document.createElement('p');
  const response = getCharacter();
  
  
  response
  .then(res => {
      h1.innerHTML = res[0].name;
      h1.id = 'modal-title';
      
      p1.innerHTML= `<strong>Actor: </strong> <span>${res[0].actor}</span>`;
      p1.classList.add = 'modal-actor';
      p1.id = 'modal-content';

      p2.innerHTML= `<strong>House: </strong> <span>${res[0].house}</span>`;

      p2.id = 'modal-content';

      p3.innerHTML= `<strong>Specie: </strong> <span>${res[0].species}</span>`;
      p3.id = 'modal-content';

      img.src = res[0].image;
      img.classList.add = 'modal-img';
      img.id = 'modal-img';
    })
    .catch(err => {
      console.log(err);
    });
  
  container.classList.add('modal-container');
  container.id = 'modal-container';

  modal.classList.add('modal');
  modal.id = 'modal';

  p1.classList.add('modal-content');

  img.src = defaultIMG;
  img.classList.add('modal-img');
  img.alt = 'Harry Potter Side Image';

  descriptionContainer.classList.add('description-container');

  commentsContainer.classList.add('comments-container');
  commentsContainer.id = 'comments-container';

  headComments.innerText = 'Comments:';
  headComments.classList.add('modal-comments');
  headComments.id = 'modal-comments';
  headComments.style.fontWeight = 'bold';

  comments.innerText = 'This content should display data from COMMENTS API';
  comments.classList.add('comments');
  comments.id = 'comments';

  button.innerText = 'Close';
  button.id = 'close-btn';
  button.classList.add('modal-close');
  button.classList.add('btnClose');

  btn.innerHTML = 'COMMENTS';
  btn.id = 'open';
  btn.classList.add('btn');

  document.body.appendChild(btn);
  body.appendChild(container);
  container.appendChild(modal);
  // modal.appendChild(close);
  modal.appendChild(infoContainer);
  infoContainer.appendChild(h1);
  infoContainer.appendChild(img);
  infoContainer.appendChild(descriptionContainer);
  descriptionContainer.appendChild(p1);
  descriptionContainer.appendChild(p2);
  descriptionContainer.appendChild(p3);
  modal.appendChild(commentsContainer);
  modal.appendChild(formContainer);
  
  modal.appendChild(button);

  commentsContainer.appendChild(headComments);
  commentsContainer.appendChild(comments);

  formContainer.innerHTML = `
    <form id="form" action="">
      <input type="text" id="name" placeholder="Name" required>
      <textarea id="review" name="review" placeholder="Add your comment..." rows="5" cols="50" required></textarea>
      <button type="submit" id="submit">Comment</button> 
    </form>
  `;
  formContainer.classList.add('form-container');
}

const popup = () => {
  const open = document.getElementById('open');
  const modalContainer = document.getElementById('modal-container');
  const closed = document.createElement('div');
  const close = document.getElementById('close-btn');

  open.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });

  close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });

  closed.classList.add('close-x');
  closed.textContent = 'X';
  closed.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
  
  modalContainer.appendChild(closed);
  
}

export { pop, popup };