let myData = {
  name: 'Adam',
  weather: 'sunny',
  printMessages: function() {
    console.log(`Hello ${myData.name}.`)
    console.log(`Today is ${myData.weather}.`)
  },
}

myData.printMessages()
