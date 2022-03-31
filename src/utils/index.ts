export function createUniqueId () {
    return Math.random().toString(16).slice(2)
}

export function convertDateToString (date: Date) {
  return date.toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3');
}

export const numberFormat = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

export const formatCurrency = (currency = 0, formatter = "vi-VN") => {
  const format = ["vi-VN", "VND"]
  return currency.toLocaleString(format[0], {
    style: "currency",
    currency: format[1],
  })
}
