import { connectDB } from '@/app/db/connect'
import User from '@/app/db/models/user'
import { InsertNewUser } from '@/app/services/InsertNewUser'
import { NextResponse } from 'next/server'

// This is a WEBHOOOK to connect CLERK with the backend
export async function POST(req: Request) {
  const user = await req.json()
  console.log(user)

  if (user.type === 'user.created') {
    const {
      first_name: firstname,
      last_name: lastname,
      id: clerkId
    } = user.data
    const email = user?.data?.email_addresses[0]?.email_address

    try {
      await connectDB()
      const user = await InsertNewUser({ email, firstname, lastname, clerkId })
      return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
      console.error('Error saving user:', error)
      throw error
    }
  }
  if (user.type === 'user.deleted') {
    const { id } = user.data
    try {
      await connectDB()
      const user = await User.deleteOne({
        clerkId: id
      })
      console.log(user)
      return NextResponse.json({ user }, { status: 200 })
    } catch (error) {
      console.error('Error deleting user:', error)
      throw error
    }
  }
}
