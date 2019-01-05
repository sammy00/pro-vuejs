export default {
  borderize(el, binding) {
    if (binding.value) {
      el.classList.add('card-panel')
    } else {
      el.classList.remove('card-panel')
    }
  },
}
