const User = require('../auth/auth-model')
const Friend = require('./friends_model')

const validateFriendExists = (req, res, next) => {
    User.findById(req.body.friend_id)
        .then(user => {
            if(user){
                next()
            }else{
                next({
                    status: 400,
                    message: 'Friend does not exist'
                })
            }
        })
        .catch(next)
}
const validateUserExists = (req, res, next) => {
    User.findById(req.params.id)
        .then(user => {
            if(user){
                next()
            }else{
                next({
                    status: 400,
                    message: 'User does not exist'
                })
            }
        })
        .catch(next)
}

const checkFriendship = (req, res, next) => {
    Friend.searchFriendship(req.body)
        .then(friendship => {
            if(!friendship){
                next()
            }else{
                next({
                    status: 400,
                    message: 'Already following this person!'
                })
            }
        })
}

const checkObject = (req, res, next) => {
    if(req.body.user_id){
        if(req.body.friend_id){
            next()
        }else{
            next({
                status: 400,
                message: 'Need to provide a friend_id'
            })
        }
    }else{
        next({
            status: 400,
            message: 'Need to provide a user_id'
        })
    }
}

module.exports = {
    validateFriendExists,
    validateUserExists,
    checkFriendship,
    checkObject
}