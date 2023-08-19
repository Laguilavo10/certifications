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

interface Folder {
  name: string
  path: string
}

interface ApiResponseFolder {
  folders: Folder[]
  next_cursor: null | string
  total_count: number
  rate_limit_allowed: number
  rate_limit_reset_at: Date
  rate_limit_remaining: number
}

export async function POST (req: Request, res: Response) {
  const folder: ApiResponseFolder = await cloudinary.api.sub_folders(
    'Certifications'
  )
  const { nameFolder } = await req.json()

  const existFolder = folder.folders.some((folder) => folder.name === nameFolder)
  console.log(nameFolder)
  console.log(existFolder)
  if (!existFolder) {
    const res = await cloudinary.api.create_folder(`Certifications/${nameFolder}`)
    return NextResponse.json({ succes: res.success })
  }
  return NextResponse.json({ succes: true })
}
