const request = require('supertest');
const app = require('../app');
const mongoose = require('mongoose');
const User = require('../model/user');

describe('User Tests', () => {
  describe('User creation', () => {
    it('Creates a new user', async () => {
      const testUser = {
        email: 'testuser@gmail.com',
        password: 'password',
      };
      const {
        body: { user },
      } = await request(app)
        .post('/signup')
        .send(testUser)
        .set('Accept', 'application/json');

      expect(user.email).toEqual(testUser.email);
    });
  });

  // Closes the mongoose connection when all the tests have run
  afterAll((done) => {
    User.findOneAndDelete({ email: 'testuser@gmail.com' }, () => {
      mongoose.disconnect(done);
    });
  });
});
