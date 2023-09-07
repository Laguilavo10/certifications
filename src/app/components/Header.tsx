import { currentUser, UserButton } from '@clerk/nextjs'
import LinksHeader from './LinksHeader'
import AuthButtons from './AuthButtons'
import GithubButton from './GithubButton'

export default async function Header() {
  const user = await currentUser()

  return (
    <header className='fixed left-0 top-0 z-20 w-full bg-black/80 px-5  py-3 text-white backdrop-blur-lg'>
      <div className='m-auto flex w-full max-w-8xl justify-between'>
        <div className='flex gap-2'>
        <p className=' hidden items-center text-2xl font-bold md:flex'>
          My-Certifications
        </p>
        <GithubButton/>

        </div>
        <div className='flex w-full justify-end gap-2 md:w-fit'>
          {user != null ? (
            <div className='flex items-center gap-3 self-end justify-self-end '>
              <LinksHeader />
              <div className='flex items-center gap-4'>
                <span className='hidden md:flex'>{user?.firstName}</span>
                <UserButton afterSignOutUrl='/' />
              </div>
            </div>
          ) : (
            <AuthButtons/>
          )}
        </div>
      </div>
    </header>
  )
}
