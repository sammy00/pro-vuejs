function myFunc(nameFunction) {
  return 'Hello ' + nameFunction() + '.'
}
function printName(nameFunction, printFunction) {
  printFunction(myFunc(nameFunction))
}
printName(function() {
  return 'Adam'
}, console.log)
