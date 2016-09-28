import expect from 'expect'
import * as actions from '../app/redux-stuff/actions/Home'


describe('actions', () => {
  it('should create an action to increment', () => {
    const value = 1
    const expectedAction = {
      type: 'INCREMENT',
      value
    }
    expect(actions.increment())
  })
})
