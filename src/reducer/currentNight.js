module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'USER_PAYING':
			newState.currentNight.personPaying = newState.currentNight.personPaying === action.payload
				? null
				: action.payload
			Object.keys(newState.currentNight.users).forEach(userKey => {
				newState.currentNight.users[userKey].paying = newState.currentNight.users[userKey].id === newState.currentNight.personPaying
			})
		break;
		
		case 'ADDS_PERSON_TO_CURRENT_NIGHT':
			if(newState.currentNight.users.hasOwnProperty(action.payload)){
				delete newState.currentNight.users[action.payload]
			} else {
				newState.currentNight.users[action.payload] = newState.users[action.payload]
				newState.currentNight.users[action.payload].paying = false
		break;
	}
}
