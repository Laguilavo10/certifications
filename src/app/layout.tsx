import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { UIProvider } from './components/UIProvider'

import Header from './components/Header'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Certificados',
  description: 'Certifcados de Andres Laguilavo realcionados a el area T.I',
  icons: {
    icon: 'diploma.svg'
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <link
          rel='shortcut icon'
          href='/public/diploma.svg'
          type='image/x-icon'
        />
        <body className={poppins.className + 'h-full w-full dark'}>
          <UIProvider>
            <Header />
            {children}
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
