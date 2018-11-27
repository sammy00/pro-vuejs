let myArray = [100, 'Adam', true]

for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: ${myArray[i]}`)
}

console.log('---')

myArray.forEach((value, index) => console.log(`Index ${index}: ${value}`))

console.log('---')

for (let v of myArray) {
  console.log(`Value: ${v}`)
}
