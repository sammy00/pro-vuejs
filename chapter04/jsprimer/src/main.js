let myArray = [100, 'Adam', true]
let myOtherArray = [200, 'Bob', false, ...myArray]

myOtherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`))
