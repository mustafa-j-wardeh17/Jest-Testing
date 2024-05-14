const Input = require('../input')

describe('Check Input Failed', () => {
    test('Undefined Test', () => {
        expect(Input()).toBe("Unknown")
    })
    test('Trim Test', () => {
        expect(Input(' Mustafa ')).toBe("Mustafa")
    })
    test('More Than 10 Letters Test', () => {
        expect(Input(' Mustafa172000 ')).toBe("Mustafa172")
    })
    test('Remove _ From Name', () => {
        expect(Input('Mustafa_1720')).toBe("Mustafa172")
    })

})