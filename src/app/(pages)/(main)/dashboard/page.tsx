import ButtonsDashboard from '@/app/components/ButtonsDashboard'
import CardCertification from '@/app/components/CardCertification'
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
    <main className='m-auto h-full min-h-screen max-w-8xl pt-14'>
      <section className='relative flex flex-col gap-10 px-5 py-10'>
        <ButtonsDashboard username={resources.username} />
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
