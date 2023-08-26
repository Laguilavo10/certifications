'use server'
import User from '../db/models/user'
import { connectDB } from '../db/connect'
import type { Certification } from './../types/types.d'
import { revalidatePath } from 'next/cache'
import { currentUser } from '@clerk/nextjs'
import { deleteFile } from '../services/deleteFile'
import { removeExtensionFile } from '../utils/removeExtensionFile'

export async function deleteCertification(certification: Certification) {
  const user = await currentUser()
  const email = user?.emailAddresses[0].emailAddress ?? ''
  await connectDB()

  const fileDeleted = await User.updateOne(
    {
      email,
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

  revalidatePath('/dashboard')
  if (fileDeleted?.modifiedCount === 1) {
    await deleteFile(`Certifications/${email}/${removeExtensionFile(certification.fileName)}`)
  }

  return fileDeleted
}
