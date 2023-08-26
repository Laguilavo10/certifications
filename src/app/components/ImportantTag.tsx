import React from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

export default function ImportantTag() {
  return (
    <article className='bg-black/50 absolute z-30 rounded-lg p-2 top-1 right-1 flex gap-2 justify-center items-center'>
      <StarIcon className='w-4 h-4 fill-yellow-500 stroke-black'/>
      {/* <small id='tag-important' className='hidden transition-all duration-150 ease-linear min-w-min'>Important</small> */}
    </article>
  )
}
