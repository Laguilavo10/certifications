import { connectDB } from '../db/connect'
import User from '../db/models/user'

export const getUsername = async (email: string) => {
  try {
    await connectDB()
    const user = await User.findOne({ email }, 'username')
    return user
  } catch (error) {
    console.log(error)
  }
}
