let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('ReminderApp Test', () => {

  //Begin Test
  //1. POST a user
  describe('/POST/user', () => {
    it('It should POST a new user', (done) => {
      let newUser =
        {'user' : 
          {
            "name" : "Qi Uma",
            "email" : "qi@example.com"
          }
        }
      chai.request(server)
      .post('/users')
      .send(newUser)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('userId');
        done();
      });
    });
  });

  //2. GET a user by userId
  describe('/GET/:userid ', () => {
    it('It should GET a user with the given userId', (done) => {
      let userId = 1;
      chai.request(server)
      .get('/users/' + userId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('name');
        res.body.should.have.property('email');
        done();
      });
    });
    it('It should not find the user', (done) => {
      let userId = 2;
      chai.request(server)
      .get('/users/' + userId)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });

  //3. POST a reminder
  describe('/POST/users/:userId/reminders', () => {
    let newRemind  =   
      {"reminder" : 
        {
          "title" : "Get grades",
          "description" : "Get My final grades."
        }
      }
    it('It should POST a new reminder for the given userId', (done) => {
      let userId = 1;
      chai.request(server)
      .post('/users/' + userId + '/reminders')
      .send(newRemind)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('reminderId');
        done();
      });
    });
    // it('It should not POST a new reminder if the userId is wrong', (done) => {
    //   let userId = 2;
    //   chai.request(server)
    //   .post('/users/' + userId + '/reminders')
    //   .send(newRemind)
    //   .end((err, res) => {
    //     res.should.have.status(404);
    //     res.body.should.be.a('object');
    //     done();
    //   });
    // });
  });

  //4. Get all reminders of the specific user 
  describe('/GET/:userId/reminders', () => {
    it('It should GET all reminders of the specific user ', (done) => {
      let userId = 1;
      chai.request(server)
      .get('/users/' + userId + '/reminders')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
    });
    it('It should not GET reminders if the specific user does not have any reminders', (done) => {
      let userId = 2;
      chai.request(server)
      .get('/users/' + userId + '/reminders')
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
    });
  });

   //5. GET one reminder by userId and reminderId
  describe('/GET/:userId/reminders/:reminderId', () => {
    it('It should GET a reminder for a given userId and a reminderId', (done) => {
      let userId = 1;
      let reminderId = 1;
      chai.request(server)
      .get('/users/' + userId + '/reminders/' + reminderId)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('title');
        res.body.should.have.property('description');
        done();
      });
    });
    it('It should not GET the reminder if the userId and reminderId are not correct', (done) => {
      let userId = 1;
      let reminderId = 2;
      chai.request(server)
      .get('/users/' + userId + '/reminders/' + reminderId)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
    });
  });

  //6. DELETE one reminder by userId and reminderId
  describe('/DELETE/:userId/reminders/:reminderId', () => {
    it('It should DELETE the specific reminder with given userId and reminderId', (done) => {
      let userId = 1;
      let reminderId = 1;
      chai.request(server)
      .delete('/users/' + userId + '/reminders/' + reminderId)
      .end((err, res) => {
        res.should.have.status(204);
        res.body.should.be.a('object');
        done();
      });
    });
    // it('It should not DELETE the specific reminder if the userId and reminderId are wrong', (done) => {
    //   let userId = 2;
    //   let reminderId = 2;
    //   chai.request(server)
    //   .delete('/users/' + userId + '/reminders/' + reminderId)
    //   .end((err, res) => {
    //     res.should.have.status(404);
    //     // res.body.should.be.a('object');
    //     done();
    //   });
    // });
  });

  //7. DELETE all reminders of a specific user
  describe('/DELETE/:userId/reminders', () => {
    it('It should DELETE all reminders of the user with specific userId', (done) => {
      let userId = 1;
      chai.request(server)
      .delete('/users/' + userId + '/reminders')
      .end((err, res) => {
        res.should.have.status(204);
        res.body.should.be.a('object');
        done();
      });
    });
    it('It should not DELETE if no userId matches the given userId', (done) => {
      let userId = 2;
      chai.request(server)
      .delete('/users/' + userId + '/reminders')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });

  //8. DELETE a user id with all reminders
  describe('/DELETE/:userId', () => {
    it('It should DELETE one user with specific userId', (done) => {
      let userId = 1;
      chai.request(server)
      .delete('/users/' + userId)
      .end((err, res) => {
        res.should.have.status(204);
        res.body.should.be.a('object');
        done();
      });
    });
    it('It should not DELETE a user if there is no userId matches', (done) => {
      let userId = 1;
      chai.request(server)
      .delete('/users/' + userId)
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
    });
  });

});
