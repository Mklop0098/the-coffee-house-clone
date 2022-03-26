export function createUniqueId () {
    return Math.random().toString(16).slice(2)
}

export function convertDateToString (date: Date) {
  return date.toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace(/(\d+)\/(\d+)\/(\d+)/, '$2-$1-$3');
}