import './style.css';
import nav from './components/nav';
import {pop, popup} from './components/pop';

const startApp = () => {
  pop();
  popup();
  nav();
};

startApp();