const data = require('../data')

test("Check If Array Contains 6 Elements", () => {
    expect(data.length).toBe(6)
})
// Or Another Match Method
test("Check If Array Contains 6 Elements", () => {
    expect(data).toHaveLength(6)
})


test("Check If Array Not Contains Number 0 Without MatchMethod(toContain)", () => {
    for (let i = 0; i < data.length; i++) {
        expect(data[i]).not.toBe(0)
    }
})
test("Check If Array Contains Number 6", () => {
    expect(data).toContain(6)
})
test("Check If Array Not Contains Number 6", () => {
    expect(data).not.toContain(7)
})

test("Check If Array Not Contains Only Numbers", () => {
    for (let i = 0; i < data.length; i++) {
        expect(isNaN(data[i])).toBe(false)
    }
})
test("Check If Array Not Contains Only Numbers", () => {
    for (let i = 0; i < data.length; i++) {
        expect(isNaN(data[i])).toBeFalsy()
    }
})
test("Check If First Element Is Larger Than -4", () => {
    expect(data[0]).toBeGreaterThan(-4)
})
test("Check If First Element Is Less Than Or Equal 1", () => {
    expect(data[0]).toBeLessThanOrEqual(1)
})
test("Check For Undefined", () => {
    let a;
    expect(a).toBeUndefined();
})

test("Check For Substring Inside String By RegExp", () => {
    let myStr = 'Mustafa Abu Wardeh'
    expect(myStr).toMatch(/wardeh/ig)
})

test("To Check If Property Found In Object", () => {
    let myObj = {
        name: "Mustafa",
        age: 24
    }

    expect(myObj).toHaveProperty("name")
})
test("To Check If Property Age Value Is 24", () => {
    let myObj = {
        name: "Mustafa",
        age: 24
    }

    expect(myObj).toHaveProperty("age", 24)
})
/**
 *  1-  .toHaveLength() => length of array or string
 *  2-  .toContain() => to check if data contains specific element
 *  3-  .not.matchMethodName() => to check if match method doesn't match with my data
 *  4-  .toBeFalsy() => toBe(false)
 *  5-  .toBeTruthy() => toBe(true)
 *  6-  .toBeGreaterThan() => data element > test data
 *  7-  .toBeGreaterThanOrEqual() => data element >= test data
 *  8-  .toBeLessThan() => data element < test data
 *  9-  .toBeLessThanOrEqual() => data element <= test data
 *  10- .toBeUndefined() => to check if data is undefined
 *  11- .toMatch() => to Apply Regular expression inside bracket 
 *  12- .toHaveProperty() => to check if property found in object (key) or to check it's value(key,val)
 */


expect.extend({
    customMatchName(recived, target) {
        // We Hava Two Built In Property In Custom Matcher
        // 1- Pass: We Make Our Functionality On It
        // 2- Message: Send Your Written Message For Test Block You Work On It
    }
})


// Create Custom toBeLargerThan Match Like To toBeGreaterThan Match
expect.extend({
    toBeLargerThan(received, target) {
        const condition = received > target
        if (condition) {
            return {
                pass: true,
                message: () => `Expected ${received} To Be Larger Than ${target}`
            }
        } else {
            return {
                pass: false,
                message: () => `Error: Expected ${received} To Be Larger Than ${target}`
            }
        }
    }
})

test("Check If Number Is Larger Than Other Number", () => {
    expect(10).toBeLargerThan(9)
})
//Range Custom Matcher
expect.extend({
    toBeInRange(received, startTarget, endTarget) {
        const condition = startTarget < received && received < endTarget
        if (condition) {
            return {
                pass: true,
                message: () => `Number ${received} Is In Range Between {${startTarget},${endTarget}} `
            }
        } else {
            return {
                pass: false,
                message: () => `Error: Number ${received} Is In Range Between {${startTarget},${endTarget}} `
            }
        }
    }
})

test("Check If Number Is In Range Between 2 Numbers", () => {
    expect(6).toBeInRange(4, 7)
})