exports.seed = function(knex) {
    return knex('users').del()
      .then(function () {
        return knex('users').insert([
          {username: 'michaelquint', password: '$2a$07$/i12gVOeeHYYvPbFawlCauFEo6zp44TDAFZaT2UYavpKqhUfneYC.'},//password = heyo
          {username: 'michaelsfriend', password: '$2a$07$/i12gVOeeHYYvPbFawlCauFEo6zp44TDAFZaT2UYavpKqhUfneYC.'},//password = heyo
          {username: 'anotherfriend', password: '$2a$07$/i12gVOeeHYYvPbFawlCauFEo6zp44TDAFZaT2UYavpKqhUfneYC.'},//password = heyo
        ]);
      });
  };