import refs from './refs.js';

const localStorageTheme = localStorage.getItem('theme');

export default function toggleValue() {
  if (localStorageTheme) {
    refs.bodyRef.classList.add(localStorageTheme);

    if (localStorageTheme === 'dark-theme') {
      refs.themeSwitchToggleRef.checked = true;
    } else {
      refs.themeSwitchToggleRef.checked = false;
    }
  }
}
