module.exports = function (knex) {
	return {
		findAll: function (table) {
		return knex(table).select()
		},

		addUser: function (table, input) {
			const formattedData = {
				name: input.userName,
				password: input.password,
				email: input.email
			}
			return knex(table)
			.insert(formattedData)
			.then(function(ids) {
				console.log('id', ids);
				return knex(table)
				.select('name', 'id')
				.where ({id: ids[0]})
			})
		},
		findUserByEmail: function (email) {
			return knex('users').select()
				.where('email', email)
				.then(users => users[0])
		},

		findNightsByUser: function(userId) {
			return knex('users')
					.join('users_nights', 'users.id', '=', 'users_nights.user_id')
					.join('nights', 'users_nights.nights_id', '=', 'nights.id')
					.where({user_id: userId})
					.select('*')
		},

		findUsersByNights: function(nightId) {
			return knex('nights')
				.join('users_nights', 'nights.id', '=', 'users_nights.nights_id')
		}
	}
}
