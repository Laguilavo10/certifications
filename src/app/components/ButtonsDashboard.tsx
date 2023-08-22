'use client'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon as RedirectIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ButtonsDashboard() {
  return (
    <div className='flex gap-5 w-full justify-end'>
      <Button endContent={<PlusCircleIcon className='h-5'/>}>Create Entity</Button>
      <Button endContent={<RedirectIcon className='h-5'/>} color='primary' className='text-black'>
        <Link href='/dashboard/upload'>Upload</Link>
      </Button>
    </div>
  )
}
