const router = require('express').Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./auth-model')
const {TOKEN_SECRET} = require('../../secret/secret')
const {validateBody, checkList} = require('./middleware')
const restricted = require('./restricted')

// Generating our token
function generateToken(user) {
  const payload = {
    user_id: user.user_id,
    username: user.username,
  };
  const options = {
    expiresIn: "7d",
  };
  return jwt.sign(payload, TOKEN_SECRET, options);
}

router.get('/', validateBody, restricted, async (req, res, next) => {
    try{
        const user = await User.getUser(req.body)
        if(!user){
          next({status: 400, message: 'User does not exist'})
        }else{
          res.status(200).json(user)
        }
    }catch(error){
        next(error)
    }
})
router.get('/:id', checkList, restricted, async (req, res, next) => {
    try{
        if(req.newUser){
          const newAccount = await User.findNewUser(req.params.id)
          res.status(200).json(newAccount)
        }else{
          const user = await User.findById(req.params.id)
          res.status(200).json(user)
        }
    }catch(error){
        next(error)
    }
})

router.post('/register', async (req, res, next) => {
    try{
      let {username, password} = req.body;
      const otherAccount = await User.findBy({username})
      const hash = bcrypt.hashSync(password, 7);
      req.body.password = hash;

      if(otherAccount.length === 0){
        User.add(req.body)
          .then(newUser => {
            res.status(201).json(newUser)
          })
          .catch(next)
      }else{
        res.status(500).json({message: 'username taken'})
      }

    }catch(error){
      next(error)
    }
});

router.post('/login', (req, res, next) => {
    let { username, password } = req.body;

    User.findBy({ username })
      .then(([user]) => {
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);
            res.status(200).json({
              id: user.user_id,
              message: `Welcome ${user.username}!`,
              token, 
            });
          } else {
            next({status: 401, message: 'invalid credentials'})
          }
        })
        .catch(next)
});

module.exports = router;