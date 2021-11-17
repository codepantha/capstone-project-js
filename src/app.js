import './style.css';
import nav from './components/nav';
import footer from './components/footer';
import card from './components/card';

const pageLimit = 10;

const displayCharacterCards = async () => {
  const result = await fetch('http://hp-api.herokuapp.com/api/characters');
  const data = await result.json();
  const characters = await data.slice(0, pageLimit);
  card(characters);
};

const startApp = () => {
  nav();
  displayCharacterCards();
  footer();
};

startApp();