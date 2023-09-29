'use client'
import { Snippet } from '@nextui-org/react'
import { BASE_URL } from '../constant/baseUrl'

interface Props {
  username: `${string}-${string}-${string}`
}

export default function LinkToCertifications({ username }: Props) {
  return (
    <div className='flex justify-end w-full gap-5 be'>
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

    </div>
  )
}
