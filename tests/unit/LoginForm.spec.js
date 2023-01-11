import LoginForm from '@/components/LoginForm.vue'
import { mount } from '@vue/test-utils'

// TEST EMITS

describe('LoginForm', () => {
  it('emits an event with a user data payload', () => {
    const wrapper = mount(LoginForm)
    // 1.Find text input element
    const input = wrapper.find('input[type="text"]')

    // 2.Set value for the text input
    input.setValue('Adam Test')

    // 3.Simulate form submission
    wrapper.trigger('submit')

    // 4.Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)

    // 5. Assert payload is correct
    const expectedPayload = { name: 'Adam Test' }
    expect(formSubmittedCalls[0][0]).toMatchObject(expectedPayload)
  })
})
