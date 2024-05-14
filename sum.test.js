const theSum = require('./sum')

//describe(name,fn)
describe('Verify The Sum Function', () => {
    test('Test Zero', () => {
        expect(theSum()).toBe(0)
    })
    test('Test 2 Nums', () => {
        expect(theSum(5, 10)).toBe(15)
    })

    test('Test Many Nums', () => {
        expect(theSum(5, 10, 6, 4)).toBe(25)
    })
})