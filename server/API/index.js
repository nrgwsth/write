const Router = new require('express').Router()

Router.get('/', (req, res)=>{
  res.send('Hello there')
})
module.exports = Router
