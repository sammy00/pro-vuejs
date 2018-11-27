let myData = {
  name: 'Adam',
  weather: 'sunny',
  printMessages() {
    console.log(`Hello ${myData.name}.`)
    console.log(`Today is ${myData.weather}.`)
  },
}

myData.printMessages()
