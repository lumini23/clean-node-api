import request from 'supertest'
import app from '../config/app'

describe('Signup Routes', () => {
  test('Should return an account on sucess', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'any_name',
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      })
      .expect(200)
  })
})