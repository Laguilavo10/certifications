import { v2 as cloudinary } from 'cloudinary'

const API_KEY = process.env.API_KEY ?? ''
const API_SECRET = process.env.API_SECRET ?? ''
const CLOUD_NAME = process.env.CLOUD_NAME ?? ''

cloudinary.config({
  cloud_name: CLOUD_NAME,
  api_key: API_KEY,
  api_secret: API_SECRET
})

export { cloudinary }
