import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { currentUser, UserButton } from '@clerk/nextjs'
import LinksHeader from './LinksHeader'

export default async function Header() {
  const user = await currentUser()
  return (
    <header className='fixed left-0 top-0 z-20 w-full bg-black/80 px-5  py-3 text-white backdrop-blur-lg'>
      <div className='m-auto flex w-full max-w-8xl justify-between'>
        <p className=' hidden items-center text-2xl font-bold md:flex'>
          My-Certifications
        </p>
        <div className='flex gap-2 justify-end w-full md:w-fit'>
          {user != null ? (
            <div className='flex items-center gap-3 self-end justify-self-end '>
              <LinksHeader />
              <div className='flex items-center gap-4'>
                <span className='hidden md:flex'>{user?.firstName}</span>
                <UserButton afterSignOutUrl='/' />
              </div>
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
