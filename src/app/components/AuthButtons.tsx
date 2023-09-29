'use client'

import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function AuthButtons() {
  return (
    <section className='flex gap-4'>
      <Link href='/sign-in'>
        <Button color='primary'>Sign In</Button>
      </Link>
      <Link href='/sign-up'>
        <Button variant='faded'>Sign Up</Button>
      </Link>
    </section>
  )
}
