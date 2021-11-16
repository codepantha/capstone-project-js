import './style.css';
import Logo from './assets/images/hp-logo.png';

const nav = () => {
  const header = document.getElementById('header');
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="#" class="logo">
      <img src='${Logo}' alt="Logo Harry">
    </a>
    <ul>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
    </ul>
  `;
  header.appendChild(nav);
};

const startApp = () => {
  nav();
}

startApp();