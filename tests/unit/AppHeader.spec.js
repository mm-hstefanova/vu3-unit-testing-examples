import AppHeader from '@/components/AppHeader.vue'
import { mount } from '@vue/test-utils'

/***
 * 1. Create a test suite (or block of tests) describe(...)
 * 2. Set up your test(s) test(...)
 * 3. Mount the component with vue-test-utils mount(...)
 * 4. Set data, if neccessary setData({...})
 * 5. Assert what the result should be expect(...)
 * **/

describe('AppHeader', () => {
  test('If user is not logged in, do not show logout button', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user is logged in, show logout button', async () => {
    const wrapper = mount(AppHeader)
    // the way we update the components's VARIABLE value to suites our needs
    await wrapper.setData({ loggedIn: true })

    // we update the value of the prop, but we need to wait for the dom updates to happen
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})
