import refs from './refs.js';
import { Theme } from './thems.js';

export default function changeTheme() {
  if (refs.themeSwitchToggleRef.checked) {
    refs.bodyRef.classList.remove(Theme.LIGHT);
    refs.bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('theme', 'dark-theme');
  } else {
    refs.bodyRef.classList.remove(Theme.DARK);
    refs.bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', 'light-theme');
    refs.themeSwitchToggleRef.checked = false;
  }
}
