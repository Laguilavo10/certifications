import { NextResponse } from 'next/server'
import User from '../../db/models/user'
import { connectDB } from '@/app/db/connect'
import { deleteFile } from '@/app/services/deleteFile'
import type { FileWithTitle } from '@/app/(pages)/dashboard/upload/page'

const URL = 'https://api.cloudinary.com/v1_1/dyqdtw07b/image/upload'

export async function POST(req: Request, res: Response) {
  const formData = await req.formData()
  const emailAddress = formData.get('user')
  const idFile = formData.get('public_id')
  try {
    const response = await fetch(URL, {
      method: 'POST',
      body: formData
    })
    const data = await response.json()

    console.log(data)

    const certification = {
      name: idFile,
      fileName: (formData.get('file') as FileWithTitle)?.name,
      date: new Date((formData.get('file') as FileWithTitle)?.lastModified),
      entity: formData.get('entity'),
      isImportant: formData.get('important') === 'true',
      image: data.secure_url,
      aspectRatioImage: data.width / data.height
    }
    console.log(certification)

    await connectDB()
    const updateUser = await User.findOneAndUpdate(
      {
        email: emailAddress
      },
      { $push: { certifications: certification } }
    )
    console.log(updateUser)

    if (updateUser.modifiedCount === 0) {
      console.log(`eliminando ${data.public_id as string}`)
      await deleteFile(data.public_id)
    }

    return NextResponse.json({ submited: true, idFile })
  } catch (error) {
    return NextResponse.json({ submited: false, idFile, error })
  }
}
