'use client'

import { Button } from '@nextui-org/react'
import Link from 'next/link'

export default function AuthButtons() {
  return (
    <section className='flex gap-4'>
      <Button color='primary'>
        <Link href='/sign-in'>Sign In</Link>
      </Button>
      <Button variant='faded'>
        <Link href='/sign-up'>Sign Up</Link>
      </Button>
    </section>
  )
}
