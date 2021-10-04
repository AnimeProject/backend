const db = require('../../../data/db-config')

function findById(id){
    return db('lists').where({user_id: id}).select('anime_id', 'completed', 'rating').first()
}

module.exports = {
    findById
}