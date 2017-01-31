module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'UPDATE_USER':
			newState.users[action.payload.id] = action.payload
			break;
	}
}
