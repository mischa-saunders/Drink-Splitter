const test = require('tape')
const freeze = require('deep-freeze')
const reducer = require('../../src/reducer')

test('DISPLAY_REGISTRATION_FORM | registration form appears onClick of Register button', t => {

  const state = {
    showingRegisterForm: false,
  }
  freeze(state)

  const expectedState1 = {
    showingRegisterForm: false,
  }

  const action = {
    type: 'DISPLAY_REGISTRATION_FORM'
  }

  const newState1 = reducer(state, action)

  t.deepEqual(expectedState1, newState1, 'registration form shown')
  t.end()
})
