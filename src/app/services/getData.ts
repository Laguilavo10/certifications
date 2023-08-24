import { auth } from '@clerk/nextjs'
import type { UserType } from './../types/types.d'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

interface BaseProps {
  propertiesToGet: Array<keyof UserType>
}

interface PropsWithUsername extends BaseProps {
  username: string
  email?: never
}

interface PropsWithEmail extends BaseProps {
  email: string
  username?: never
}

type Props = PropsWithUsername | PropsWithEmail

// Can retrieve data using either a username or an email. However, to avoid conflicts, it's better to use only one of them
export const getData = async ({ username, email, propertiesToGet }: Props) => {
  let url = BASE_URL
  if (username) {
    url += `/api/get-data?username=${username}`
  } else if (email) {
    url += `/api/get-data?email=${email}`
  } else {
    return 'No username or email provided'
  }

  // verify if is called on server or client
  if (typeof window === 'undefined') {
    const user = auth()
    const token = (await user.getToken()) as string

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        mode: 'cors'
      },
      body: propertiesToGet.toString()
    }).then(async (res) => await res.json())

    console.log(response)
    return response?.user
  }

  const response = await fetch(url, {
    method: 'POST',
    body: propertiesToGet.toString()
  }).then(async (res) => await res.json())

  console.log(response)
  return response?.user
}