// const theSum = (num1, num2) => {
//     return num1 + (num2 || null) //truthy falsy pattern
// }

const theSum = (...num1) => {
    //reduce((prevValue,newData)=>summationPrevWithNewData,defaultData)
    return num1.reduce((prev, num) => prev + num, 0)
}


module.exports = theSum