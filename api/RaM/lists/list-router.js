const router = require('express').Router()
const List = require('./list-model')

router.get('/:id', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})
router.get('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})
router.post('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})
router.put('/', async (req, res, next) => {
    res.status(200).json({message: 'heyo'})
})

module.exports = router