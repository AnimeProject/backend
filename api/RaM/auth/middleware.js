const validateBody = (req, res, next) => {
    if(!req.body.username){
        next({status: 400, message: 'Need to provide a username to lookup'})
    }else{
        next()
    }
}

module.exports = {
    validateBody
}