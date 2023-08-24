import LinkToCertifications from '@/app/components/LinkToCertifications'
import CardCertification from '@/app/components/CardCertification'
import EmptyState from '@/app/components/EmptyState'
import { getCertifications } from '@/app/services/getCertifications'
import { getUsername } from '@/app/services/getUsername'
import type { Certification } from '@/app/types/types'
import { currentUser } from '@clerk/nextjs'

export default async function Dashboard() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress
  if (!email) return
  const { username } = await getUsername(email)
  const resources = await getCertifications({ username })
  return (
    <main className='m-auto h-full min-h-screen max-w-8xl pt-14 flex'>
      <section className='relative flex flex-col gap-10 px-5 py-10 min-h-max w-full'>
        <LinkToCertifications username={resources.username} />
        {resources?.certifications.length === 0 && <EmptyState theme='light'/>}
        {resources?.certifications?.map((certification: Certification) => (
          <CardCertification
            key={certification._id}
            certification={certification}
          />
        ))}
      </section>
    </main>
  )
}
