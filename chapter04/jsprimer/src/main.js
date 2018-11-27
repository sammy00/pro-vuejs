function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`)
  console.log(`String: ${stringValue}`)
  console.log(`Boolean: ${boolValue}`)
}

let myArray = [100, 'Adam', true]

printItems(myArray[0], myArray[1], myArray[2])

printItems(...myArray)
