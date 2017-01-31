module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'DISPLAY_ADD_USER':
			newState.showingAddUser = !state.showingAddUser
			break;
	}
}
