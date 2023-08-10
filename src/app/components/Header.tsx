'use client'
import React from 'react'
import { UserButton, useAuth, useUser } from '@clerk/nextjs'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Header() {
  const { isSignedIn } = useAuth()
  const { user } = useUser()

  return (
    <header className='fixed top-0 z-20 w-full bg-black px-5 py-2 text-white backdrop-blur-[20px] left-0'>
      <div className='flex w-full max-w-[1400px] justify-between m-auto'>
        <Button color='primary'>Press me</Button>
        <div className='flex gap-2 justify-self-end'>
          {isSignedIn ? (
            <div className='flex items-center gap-2'>
              <span>{user?.firstName}</span>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <>
              <Button color='primary'>
                <Link href='sign-in'>Sign In</Link>
              </Button>
              <Button color='primary'>
                <Link href='sign-up'>Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
