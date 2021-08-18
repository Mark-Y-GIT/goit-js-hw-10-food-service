import mainTemplate from './templates/template.hbs';

import mainMarkup from './menu.json';

import refs from './js/refs.js';

import changeTheme from './js/themeChanger.js';

import toggleValue from './js/toggleTest.js';

toggleValue();

const markup = mainTemplate(mainMarkup);

refs.menuRef.insertAdjacentHTML('beforeend', markup);

refs.themeSwitchToggleRef.addEventListener('change', changeTheme);
