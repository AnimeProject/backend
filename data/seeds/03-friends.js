exports.seed = function(knex) {
    return knex('friends_list').del()
      .then(function () {
        return knex('friends_list').insert([
          {friend_id: 1, user_id: 2},
          {friend_id: 2, user_id: 1},
          {friend_id: 3, user_id: 2},
          {friend_id: 2, user_id: 3},
        ]);
      });
  };