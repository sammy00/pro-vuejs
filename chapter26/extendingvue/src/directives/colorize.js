export default {
  update(el, binding) {
    const bgClass = binding.arg || 'red'
    if (binding.value) {
      el.classList.add(bgClass, 'white-text')
    } else {
      el.classList.remove(bgClass, 'white-text')
    }
  },
}
