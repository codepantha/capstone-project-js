const pop = () => {
  const body = document.body;
  const container = document.createElement('div');
  const modal = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');
  const button = document.createElement('button');
  const btn = document.createElement('button');


  container.classList.add('modal-container');
  container.id = 'modal-container';

  modal.classList.add('modal');
  modal.id = 'modal';

  h1.classList.add('modal-title');
  h1.innerText = 'Comments Section';

  p.innerText = 'lorem ipsum dolor sit amet, consectetur adipiscing';

  button.innerText = 'Close';
  button.id = 'close-btn';
  button.classList.add('modal-close');
  button.classList.add('btn');

  btn.innerHTML = 'COMMENTS';
  btn.id = 'open';
  btn.classList.add('btn');



  document.body.appendChild(btn);
  body.appendChild(container);
  container.appendChild(modal);
  modal.appendChild(h1);
  modal.appendChild(p);
  modal.appendChild(button);

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