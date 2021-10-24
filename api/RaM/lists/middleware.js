const db = require('../../../data/db-config')

const validateUpdateBody = (req, res, next) => {
    if(!req.body.anime_id){
        next({status: 400, message: 'include anime_id key in request'})
    }else if(!req.body.completed){
        next({status: 400, message: 'include completed key in request'})
    }else if(!req.body.rating){
        next({status: 400, message: 'include rating key in request'})
    }else{
        next()
    }
}
const checkListExists = async (req, res, next) => {
    if(!req.params.id){
        next({status: 400, message: 'Please include a list_id as a parameter in your call'})
    }else{
        const listsArray = await db('lists').where({list_id: req.params.id}).first()
        if(!listsArray){
            next({status: 400, message: 'list_id does not exist in the database'})
        }else{
            next()
        }
    }

}
const validatePostBody = (req, res, next) => {
    if(!req.body.anime_id){
        next({status: 400, message: 'include anime_id key in request'})
    }else if(req.body.completed === undefined){
        next({status: 400, message: 'include completed key in request'})
    }else if(!req.body.rating){
        next({status: 400, message: 'include rating key in request'})
    }else if(req.body.rating > 10 || req.body.rating <= 0){
        next({status: 400, message: 'Rating must be within 1-10'})
    }else if(!req.body.user_id){
        next({status: 400, message: 'include user_id key in request'})
    }else{
        next()
    }
}
module.exports = {
    validateUpdateBody,
    validatePostBody,
    checkListExists
}