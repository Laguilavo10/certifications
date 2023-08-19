import User from '../db/models/user'

export const InsertNewUser = async (email: string | undefined) => {
  if (email === undefined) return
  try {
    const newUser = new User({
      email,
      certifications: []
    })
    const user = await newUser.save()
    return user
  } catch (error) {
    console.log(error)
  }
}
