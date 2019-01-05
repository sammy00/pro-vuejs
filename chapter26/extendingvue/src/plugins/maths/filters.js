export default {
  currency(value) {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value)
  },
  noDecimal(value) {
    return Number(value).toFixed(0)
  },
}
