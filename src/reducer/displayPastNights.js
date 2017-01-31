module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'DISPLAY_PAST_NIGHTS':
			newState.showingPastNights = !state.showingPastNights
			break;
	}
}
