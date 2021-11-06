const db = require('../../../data/db-config')

function getUser(user) { return db('users').where(user).first().select('user_id', 'username') }

function findBy(filter) {
    return db("users").where(filter);
}

async function findById(id){
    const userArray = await db('users as u').where('u.user_id', id)
        .join('lists as l', 'l.user_id', 'u.user_id')
        .join('friends_list as f', 'f.user_id', 'u.user_id')
        .select('u.user_id', 'u.username', 'f.friend_id', 'l.*')
    const friends = []
    const list_ids = []
    const animes = []
    for(const user of userArray) {
        const {friend_id, list_id, anime_id, completed, rating} = user
        if(!friends.includes({friend_id: friend_id})){
            const [newFriend] = await getUser({user_id: friend_id})
            friends.push(newFriend);
        }
        if(!list_ids.includes(list_id)){
            list_ids.push(list_id);
            animes.push({
                list_id: list_id,
                anime_id: anime_id,
                completed: completed,
                rating: rating,
            })
        }
    }
    return {
        user_id: userArray[0].user_id,
        username: userArray[0].username,
        friends: friends,
        animes: animes
    }
}

async function add(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username'])
  return newUserObject 
}

module.exports = {
    findBy,
    findById,
    getUser,
    add
}