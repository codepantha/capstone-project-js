import './style.css';
import nav from './components/nav';

// const pop = () => {
//   const popup = document.createElement('div');
//   popup.id = 'pop';
//   popup.classList.add('show');
// }

// const btnPop = () => {
//   const btn = document.createElement('button');
//   btn.innerHTML = 'COMMENTS';
//   btn.classList.add('btn');

//   btn.addEventListener('click', () => {
//     pop();
//   });
//   document.body.appendChild(btn);
// }

const startApp = () => {
  nav();
  // btnPop();
  // pop();
};

startApp();