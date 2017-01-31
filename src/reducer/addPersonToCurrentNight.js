module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'ADDS_PERSON_TO_CURRENT_NIGHT':
			if(newState.currentNight.users.hasOwnProperty(action.payload)){
				delete newState.currentNight.users[action.payload]
			} else {
				newState.currentNight.users[action.payload] = newState.users[action.payload]
				newState.currentNight.users[action.payload].paying = false
			}

			break;
	}
}
