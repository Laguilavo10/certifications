export const numberToDate = (number: number | Date) => {
  const date = new Date(number)
  const year = date.toLocaleString('default', { year: 'numeric' })
  const month = date.toLocaleString('default', { month: '2-digit' })
  const day = date.toLocaleString('default', { day: '2-digit' })
  const formattedDate = year + '-' + month + '-' + day
  console.log(formattedDate)
  return formattedDate
}
