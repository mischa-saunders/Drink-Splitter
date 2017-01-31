module.exports = function (state, action){
	const newState = clone(state)

	switch (action.type) {
		case 'UPDATE_USERS':
			const ids = _.map(action.payload, 'id')
			newState.users = _.zipObject(ids, action.payload)
			break;

		case 'UPDATE_USER':
			newState.users[action.payload.id] = action.payload
			break;

		}
	}
