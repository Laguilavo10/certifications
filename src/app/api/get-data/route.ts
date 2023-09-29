import { connectDB } from '@/app/db/connect'
import User from '@/app/db/models/user'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const url = new URL(req.url)
  const username = url.searchParams.get('username') ?? ''
  const email = url.searchParams.get('email') ?? ''
  const optionsWithComma = await req.text()
  const options = optionsWithComma.replace(/,/g, ' ')
  let user = null
  let retries = 0

  while (user === null && retries < 5) {
    try {
      await connectDB()
      user = await User.findOne(
        {
          $or: [{ username }, { email }]
        },
        options
      )
      // Si encontramos al usuario, salimos del bucle.
      if (user) {
        break
      }
    } catch (error) {
      console.error('Error al buscar el usuario:', error)
    }

    // Esperar 1 segundo antes de volver a intentar.
    await new Promise((resolve) => setTimeout(resolve, 1000))
    retries++
  }

  if (user !== null) {
    console.log(user)
    return NextResponse.json({ user })
  } else {
    console.error('El usuario no se encontró después de varios intentos.')
    return NextResponse.json({
      error: 'El usuario no se encontró después de varios intentos.'
    })
  }
}
