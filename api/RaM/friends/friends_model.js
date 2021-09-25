const db = require('../../../data/db-config')

function getAllFriends(user_id) {
    return db("friends_list AS f")
        .join(
            'users AS u',
            'f.friend_id',
            'u.user_id'
        )
        .where('f.user_id', user_id)
        .select('friend_id', 'username')
  }
function addFriend(userObj) {
    return db('friends_list').insert(userObj, ['friends_list_id'])
}

function searchFriendship(friendship){
    return db('friends_list').where(friendship).first()
}

module.exports = {
    getAllFriends,
    addFriend,
    searchFriendship
}