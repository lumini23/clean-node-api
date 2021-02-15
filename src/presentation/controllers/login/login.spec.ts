import { LoginController } from './login'
import { badRequest } from '../../helpers/http-helper'
import { MissingParamError } from '../../errors'

describe('Login Controller', () => {
  test('Should return 400 if no email is provided', async () => {
    const sut = new LoginController()
    const httprequest = {
      body: {
        password: 'any_password'
      }
    }
    const httpResponse = await sut.handle(httprequest)
    expect(httpResponse).toEqual(badRequest(new MissingParamError('email')))
  })
})
