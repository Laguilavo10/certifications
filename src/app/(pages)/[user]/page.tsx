import All from '@/app/components/All'
import { getImages } from '@/app/services/getImages'
import React from 'react'

export default async function User({ params }: { params: { user: string } }) {
  if (params.user !== 'laguilavo') {
    return <h1>Perdedor</h1>
  }

  const { resources } = await getImages()
  return (
    <main className='m-auto h-full min-h-screen max-w-8xl'>
      <All resources={resources} />
    </main>
  )
}
