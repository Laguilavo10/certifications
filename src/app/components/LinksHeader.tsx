'use client'
import { useUser as useUserClerk } from '@clerk/nextjs'
import { Link } from '@nextui-org/react'
import NextLink from 'next/link'
import { useEffect, useState } from 'react'
import { getData } from '../services/getData'

export default function LinksHeader() {
  const auth = useUserClerk()
  const [username, setUsername] = useState('')
  useEffect(() => {
    const email = auth?.user?.emailAddresses[0]?.emailAddress
    if (!email) return
    getData({ email, propertiesToGet: ['username'] }).then((res) => {
      setUsername(res?.username)
    })
  }, [auth])

  return (
    <ul className='flex gap-4'>
      <li>
        <Link
          href={`/user/${username}`}
          as={NextLink}
          underline='hover'
          color='secondary'
          isBlock
          target='_blank'
          isDisabled = {username === ''}
        >
          My Gallery
        </Link>
      </li>
      <li>
        <Link
          href={'/dashboard'}
          as={NextLink}
          underline='hover'
          color='secondary'
          isBlock
        >
          Dashboard
        </Link>
      </li>
      <li>
        <Link
          href={'/dashboard/upload'}
          as={NextLink}
          underline='hover'
          color='secondary'
          isBlock
        >
          Upload
        </Link>
      </li>
    </ul>
  )
}
