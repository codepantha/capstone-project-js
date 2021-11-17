import defaultIMG from '../assets/images/hp-side-img3.png';

const pop = () => {
  const body = document.body;
  const container = document.createElement('div');
  const modal = document.createElement('div');
  const commentsContainer = document.createElement('div');
  const formContainer = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');
  const btn = document.createElement('button');
  const img = document.createElement('img');
  const headComments = document.createElement('h2');
  const comments = document.createElement('p');

  container.classList.add('modal-container');
  container.id = 'modal-container';

  modal.classList.add('modal');
  modal.id = 'modal';

  h1.classList.add('modal-title');
  h1.innerText = 'Title from API';

  p.innerText = 'This content should display data from Harry Potter API';
  p.classList.add('modal-content');

  img.src = defaultIMG;
  img.classList.add('modal-img');
  img.alt = 'Harry Potter Side Image';

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
  modal.appendChild(h1);
  modal.appendChild(img);
  modal.appendChild(p);
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
  const close = document.getElementById('close-btn');

  open.addEventListener('click', () => {
    modalContainer.classList.add('show');
  });

  close.addEventListener('click', () => {
    modalContainer.classList.remove('show');
  });
}

export {pop, popup};