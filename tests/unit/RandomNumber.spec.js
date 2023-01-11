// 1. min max / output
// 2. if output is between min / max
// 3. when we click the button if there is an update?
// 4.

import RandomNumber from '@/components/RandomNumber.vue'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
  test('By default, randomNumber data should be 0', () => {
    const wrapper = mount(RandomNumber)
    // the markup from the component:  <span>{{ randomNumber }}</span>
    // we get the cmp's template with .html() and we check if we have this DOM element
    expect(wrapper.html()).toContain('<span>0</span>')
  })

  test('If the button is clicked, random number should be between 1 and 10', async () => {
    const wrapper = mount(RandomNumber)
    // simulate the click event
    await wrapper.find('button').trigger('click')

    // get the new value from the <span>{{ randomNumber }}</span>
    const randomNumber = parseInt(wrapper.find('span').text())

    expect(randomNumber).toBeGreaterThanOrEqual(1)
    expect(randomNumber).toBeLessThanOrEqual(10)
  })

  test('If the button is clicked, random number should be between 200 and 300', async () => {
    // how we change the PROPS value
    const wrapper = mount(RandomNumber, {
      props: {
        min: 200,
        max: 300
      }
    })

    // simulate the click event
    await wrapper.find('button').trigger('click')

    // get the new value from the <span>{{ randomNumber }}</span>
    const randomNumber = parseInt(wrapper.find('span').text())

    expect(randomNumber).toBeGreaterThanOrEqual(200)
    expect(randomNumber).toBeLessThanOrEqual(300)
  })
})
