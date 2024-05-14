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
    let myObj={
        name:"Mustafa",
        age:24
    }

    expect(myObj).toHaveProperty("name")
})
test("To Check If Property Age Value Is 24", () => {
    let myObj={
        name:"Mustafa",
        age:24
    }

    expect(myObj).toHaveProperty("age",24)
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