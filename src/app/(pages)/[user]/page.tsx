import Certifications from '@/app/components/Certifications'
import { getCertifications } from '@/app/services/getCertifications'
import { currentUser } from '@clerk/nextjs'
import Link from 'next/link'

export default async function User({ params }: { params: { user: string } }) {
  const user = await currentUser()
  console.log(user)
  const resources = await getCertifications('lagui2003@gmail.com')
  return (
    <main className='h-full min-h-screen  pt-14'>
      <div className='relative h-48 max-w-8xl m-auto'>
        <h1 className='flex flex-col h-full m-auto max-w-min items-center justify-center bg-gradient-to-r from-orange-600 to-white bg-clip-text text-center text-4xl  font-bold uppercase tracking-wider text-transparent sm:text-7xl'>
          Certificados
          <small className='text-sm justify-end self-end'>of <Link className='border-b-2 hover:text-orange-600 hover:border-orange-600' href='/about'>Andres Laguilavo</Link></small>
        </h1>
      </div>
      <Certifications resources={resources} />
    </main>
  )
}
