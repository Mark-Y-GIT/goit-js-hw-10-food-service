// import './sass/main.scss';
import mainTemplate from './templates/template.hbs';
import mainMarkup from './menu.json';
import { add } from 'lodash';

const markup = mainTemplate(mainMarkup);

const menuRef = document.querySelector('.js-menu');

menuRef.insertAdjacentHTML('beforeend', markup);

const themeSwitchToggleRef = document.querySelector('.theme-switch__toggle');

const bodyRef = document.querySelector('.js-theme');
console.log(bodyRef);

themeSwitchToggleRef.addEventListener('change', () => {
  bodyRef.classList.toggle('dark-theme');
});
