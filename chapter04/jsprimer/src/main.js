let name = 'Adam'
if (name == 'Adam') {
  console.log('Name is Adam')
} else if (name == 'Jacqui') {
  console.log('Name is Jacqui')
} else {
  console.log('Name is neither Adam or Jacqui')
}
switch (name) {
  case 'Adam':
    console.log('Name is Adam')
    break
  case 'Jacqui':
    console.log('Name is Jacqui')
    break
  default:
    console.log('Name is neither Adam or Jacqui')
    break
}
