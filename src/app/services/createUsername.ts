import { v4 as uuidv4 } from 'uuid'

export const createUsername = (firstName: string, lastName: string) => {
  const firstWordFirstName = firstName.split(' ')[0].toLowerCase() // Tomar la primera palabra del primer nombre
  const firstWordLastName = lastName.split(' ')[0].toLowerCase() // Tomar la primera palabra del primer apellido
  const uuid = uuidv4().split('-')[0]
  const username = `${firstWordFirstName}-${firstWordLastName}-${uuid}`
  return username
}
