import User from '../db/models/user'
import { createUsername } from './createUsername'
interface Props {
  email: string
  firstname: string
  lastname: string
  clerkId: string
}
export const InsertNewUser = async ({
  email,
  firstname,
  lastname,
  clerkId
}: Props) => {
  const username = createUsername(firstname, lastname)

  try {
    const newUser = new User({
      email,
      firstname,
      lastname,
      username,
      clerkId,
      certifications: [],
      entities: ['otros']
    })
    const user = await newUser.save()
    return user
  } catch (error) {
    console.log(error)
  }
}
