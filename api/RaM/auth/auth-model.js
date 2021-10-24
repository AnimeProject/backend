const db = require('../../../data/db-config')

function getUser(user) { return db('users').where(user).first().select('user_id', 'username') }

function findBy(filter) {
    return db("users").where(filter);
}

function findById(id){
    return db('users').where({user_id: id}).select('user_id', 'username').first()
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