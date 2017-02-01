
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert(
          {id: 1, name: 'adam',
          email: 'adam@adam.com',
          password: '$2a$10$iRe528Fyi2Ncpz9PfjoXgeQDZOyYsl26A5b2q7EvppwgfVG/fJExG',
          isAdmin:true,}),
        knex('users').insert(
          {id: 2, name: 'becki',
          email: 'becki@becki.com',
          password: '$2a$10$U1M.eZ1sggIMj.617lFjQ.81gAjtQ3Xu8KnsvN2dqyBzJEdc5VQS.',
          isAdmin:true,}),
        knex('users').insert(
          {id: 3, name: 'cassie',
          email: 'cassie@cassie.com',
          password: '$2a$10$BTWGysNBx4HHPF1nvk4UiumniAhFjjCCO1inXULFGnabB9Yzk0PmO',
          isAdmin:false,}),
        knex('users').insert(
          {id: 4,
          name: 'delta',
          email: 'delta@delta.com',
          password: '$2a$10$axZ/TWJdzqf6r8sUNfbWvO9NJrKjp7UU3IwDz9wvzLMCoc/BEqDhO',
          isAdmin:false,}),
        knex('users').insert(
          {id: 5, name: 'emily',
          email: 'emily@emily.com',
          password: '$2a$10$FGSQ3Jzs/4gxMAHG0RnLb.Z5ruRM.T6Vu3tsYZC8FCLR2L1Tskbb6',
          isAdmin:false,}),
        knex('users').insert(
          {id: 6, name: 'fargo',
          email: 'fargo@fargo.com',
          password: '$2a$10$IQ9K2/LsQ7uwr1Btr3a6jex0tQ5pez6o5AwrL6.bVL26z9PW.gxI2',
          isAdmin:false,}),
        knex('users').insert(
          {id: 7, name: 'gary',
          email: 'gary@gary.com',
          password: '$2a$10$xptiyiL9Tstyp942FdWda.drRwSLvni1iLpSF67nDyrq1RuRn1AFO',
          isAdmin:false,}),
        knex('users').insert(
          {id: 8, name: 'harry',
          email: 'harry@harry.com',
          password: '$2a$10$rrlGrvCIciGQJg/PUgu9muEJ7km9.9kVe/8zYLNhBVMr/Gj5LtK7G',
          isAdmin:false,}),
      ]);
    });
};
