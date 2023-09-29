import { currentUser, UserButton } from '@clerk/nextjs'
import LinksHeader from './LinksHeader'
import AuthButtons from './AuthButtons'
import GithubButton from './GithubButton'
import { getData } from '../services/getData'
import Link from 'next/link'

export default async function Header() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress as string
  const response = await getData({ email, propertiesToGet: ['username'] })
  const username = response?.username
  console.log(username)
  return (
    <header className='fixed top-0 left-0 z-20 w-full px-5 py-3 text-white bg-black/80 backdrop-blur-lg'>
      <div className='flex justify-between w-full m-auto max-w-8xl'>
        <div className='flex gap-2'>
          <Link className='items-center hidden text-2xl font-bold md:flex' href='/'>
            My-Certifications
          </Link>
          <GithubButton />
        </div>
        <div className='flex justify-end w-full gap-2 md:w-fit'>
          {user != null ? (
            <div className='flex items-center self-end gap-3 justify-self-end '>
              <LinksHeader username={username} />
              <div className='flex items-center gap-4'>
                <span className='hidden md:flex'>{user?.firstName}</span>
                <UserButton afterSignOutUrl='/' />
              </div>
            </div>
          ) : (
            <AuthButtons />
          )}
        </div>
      </div>
    </header>
  )
}
