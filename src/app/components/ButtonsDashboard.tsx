'use client'
import { Button } from '@nextui-org/react'
import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
// import CreateEntity from './CreateEntity'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''
interface Props {
  username: `${string}-${string}-${string}`
}
export default function ButtonsDashboard({ username }: Props) {
  console.log(username)

  return (
    <div className='flex w-full justify-end gap-5'>
      <Button>
        <Link href={`/user/${username}`}>{`/user/${username}`}</Link>
      </Button>
      <Button
        endContent={<RedirectIcon className='h-5' />}
        color='primary'
        className='text-black'
      >
        <Link href='/dashboard/upload'>Upload</Link>
      </Button>
    </div>
  )
}
