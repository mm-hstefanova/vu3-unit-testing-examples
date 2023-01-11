import MessageContainer from '@/components/MessageContainer'
import { mount } from '@vue/test-utils'

/***
 * MessageDisplay has an axios module, but we don't want to trigger it
 *
 * How do we test parent without triggering child's axios request?
 * Mocking components - stubbing - Child component has module dependancies that we don't want to test
 * Stub - a placeholder, when the child cmp has a lot of baggage
 *
 * shallowMount is another approach, but it's not supported in other libraries such as - Vue Testing Library
 * **/

describe('MessageContainer', () => {
  it('Wraps MessageDisplay component', () => {
    // after the mount of the parent, we pass the second argument - the mount of the child
    const wrapper = mount(MessageContainer, {
      global: {
        stubs: {
          MessageDisplay: {
            // hardcoded template
            template: '<p data-testid="message">delectus aut autem</p>'
          }
        }
      }
    })

    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual('delectus aut autem')
  })
})
