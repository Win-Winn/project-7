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

router.post('/newPost', (req, res) => {
  console.log('hello from server')

  const newPost = req.body;
  console.log('newPost', newPost)
  
  mongo.creatNewPost(newPost, (result) => {
    res.json(result);
  })

});

router.get('/getHistory/:user', (req, res) => {
  let updateUserName = req.params
  mongo.getHistory(updateUserName, result => {
    console.log('hello from server history')
    // console.log('result', result)
      res.json(result)
  })
});

router.get('/posts', (req, res) => {
  mongo.getTasks((result) => {
  console.log('hello from serverrrr')
      res.json(result);
  })
})

router.put('/booking/:id/:serviceProvider', (req, res) => {
  let id = req.params.id
  let serviceProvider = req.params.serviceProvider
  console.log('hello from server')
  mongo.booking(id, serviceProvider, result => {
      res.json(result);
  })
})

router.put('/report/:id', (req, res) => {
  let id = req.params.id
  console.log('hello from server')
  console.log('id: ',id)

  mongo.report(id, result => {
      res.json(result);
  })
})

router.put('/report2/:id', (req, res) => {
  let id = req.params.id
  console.log('hello from server 222')
  console.log('id: ',id)

  mongo.report2(id, result => {
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