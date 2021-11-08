const List = require('../lists/list-model')

const validateBody = (req, res, next) => {
    if(!req.body.username){
        next({status: 400, message: 'Need to provide a username to lookup'})
    }else{
        next()
    }
}

const checkList = async (req, res, next) => {
    try{
       const list = await List.findById(req.params.id)
       if(list.length === 0){
           req.newUser = 1;
           next()
       }else{
           next()
       }
    }catch(error){
        next(error)
    }
}

module.exports = {
    validateBody,
    checkList
}