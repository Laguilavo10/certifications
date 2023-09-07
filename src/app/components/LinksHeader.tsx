'use client'
import { Link } from '@nextui-org/react'
import NextLink from 'next/link'

export default function LinksHeader({ username }: { username: string }) {
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
          isDisabled={username === ''}
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
