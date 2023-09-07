'use client'
import { Spinner } from '@nextui-org/react'

export default function Loading() {
  return (
    <section className='w-screen h-screen justify-center items-center m-auto flex'>
      <Spinner label='Loading...' color='primary' size='lg'/>
    </section>
  )
}
