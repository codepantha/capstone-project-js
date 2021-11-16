import Logo from '../assets/images/hp-logo.png';

const nav = () => {
  const header = document.getElementById('header');
  const nav = document.createElement('nav');
  nav.innerHTML = `
    <a href="#" class="logo">
      <img class="img" src="${Logo}" alt="Logo Harry">
    </a>
    <ul>
      <li>
        <a class="link" href="#">About</a>
      </li>
      <li>
        <a class="link" href="#">Home</a>
      </li>
    </ul>
  `;
  header.appendChild(nav);
};

export default nav;