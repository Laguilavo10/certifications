import LinkToCertifications from '@/app/components/LinkToCertifications'
import CardCertification from '@/app/components/CardCertification'
import EmptyState from '@/app/components/EmptyState'
import type { Certification } from '@/app/types/types'
import { currentUser } from '@clerk/nextjs'
import { getData } from '@/app/services/getData'
import { sortCertifications } from '@/app/utils/sortCertifications'

export default async function Dashboard() {
  const user = await currentUser()
  const email = user?.emailAddresses[0]?.emailAddress
  if (!email) return
  const resources = await getData({
    email,
    propertiesToGet: ['username', 'certifications', 'entities']
  })
  const certifications = sortCertifications(resources?.certifications)
  return (
    <main className='m-auto flex h-full min-h-screen max-w-8xl pt-14'>
      <section className='relative flex min-h-max w-full flex-col gap-10 px-5 py-10'>
        <LinkToCertifications username={resources?.username} />
        {resources?.certifications.length === 0 && <EmptyState theme='light' />}
        {certifications.map((certification: Certification) => (
          <CardCertification
            key={certification._id}
            certification={certification}
            entities={resources?.entities}
          />
        ))}
      </section>
    </main>
  )
}
