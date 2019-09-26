const express = require('express');
// const cors = require('cors');
const router = express.Router();
const mongo = require('../supDB/posts')


router.post('/default', (req, res) => {
    mongo.creatFirstPost((result) => {
      res.json(result);
    })
  });

router.get('/getAll', (req, res) => {
    mongo.getAll( result => {
      console.log('hello from server')
      // console.log('result', result)
        res.json(result)
    })
});

router.get('/posts', (req, res) => {
  mongo.getTasks((result) => {
      res.json(result);
  })
})


router.get('/sortBy/:name', (req, res) => {
  let name = req.params
    mongo.getSorted( result => {
      console.log('hello from server')
      // console.log('result', result)
        res.json(result)
    }, name)
});

module.exports = router;