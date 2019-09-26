const db =require("../DB")


let temp = [{
  task: '7th Task',
  time: new Date(),
  categories: 'Shopping',
  price: '8$',
  isUrgent: false,
  scheduledDate: 'Some Date',
  location:'amman2',
  booking: false,
  userRating: 4,
  serveceProviderRating: 4.5,
  serveceProvider: 'name 7'
}]

let creatFirstPost = (cb) => {
  db.posts.create(temp, (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data);
      // getall(cb)
    }
  })
}
    
let getTasks = (cb) => {
  db.posts.find({}, (err, data) => {
      if (err) {
          cb(err)
      } else {
          cb(data)
      }
  })
}

// creatFirstPost(temp)
let getAll = (cb) => {
    db.posts.find({}, (err, data) => {
      if (err) {
        cb(err);
      } else {
      console.log('hello from database')
        // console.log("data:", data);
        cb(data);
      }
    });
  };


  let getSorted = (name, cb) => {
    db.posts.find({task: name}, (err, data) => {
      if (err) {
        cb(err);
      } else {
      console.log('hello from database')
        // console.log("data:", data);
        cb(data);
      }
    });
  };

  module.exports = {
    creatFirstPost,
    getAll,
    getSorted,
    getTasks 
  }