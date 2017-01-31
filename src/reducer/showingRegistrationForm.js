module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'DISPLAY_REGISTER_FORM':
			newState.showingRegisterForm = true
			break;
	}
}
