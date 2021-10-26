exports.seed = function(knex) {
    return knex('lists').del()
      .then(function () {
        return knex('lists').insert([
          {user_id: 1, anime_id: 28851, completed: 1, rating: 10},
          {user_id: 3, anime_id: 1, completed: 1, rating: 5},
          {user_id: 4, anime_id: 5114, completed: 0, rating: 3},
          {user_id: 2, anime_id: 1, completed: 0, rating: 3},
          {user_id: 1, anime_id: 5114, completed: 0, rating: 3},
          {user_id: 2, anime_id: 5114, completed: 0, rating: 3},
          {user_id: 4, anime_id: 19, completed: 0, rating: 3},
        ]);
      });
  };