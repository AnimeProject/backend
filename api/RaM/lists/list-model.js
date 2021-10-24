const db = require('../../../data/db-config')

// Helper function
function userShaping(array){
    const lists = [];
    const userIds = [];
    array.map(user => {
        const {user_id, ...rest} = user
        if(!userIds.includes(user_id)){
            const finalObj = {
                id: user_id,
                animes: [rest]
            }
            lists.push(finalObj)
            userIds.push(user_id)
        }else{
            const newObj = lists.find((person) => person.id === user_id);
            newObj.animes.push(rest)
        }
    })
    return lists;
}

// Models
async function findById(id){
    const objectArray = await db('lists as l')
        .where('l.user_id', id)
        .join('users as u', 'l.user_id', 'u.user_id')
        .select('u.username', 'l.*')
    const lists = userShaping(objectArray);
    return lists;
}
async function findAll() {
    const objectArray = await db('lists as l')
        .join('users as u', 'l.user_id', 'u.user_id')
        .select('u.username', 'l.*')
    const lists = userShaping(objectArray);
    return lists;
}
function insert(list){
    return db('lists').insert(list, ['list_id'])
}

// This is the one function in this file that requires a LIST_ID and not a USER_ID
function update(id, newData){
    return db('lists').update(newData, ['list_id']).where({ list_id: id })
}

module.exports = {
    findById,
    findAll,
    insert,
    update
}