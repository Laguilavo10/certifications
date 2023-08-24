import { auth } from '@clerk/nextjs'
import { NextResponse } from 'next/server'
import { currentUser, getAuth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  try {
    const user = auth()

    const token = await user.getToken()
    console.log(user)
    return NextResponse.json({ token }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { error: `error getting token: ${error as string}` },
      { status: 500 }
    )
  }
}
