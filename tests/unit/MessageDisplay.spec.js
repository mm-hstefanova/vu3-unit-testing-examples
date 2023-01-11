import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'
import { getMessage } from '@/services/axios'
import flushPromises from 'flush-promises'

// API CALLS - TESTS
// mocking modules
// jest mock version of the getMessage module
jest.mock('@/services/axios')

beforeEach(() => {
  jest.clearAllMocks()
})

describe('MessageDisplay', () => {
  it('Calls getMessage once and displays message', async () => {
    const mockMessage = {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false
    }

    getMessage.mockResolvedValueOnce(mockMessage)
    // the order of declarations is important here
    const wrapper = mount(MessageDisplay)

    //we wait for the promises to resolve with flushPromises
    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)

    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(mockMessage.title)
  })

  it('Displays an error when getMessage call fails', async () => {
    const mockError = 'Oops! Something went wrong.'

    getMessage.mockRejectedValueOnce(mockError)

    // mock the failed API call
    const wrapper = mount(MessageDisplay)
    await flushPromises()
    expect(getMessage).toHaveBeenCalledTimes(1)
    const displayedError = wrapper.find('[data-testid="message-error"]').text()
    expect(displayedError).toEqual(mockError)
  })
})
