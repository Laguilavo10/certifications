'use client'
import React from 'react'
import { UserButton, auth, currentUser, useAuth, useUser } from '@clerk/nextjs'
import { Button } from '@nextui-org/button'
import Link from 'next/link'

export default function Header() {
  const { isSignedIn, user } = useUser()
  
  useAuth()
  return (
    <header className='fixed top-0 z-20 w-full bg-black/80 px-5 py-3  text-white left-0 backdrop-blur-lg'>
      <div className='flex w-full max-w-8xl justify-between m-auto'>
        <p className='text-2xl font-bold flex items-center'>My-Certifications</p>
        <div className='flex gap-2 justify-self-end'>
          {isSignedIn ? (
            <div className='flex items-center gap-4'>
              <span>{user?.firstName}</span>
              <UserButton afterSignOutUrl='/' />
            </div>
          ) : (
            <>
              <Button color='primary'>
                <Link href='sign-in'>Sign In</Link>
              </Button>
              <Button variant='light'>
                <Link href='sign-up'>Sign Up</Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
