const expect = require('chai').expect
const nock = require('nock')

const API_URL = 'https://api.github.com'

const getUser = require('../index').getUser

const damenor = require('./responses/damenor')
const rmenor = require('./responses/rmenor')

const getUserTest = (user) => {
  return getUser(user)
    .then(res => {

      // Response is Object
      expect(typeof res).to.equal('object')
      
      // user equal 'damenor'
      expect(res.login).to.equal(user)

      // user.id is number 
      expect(typeof res.id).to.equal('number')
      
      // followers and follows is a number
      expect(typeof res.followers).to.equal('number')
      expect(typeof res.following).to.equal('number')

    })
}

describe('Different github users', () => {

  beforeEach(() => {

    nock(API_URL)
      .get('/users/damenor')
      .reply(200, damenor)
      .get('/users/rmenor')
      .reply(200, rmenor)
      
  })

  it('get data user damenor', () => getUserTest('damenor'))

  it('get data user rmenor', () => getUserTest('rmenor'))

})
