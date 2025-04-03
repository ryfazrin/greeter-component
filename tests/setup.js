import { config } from '@vue/test-utils';

config.global.config = {
  isCustomElement: (tag) => tag === 'greeter-component'
};