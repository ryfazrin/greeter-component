import { defineCustomElement } from 'vue';
import GreeterComponent from './GreeterComponent.ce.vue';

const GreeterElement = defineCustomElement(GreeterComponent);
customElements.define('greeter-component', GreeterElement);

window.Greater = {
  init: (selector, options) => {
    const container = document.querySelector(selector);
    if (container) {
      const greeter = document.createElement('greeter-component');
      greeter.setAttribute('message', options.message);
      container.appendChild(greeter);
    }
  }
};