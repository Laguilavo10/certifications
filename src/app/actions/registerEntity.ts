'use server'
import User from '../db/models/user'
import { connectDB } from '../db/connect'

export async function registerEntity(nameEntity: string) {
  const entity = nameEntity.toLowerCase()
  await connectDB()
  const newEntity = await User.updateOne(
    {
      email: 'lagui2003@gmail.com'
    },
    {
      $addToSet: {
        entities: entity
      }
    }
  )
  console.log(newEntity)
  // await disconnectDB()
  return newEntity
}
