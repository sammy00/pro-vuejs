export default function(el, binding) {
  if (binding.value) {
    el.classList.add('red', 'white-text')
  } else {
    el.classList.remove('red', 'white-text')
  }
}
