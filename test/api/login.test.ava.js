const test = require('ava')
const request = require('supertest')
const testKnex = require('knex')(require('../../knexfile').test)
const db = require('../../db')(testKnex)
const app = require('../../app')(db)

// migrate the latest database tables
test.beforeEach(() => {
  console.log('migrating....')
  return testKnex.migrate.latest()
    .then(() => {
      console.log('seeds....')
      return testKnex.seed.run()
    })
    .then(() => {
      return testKnex('users')
        .insert({name: 'Lee Adama', email:'lee@gmail.com',  password: '123'})
    })
})

//rollback to the original state of the database
test.afterEach.always(() => {
  return testKnex.migrate.rollback()
})


//correct username + password = success
//correct username + wrong password = error
// wrong username = error
test.cb.only('Login | correct email + password = success ',  t => {
    t.plan(1);
const expected = {email:'lee@gmail.com',  password: '123'}
    request(app)
      .post('/api/v1/users/login')
      .send({email:'lee@gmail.com',  password: '123'})
      .end(function(err, res){
         console.log('res.body',res.body);
         t.is(res.body.email, 'lee@gmail.com')
         t.truthy(res.body.id )
         t.end()
     })
    // t.is(res.body.email, 'lee@gmail.com')

});

test('Login | correct email + wrong password = error ',  t => {
    t.plan(1);


});

test('Login |email does not exist = error',  t => {
    t.plan(1);


});
