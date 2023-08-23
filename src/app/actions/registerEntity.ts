'use server'
import User from '../db/models/user'
import { connectDB, disconnectDB } from '../db/connect'

export async function registerEntity(nameEntity: string) {
  console.log(nameEntity)

  await connectDB()
  const newEntity = await User.findOneAndUpdate(
    {
      email: 'lagui2003@gmail.com'
    },
    {
      $upsert: {
        entities: 'hola'
      }
    },
    {
      upsert: true,
    }
  )
  console.log(newEntity)
  // await disconnectDB()
  return newEntity
}
