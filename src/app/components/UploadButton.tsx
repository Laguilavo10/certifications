'use client'
import { Button } from '@nextui-org/react'
import Link from 'next/link'
import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'

export default function UploadButton() {
  return (
    <Link href='/dashboard/upload' className='m-auto w-min'>
      <Button
        color='primary'
        variant='solid'
        endContent={<RedirectIcon className='w-5 h-5' />}
      >
        Upload
      </Button>
    </Link>
  )
}
