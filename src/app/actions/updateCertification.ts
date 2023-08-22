'use server'
import User from '@/app/db/models/user'
import { connectDB, disconnectDB } from '../db/connect'
import type { Certification } from './../types/types.d'

export async function updateCertification(certification: Certification) {
  const newCertification = JSON.parse(JSON.stringify(certification))
  delete newCertification._id
  await connectDB()

  const user = await User.updateOne(
    {
      email: 'lagui2003@gmail.com',
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
