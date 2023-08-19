import All from '@/app/components/All'
import { getCertifications } from '@/app/services/getCertifications'
import React from 'react'

export default async function User ({ params }: { params: { user: string } }) {
  if (params.user !== 'laguilavo') {
    return <h1>Perdedor</h1>
  }

  const resources = await getCertifications('lagui2003@gmail.com')
  console.log('', resources)

  return (
    <main className='m-auto h-full min-h-screen max-w-8xl pt-14'>
      <div className='relative h-48'>
        <h1 className='flex h-full items-center justify-center bg-gradient-to-r from-orange-600 to-white bg-clip-text text-center text-4xl  font-bold uppercase tracking-wider text-transparent sm:text-7xl'>
          Certificados
        </h1>
      </div>
      {/* <Certifications></Certifications> */}
      {/* <All resources={resources} /> */}
      {/* <div className='absolute -bottom-7 w-full '>
          <Tabs value={tab} handleValue={setTabs} />
        </div> */}
    </main>
  )
}
