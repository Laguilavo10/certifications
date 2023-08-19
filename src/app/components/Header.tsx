import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { currentUser, UserButton } from '@clerk/nextjs'

export default async function Header () {
  const user = await currentUser()

  return (
    <header className='fixed top-0 z-20 w-full bg-black/80 px-5 py-3  text-white left-0 backdrop-blur-lg'>
      <div className='flex w-full max-w-8xl justify-between m-auto'>
        <p className='text-2xl font-bold flex items-center'>My-Certifications</p>
        <div className='flex gap-2 justify-self-end'>
          {(user != null)
            ? (
            <div className='flex items-center gap-4'>
              <span>{user?.firstName}</span>
              <UserButton afterSignOutUrl='/' />
            </div>
              )
            : (
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
