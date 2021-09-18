const db = require('../../../data/db-config')

async function getAllFriends(user_id) {
    const list = await db("friends_list AS f")
        .join(
            'users AS u',
            'f.friend_id',
            'u.user_id'
        )
        .where('f.user_id',user_id)
    return {
        list_id: list[0].friends_list_id,
        friends: list.map(friend => {
            return ({
                friend_id: friend.friend_id,
                friend_name: friend.username
            })
        })
    }
  }
module.exports = {
    getAllFriends,
}