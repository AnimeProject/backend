const db = require('../../../data/db-config')

function findById(id){
    return db('lists').where({user_id: id}).select('anime_id', 'completed', 'rating')
}
async function findAll() {
    return db('lists as l')
        .join('users as u', 'l.user_id', 'u.user_id')
        .select('u.username', 'l.*')
    
}
function insert(list){
    return db('lists').insert(list, ['list_id'])
}
function update(user_id, newData){
    return db('lists').update(newData, ['*']).where({ user_id })
}

module.exports = {
    findById,
    findAll,
    insert,
    update
}