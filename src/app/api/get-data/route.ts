import { connectDB, disconnectDB } from '@/app/db/connect'
import User from '@/app/db/models/user'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const url = new URL(req.url)
  const username = url.searchParams.get('username') ?? ''
  const email = url.searchParams.get('email') ?? ''
  const optionsWithComma = await req.text()
  const options = optionsWithComma.replace(',', ' ')

  try {
    await connectDB()
    const user = await User.findOne(
      {
        $or: [{ username }, { email }]
      },
      options
    )
    await disconnectDB()
    return NextResponse.json({ user })
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export async function GET(req: Request) {
  return NextResponse.json({ hola: 'hola' })
}
