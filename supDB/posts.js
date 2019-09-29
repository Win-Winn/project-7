const db =require("../DB")


let temp = [{
  user: '15h user',
  task: '15th Task',
  time: new Date(),
  Categories: 'Kids Need',
  Price: '2342$',
  isUrgent: true,
  scheduledDate: 'Some Date',
  Location:'amman1',
  booking: false,
  userRating: 1,
  serveceProviderRating: 3,
  serveceProvider: 'name 15',
  reports: 0
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
  db.posts.find({booking: false}, (err, data) => {
      if (err) {
          cb(err)
      } else {
      console.log('hello from databaseeee')
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
        console.log("data:", data);
        cb(data);
      }
    });
  };


  let getHistory = (user, cb) => {
    db.posts.find({user: 'other'}, (err, data) => {
      if (err) {
        cb(err);
      } else {
      console.log('hello from database history')
        // console.log("data:", data);
        cb(data);
      }
    });
  };


let creatNewPost = (newPost, cb) => {
  db.posts.create(newPost,  (err, data) => {
    if (err) {
      cb(err);
    } else {
    console.log('hello from database')
      // console.log("data:", data);
      cb(data);
    }
  })
}


// let booking = (serveceProvider, cb) => {
  //   db.posts.updateMany({booking: false, serveceProvider: serveceProvider},  (err, data) => {
    //     if (err) {
      //     console.log(err)
      //       cb(err);
      //     } else {
        //       // console.log('hello from database')
        //         // console.log("data:", data);
        //         cb(data)
        //       }
        //   })
        // }
        
        let booking = (id, serveceProvider, cb) => {
          db.posts.updateOne({_id: id}, {$set: {booking: true, serveceProvider: serveceProvider}},  (err, data) => {
            if (err) {
              cb(err);
            } else {
            console.log('hello from database')
              // console.log("data:", data);
              // cb(data);
            }
          })
        }
        let report = (id, cb) => {
          db.posts.updateOne({_id: id}, { $inc: {reports: 1}},  (err, data) => {
            if (err) {
              cb(err);
            } else {
            console.log(id)
            console.log('hello from database')
              // console.log("data:", data);
              cb(data);
            }
          })
        }

        let report2 = (id, cb) => {
          db.posts.updateOne({_id: id}, {$set: {booking: true}},  (err, data) => {
            if (err) {
              cb(err);
            } else {
            console.log(id)
            console.log('hello from database 222')
              // console.log("data:", data);
              cb(data);
            }
          })
        }

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
    getTasks,
    getHistory,
    creatNewPost,
    booking,
    report,
    report2
  }