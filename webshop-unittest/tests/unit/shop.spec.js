import Shop from "@/views/Shop.vue";
import { shallowMount } from '@vue/test-utils';

let wrapper;

describe('cycle Hook', () => { 
  it(' should call the init method', () => {
    
    const spy = jest.spyOn(Shop.methods, 'init')
    wrapper = shallowMount(Shop, { localVue })
    expect(spy).toBeCalled()
  })
})

test('Shop', () => {
  wrapper = shallowMount(Shop)
  expect(wrapper.find('.error').exists()).toBe(true)
});

/**
 * describe('Shop', () => {
  let wrapper = shallowMount(Shop);
});

 * it('testing fetch from api', async () => {
  
})*/