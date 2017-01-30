var bcrypt = require('bcryptjs');
module.exports= function(knex) {
	return {

		findAll: function(table) {
			return knex(table).select()
		},



    //get the password
    //apply hashpasssword return the table
    //we want the users table
    //insert the hash, username and email
    //resolve with all the rows
		addUser: function(table, input) {
    
			const formattedData = {
				name: input.userName,
        email: input.email
			}
      return this.hashPassword(input.password)
      .then(function (hash) {
        formattedData.hash = hash
        return knex(table)
        .insert(formattedData)
      })
      .then(function(){
        return knex(table)
        .select()
      })

		},

    hashPassword: function(password) {
      return new Promise(function(resolve, reject){
        bcrypt.hash(password, 10, function(err, hash) {
          if(err){
            reject('error, hash not generated')
          }
          resolve(hash)
        })
      })
    }
	}
}
