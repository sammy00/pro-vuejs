function myFunc(name, weather, ...extraArgs) {
  console.log('Hello' + name + '.')
  console.log('It is' + weather + 'today.')
  //for (let i = 0; i < extraArgs.length; i++) {
  for (let extraArg of extraArgs) {
    console.log('Extra Arg: ' + extraArg)
  }
}
myFunc('Adam', 'sunny', 'one', 'two', 'three')
