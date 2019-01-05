export default {
  update(el, binding) {
    const bgClass = binding.arg || 'red'
    const noMods = Object.keys(binding.modifiers).length == 0

    if (!binding.value) {
      return el.classList.remove(bgClass, 'white-text')
    }

    if (noMods || binding.modifiers.bg) {
      el.classList.add(bgClass)
    }
    if (noMods || binding.modifiers.text) {
      el.classList.add('white-text')
    }
  },
}
