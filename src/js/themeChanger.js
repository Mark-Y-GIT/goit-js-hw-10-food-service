import refs from './refs.js';

export default function changeTheme() {
  if (refs.themeSwitchToggleRef.checked) {
    refs.bodyRef.classList.remove('light-theme');
    refs.bodyRef.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark-theme');
  } else {
    refs.bodyRef.classList.remove('dark-theme');
    refs.bodyRef.classList.add('light-theme');
    localStorage.setItem('theme', 'light-theme');
    refs.themeSwitchToggleRef.checked = false;
  }
}
