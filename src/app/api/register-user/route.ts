// import { connectDB } from '@/app/db/connect'
import { connectDB } from '@/app/db/connect'
import { InsertNewUser } from '@/app/services/InsertNewUser'
import { NextResponse } from 'next/server'

// This is a WEBHOOOK to connect CLERL with the backend

export async function POST(req: Request) {
  const { data } = await req.json()
  const { first_name: firstname, last_name: lastname } = data
  const email = data.email_addresses[0].email_address
  try {
    await connectDB()
    const user = await InsertNewUser({ email, firstname, lastname })
    console.log(user)
    return NextResponse.json({ user })
  } catch (error) {
    console.error('Error saving user:', error)
    throw error
  }
}
