import displayHP from './displayHP';
import displayComments from './displayComments';


const btnPop = () => {
  const btn = document.createElement('button');
  
  btn.innerHTML = 'COMMENTS';
  btn.id = 'open';
  btn.classList.add('btn');

  document.body.appendChild(btn);

  const open = document.getElementById('open');
  const modalContainer = document.getElementById('modal-container');
  const closed = document.createElement('div');
  const close = document.getElementById('close-btn');


  btn.addEventListener('click', () => {
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
};

export default btnPop;