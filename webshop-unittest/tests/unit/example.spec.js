import Shop from "@/views/Shop.vue";
import { shallowMount } from '@vue/test-utils';

/*import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
}) */

describe('cycle Hook', () => {
  it(' should call the init method', () => {
    const spy = jest.spyOn(Shop.methods, 'init')
    wrapper = shallowMount(Shop, { localVue })
    expect(spy).toBeCalled()
  })
})