  
const db = require('../../../data/db-config')

function getAllUsers() { return db('users').select('username', 'user_id') }

function findBy(filter) {
    return db("users").where(filter);
  }

function findById(id){
    return db('users').where({user_id: id}).select('user_id', 'username')
}

async function add(user) {
  const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password'])
  return newUserObject 
}

module.exports = {
    findBy,
    findById,
    getAllUsers,
    add
}