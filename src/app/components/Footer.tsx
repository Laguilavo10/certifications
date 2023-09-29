import Link from 'next/link'
import React from 'react'

export function Footer() {
  return (
    <footer className='flex py-10 m-auto text-center text-white/70 w-fit justify-self-center'>
      Made with ❤️ by
      <Link
        href='https://andres-laguilavo.vercel.app/'
        className='pl-1 text-white transition-colors duration-200 ease-in border-b border-white border-dashed hover:border-orange-600 hover:text-orange-600'
      >
        @laguilavo10
      </Link>
    </footer>
  )
}
