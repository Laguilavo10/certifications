'use server'
import User from '@/app/db/models/user'
import { connectDB, disconnectDB } from '../db/connect'
import type { Certification } from './../types/types.d'
import { auth } from '@clerk/nextjs'

export async function updateCertification(certification: Certification) {
  const authId = auth()
  const newCertification = JSON.parse(JSON.stringify(certification))
  delete newCertification._id
  await connectDB()

  const user = await User.updateOne(
    {
      clerkId: authId.userId,
      certifications: {
        $elemMatch: {
          _id: certification._id
        }
      }
    },
    {
      $set: {
        'certifications.$': newCertification
      }
    }
  )
  await disconnectDB()
  return user
}
