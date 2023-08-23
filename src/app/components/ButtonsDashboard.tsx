'use client'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  username: `${string}-${string}-${string}`
}

export default function ButtonsDashboard({ username }: Props) {
  return (
    <div className='flex w-full justify-end gap-5'>
      <Button endContent={<RedirectIcon className='h-5' />}>
        <Link href={`/user/${username}`} target='_blank'>{`/user/${username}`}</Link>
      </Button>
      <Button
        color='primary'
        className='text-black'
      >
        <Link href='/dashboard/upload'>Upload</Link>
      </Button>
    </div>
  )
}
