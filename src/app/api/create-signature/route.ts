import { NextResponse } from 'next/server'
import { cloudinary } from '../../services/configCloudinary'

const API_SECRET = process.env.API_SECRET ?? ''

export async function POST(req: Request, res: Response) {
  const { fileName, folder } = await req.json()
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp,
      folder: `Certifications/${folder as string}`,
      public_id: fileName,
      format: 'jpg'
    },
    API_SECRET
  )
  return NextResponse.json({ timestamp, signature })
}
