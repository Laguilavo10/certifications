import { connectDB, disconnectDB } from '@/app/db/connect'
import User from '@/app/db/models/user'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const username = url.searchParams.get('username') ?? ''
  try {
    await connectDB()
    const user = await User.findOne({ username }, 'certifications')
    await disconnectDB()
    return NextResponse.json({ user }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: `Error fetching certifications: ${error as string}` },
      { status: 500 }
    )
  }
}
