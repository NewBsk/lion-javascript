import { getNode, setStorage, getStorage } from './lib/index.js';

const textField = getNode('#textField');

function handleTextField() {
  const value = this.value;

  setStorage('text', value);
}

function init() {
  getStorage('text').then((res) => {
    textField.value = res;
  });
}

textField.addEventListener('input', handleTextField);
window.addEventListener('DOMContentLoaded', init);
