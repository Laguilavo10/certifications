import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'

const API_KEY = process.env.API_KEY ?? ''
const API_SECRET = process.env.API_SECRET ?? ''
const CLOUD_NAME = process.env.CLOUD_NAME ?? ''

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

export async function POST(req: Request, res: Response) {
  const { fileName, folder } = await req.json()
  const timestamp = Math.round(new Date().getTime() / 1000)
  const signature = cloudinary.utils.api_sign_request(
    {
      timestamp: timestamp,
      folder: `Certifications/${folder}`,
      public_id: fileName,
      format: 'jpg'
    },
    API_SECRET
  )
  return NextResponse.json({ timestamp, signature })
}
