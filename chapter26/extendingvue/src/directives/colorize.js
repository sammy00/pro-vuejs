export default {
  bind(el, binding) {
    if (binding.value) {
      el.classList.add('red', 'white-text')
    } else {
      el.classList.remove('red', 'white-text')
    }
  },
  update(el, binding) {
    if (binding.value) {
      el.classList.add('red', 'white-text')
    } else {
      el.classList.remove('red', 'white-text')
    }
  },
}
