'use server'
import User from '../db/models/user'
import { connectDB } from '../db/connect'
import type { Certification } from './../types/types.d'
import { revalidatePath } from 'next/cache'

export async function deleteCertification(certification: Certification) {
  console.log(certification)
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
      $pull: {
        certifications: {
          _id: certification._id
        }
      }
    }
  )
  console.log(user)
  revalidatePath('/dashboard')
  return user
}
