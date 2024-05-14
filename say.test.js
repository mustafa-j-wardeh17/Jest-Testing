//say.test.js

const sayHello = require('./say')

test('Test SayHello', () => {
    expect(sayHello()).toBe('Hello Jest')
})