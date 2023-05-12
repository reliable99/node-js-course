// const os = require('os');
// const path = require('path')

// console.log(math.add())

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__dirname))
// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))
// console.log(path.parse(__filename))



const math = require('./math')
const uberReady = require('./uber')

const add = math.add(50, 30)
const subtract = math.subtract(50, 30)
const multiply = math.multiply(50, 30)
const divide = math.divide(50, 30)

console.log(add)
console.log(subtract)
console.log(multiply)

console.log(divide)

const uber  = require('./uber')

uber.uberReady();
const fuelStatus = uber.fuelLimit('hey, stop there! you have reached the minimum level of the fuel limit', 
'HEY, you have reached the minimum level of the fuel limit', 'hey, you have enough fuel')