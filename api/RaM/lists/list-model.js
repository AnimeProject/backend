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

// Require list_id not user_id
function update(id, newData){
    return db('lists').update(newData, ['list_id']).where({ list_id: id })
}

function del(id){
    return db('lists').where({list_id: id}).del()
}


module.exports = {
    findById,
    findAll,
    insert,
    update,
    del
}