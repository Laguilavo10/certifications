'use client'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Props {
  username: `${string}-${string}-${string}`
}

export default function LinkToCertifications({ username }: Props) {
  return (
    <div className='be flex w-full justify-end gap-5'>
      <Link href={`/user/${username}`} target='_blank'>
        <Button startContent={<RedirectIcon className='h-5' />}>
          /user/{username}
        </Button>
      </Link>
    </div>
  )
}
