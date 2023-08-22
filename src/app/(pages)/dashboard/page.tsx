import ButtonsDashboard from '@/app/components/ButtonsDashboard'
import CardCertification from '@/app/components/CardCertification'
import { getCertifications } from '@/app/services/getCertifications'
import type { Certification } from '@/app/types/types'

export default async function Dashboard() {
  const resources = await getCertifications('lagui2003@gmail.com')
  return (
    <main className='m-auto h-full min-h-screen max-w-8xl pt-14'>
      {/* <SearchBar
        value={searchValue}
        setValue={setSearchValue}
        className='m-auto w-2/6'
      /> */}
      <section className='relative flex flex-col gap-10 px-5 py-10'>
      <ButtonsDashboard/>
        {resources.map((certification: Certification) => (
          <CardCertification
            key={certification._id}
            certification={certification}
          />
        ))}
      </section>
    </main>
  )
}
