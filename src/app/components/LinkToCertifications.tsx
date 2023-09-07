'use client'
import { Snippet } from '@nextui-org/react'
// import { ArrowTopRightOnSquareIcon as RedirectIcon } from '@heroicons/react/24/outline'
// import Link from 'next/link'
import { BASE_URL } from '../constant/baseUrl'

interface Props {
  username: `${string}-${string}-${string}`
}

export default function LinkToCertifications({ username }: Props) {
  return (
    <div className='be flex w-full justify-end gap-5'>
        <Snippet
          hideSymbol= {true}
          codeString={`${BASE_URL}/user/${username}`}
          tooltipProps={{
            color: 'foreground',
            content: 'Show your achievements',
            placement: 'top',
            closeDelay: 1
          }}
        >
          {username}
        </Snippet>
      {/* <Link href={`/user/${username}`} target='_blank'>
        <Button startContent={<RedirectIcon className='h-5' />} isIconOnly />
      </Link> */}
    </div>
  )
}
