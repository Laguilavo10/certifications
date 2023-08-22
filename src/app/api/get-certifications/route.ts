import { connectDB, disconnectDB } from '@/app/db/connect'
import User from '@/app/db/models/user'
import { NextResponse } from 'next/server'

export async function GET(req: Request) {
  const url = new URL(req.url)
  const email = url.searchParams.get('email')
  try {
    await connectDB()
    const user = await User.findOne({
      email
    })
    console.log(user)
    // await disconnectDB()
    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error fetching certifications:', error)
    throw error // Lanza la excepción para que pueda ser manejada más arriba en la cadena de llamadas
  }
}
