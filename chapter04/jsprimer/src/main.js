function myFunc(nameFunction) {
  return 'Hello ' + nameFunction() + '.'
}
console.log(
  myFunc(function() {
    return 'Adam'
  })
)
