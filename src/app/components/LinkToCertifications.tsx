'use client'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  username: `${string}-${string}-${string}`
}

export default function LinkToCertifications({ username }: Props) {
  const classUrlDashboard = `md:after:content-['/user/${username}']`
  return (
    <div className='flex w-full justify-end gap-5 be'>
      <Link href={`/user/${username}`} target='_blank'>
        <Button endContent={<RedirectIcon className='h-5' />} className={classUrlDashboard}>
        </Button>
      </Link>
    </div>
  )
}
