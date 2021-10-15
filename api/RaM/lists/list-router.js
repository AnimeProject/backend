const router = require('express').Router()
const List = require('./list-model')

router.get('/:id', async (req, res, next) => {
    try{
        const userList = await List.findById(req.params.id)
        res.status(200).json(userList)
    }catch(error){
        next(error)
    }
})
router.get('/', async (req, res, next) => {
    try{
        const lists = await List.findAll()
        res.status(200).json(lists)
    }catch(error){
        next(error)
    }
})
router.post('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})
router.put('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})
router.delete('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})


module.exports = router