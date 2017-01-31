module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case "LOGOUT":
			newState.userName = null
			break;

		case "LOGIN":
			newState.userName = action.payload
			break;
	}
}
