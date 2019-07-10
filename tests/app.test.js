const request = require('supertest');
const app = require('../lib/app');

describe('colors', () => {
  it('color test?', () => {
    return request(app)
      .get('/')
      .then(res => {
        expect(res.text).toEqual(expect.stringContaining('list of colors'))
      })
  })
})