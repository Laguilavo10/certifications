import { connectDB } from '../db/connect'
import User from '../db/models/user'

export const getCertifications = async (email: string) => {
  try {
    await connectDB()
    const user = await User.findOne({
      email
    })
    // console.log(user)
    return user?.certifications
  } catch (error) {
    console.log(error)
    return 'Error'
  }

  // const options : RequestInit = {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Basic ${Buffer.from(
  //       `${process.env.API_KEY}:${process.env.API_SECRET}`
  //     ).toString('base64')})}`
  //   },
  //   body: JSON.stringify({ expression: 'folder=Certifications/*' }),
  //   next : {
  //     revalidate: 60
  //   }
  // }
  // const data = await fetch(process.env.URL_API as string, options)
  // const images = await data.json()
}
