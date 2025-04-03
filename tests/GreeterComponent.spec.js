import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import GreeterComponent from '../src/GreeterComponent.ce.vue';

describe('GreeterComponent', () => {
  it('renders message and logs on click', async () => {
    const message = 'Test Message';
    
    const wrapper = mount(GreeterComponent, {
      props: { message }
    });

    // Tunggu hingga komponen terpasang
    await new Promise(resolve => setTimeout(resolve, 0));

    // Cek render
    expect(wrapper.text()).toContain(message);
    
    // Cek click handler
    const spy = vi.spyOn(console, 'log');
    await wrapper.find('button').trigger('click');
    expect(spy).toHaveBeenCalledWith(message);
  });
});