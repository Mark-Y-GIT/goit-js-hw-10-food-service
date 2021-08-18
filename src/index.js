// import './sass/main.scss';
import mainTemplate from './templates/template.hbs';
import mainMarkup from './menu.json';

const markup = mainTemplate(mainMarkup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);
