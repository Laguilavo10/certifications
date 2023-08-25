'use server'
import User from '../db/models/user'
import { connectDB } from '../db/connect'
import { revalidatePath } from 'next/cache'
import { auth } from '@clerk/nextjs'

export async function registerEntity(nameEntity: string) {
  const user = auth()
  if (nameEntity === '') return
  const entity = nameEntity.toLowerCase()
  await connectDB()
  const newEntity = await User.updateOne(
    {
      clerkId: user.userId
    },
    {
      $addToSet: {
        entities: entity
      }
    }
  )
  revalidatePath('/dashboard/upload')
  return newEntity
}
