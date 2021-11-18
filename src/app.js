import './style.css';
import nav from './components/nav';
import footer from './components/footer';
import getCharactersAndLikes from './apiCalls';

const displayCharacterCards = async () => {
  getCharactersAndLikes();
};

const startApp = () => {
  nav();
  displayCharacterCards();
  footer();
};

startApp();