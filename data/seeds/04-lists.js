exports.seed = function(knex) {
    return knex('lists').del()
      .then(function () {
        return knex('lists').insert([
          {user_id: 1, anime_id: 322, completed: 1, rating: 9},
          {user_id: 3, anime_id: 2, completed: 1, rating: 5},
          {user_id: 4, anime_id: 42, completed: 0, rating: 3},
          {user_id: 2, anime_id: 1, completed: 0, rating: 3},
          {user_id: 1, anime_id: 42, completed: 0, rating: 3},
          {user_id: 2, anime_id: 42, completed: 0, rating: 3},
          {user_id: 4, anime_id: 3, completed: 0, rating: 3},
        ]);
      });
  };