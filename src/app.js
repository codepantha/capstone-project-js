import './style.css';
import nav from './components/nav';
import pop from './components/pop';

const btnPop = () => {
  const btn = document.createElement('button');
  btn.innerHTML = 'COMMENTS';
  btn.id = 'open';
  btn.classList.add('btn');

  btn.addEventListener('click', () => {
    pop();
  });
  document.body.appendChild(btn);
}

const startApp = () => {
  pop();
  nav();
  btnPop();
};

startApp();