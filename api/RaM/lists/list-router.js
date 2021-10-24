const router = require('express').Router()
const List = require('./list-model')
const {validatePostBody, validateUpdateBody, checkListExists} = require('./middleware')

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
router.post('/', validatePostBody, async (req, res, next) => {
    try{
        const listId = await List.insert(req.body)
        res.status(201).json(listId)
    }catch(error){
        next(error)
    }
})
router.put('/:id', validateUpdateBody, checkListExists, async (req, res, next) => {
    try{
        const listId = await List.update(req.params.id, req.body)
        res.status(200).json(listId)
    }catch(error){
        next(error)
    }
})


module.exports = router