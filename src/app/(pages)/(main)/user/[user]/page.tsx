import Certifications from '@/app/components/Certifications'
import { getPublicCertifications } from '@/app/services/getPublicCertifications'
import type { UserType } from '@/app/types/types'
import { sortCertifications } from '@/app/utils/sortCertifications'
// import Link from 'next/link'

type PublicUser = Pick<UserType, 'firstname' | 'lastname' | 'certifications' | 'entities'>

export default async function User({
  params: { user: username }
}: {
  params: { user: string }
}) {
  const resources: PublicUser = await getPublicCertifications(username)
  const certifications = sortCertifications(resources?.certifications)
  const entities = resources?.entities.reverse()
  return (
    <main className='h-full min-h-screen  pt-14'>
      <div className='relative m-auto h-48 max-w-8xl'>
        <h1 className='m-auto flex h-full max-w-min flex-col items-center justify-center bg-gradient-to-r from-orange-600 to-white bg-clip-text text-center text-4xl  font-bold uppercase tracking-wider text-transparent sm:text-7xl'>
          Certifications
          <small className='justify-end self-end text-sm'>
            of{' '}
            {/* <Link
              className='border-b-2 hover:border-orange-600 hover:text-orange-600'
              href={`/user/${username}/about`}
            > */}
              {resources?.firstname} {resources?.lastname}
            {/* </Link> */}
          </small>
        </h1>
      </div>
      <Certifications
        resources={certifications}
        entities={entities}
      />
    </main>
  )
}
