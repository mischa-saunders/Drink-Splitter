const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('LOGOUT | logout button should return user to the login component', t => {

  const state = {
    userName: 'Meghan',
  }
  freeze(state)

  const expectedState1 = {
    userName: null,
  }

  const action = {
    type: 'LOGOUT'
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'should set userName to null')
  t.end()
})
