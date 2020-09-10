// node has its own assert library/ assertion module, you can use const assert = require('assert');
// this is the chai assertion library
const assert = require('chai').assert;

//go outside of the test folder 
const app = require('../app')

describe('App', function () {
    it('app should return hello', function () {
        assert.equal(app(), 'Hello');
    })
})

