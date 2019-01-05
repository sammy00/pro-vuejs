export default {
  update(el, binding) {
    const bgClass = binding.arg || 'red'
    const noMods = Object.keys(binding.modifiers).length == 0

    if (binding.value) {
      if (noMods || binding.modifiers.bg) {
        el.classList.add(bgClass)
        el.dataset['bgClass'] = true
      }
      if (noMods || binding.modifiers.text) {
        el.classList.add('white-text')
        el.dataset['textClass'] = true
      }
    } else {
      if (el.dataset['bgClass']) {
        el.classList.remove(bgClass)
        el.dataset['bgClass'] = false
      }
      if (el.dataset['textClass']) {
        el.classList.remove('white-text')
        el.dataset['textClass'] = false
      }
    }
  },
}
