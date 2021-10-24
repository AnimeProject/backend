const router = require('express').Router();
const Friends = require('./friends_model')
const {validateFriendExists, checkFriendship, validateUserExists, checkObject} = require('./middleware')

router.get('/:id', validateUserExists, async (req, res, next) => {
    try{
        const friendsArray = await Friends.getAllFriends(req.params.id)
        res.status(200).json(friendsArray)
    }catch(error){
        next(error)
    }
})
router.post('/', checkObject, validateFriendExists, checkFriendship, async (req, res, next) => {
    try{
        const [newFriend] = await Friends.addFriend(req.body)
        res.status(201).json(newFriend)
    }catch(error){
        next(error)
    }
})

module.exports = router