const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('DISPLAY_ADD_USER | shows current users onClick of Add another person button', t => {

  const state = {
    showingAddUser: false,
  }
  freeze(state)

  const expectedState1 = {
    showingAddUser: true,
  }

  const action = {
    type: 'DISPLAY_ADD_USER'
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'should show all current users')

  const expectedState2 = {
    showingAddUser: false,
  }

  const newState2 = reducer(newState1, action)

  t.deepEqual(expectedState2, newState2, 'all current users not showing')

  t.end()
})
