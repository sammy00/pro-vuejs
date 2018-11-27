import additionFunction from './maths/sum'
import { multiply, subtract } from './maths/operations'

let values = [10, 20, 30, 40, 50]

console.log(`Sum: ${additionFunction(values)}`)
console.log(`Multiply: ${multiply(values)}`)
console.log(`Subtract: ${subtract(1000, values)}`)
