import User from '../db/models/user'
import { createUsername } from './createUsername'
interface Props {
  email: string
  firstname: string
  lastname: string
}
export const InsertNewUser = async ({ email, firstname, lastname }: Props) => {
  // if (email === undefined) return
  const username = createUsername(firstname, lastname)
  console.log(username)

  try {
    const newUser = new User({
      email,
      firstname,
      lastname,
      username,
      certifications: []
    })
    const user = await newUser.save()
    return user
  } catch (error) {
    console.log(error)
  }
}
