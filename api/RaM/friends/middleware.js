const User = require('../auth/auth-model')

const validateFriendExists = (req, res, next) => {
    User.findById(req.body.friend_id)
        .then(user => {
            if(user.length !== 0){
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

module.exports = {
    validateFriendExists,
}