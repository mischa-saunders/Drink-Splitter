module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'ADDS_PERSON_TO_NEW_GROUP':
      newState.users[action.payload].going = !newState.users[action.payload].going
			break;
	}
}
