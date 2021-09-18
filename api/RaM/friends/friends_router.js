const router = require('express').Router();
const Friends = require('./friends_model')

router.get('/', async (req, res, next) => {
    try{
        const friendsArray = await Friends.getAllFriends(req.params.id)
        res.status(200).json({friendsArray})
    }catch(error){
        next(error)
    }
})

module.exports = router