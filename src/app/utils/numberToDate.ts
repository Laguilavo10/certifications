export const numberToDate = (number: number) => {
  const date = new Date(number)
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: '2-digit' })
  const day = date.toLocaleString('default', { day: '2-digit' })
  const formattedDate = year + '-' + month + '-' + day
  return formattedDate
}
