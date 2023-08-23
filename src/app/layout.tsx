import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { UIProvider } from './components/UIProvider'

const poppins = Poppins({ weight: ['300', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Certificados',
  description: 'Certificados de Andres Laguilavo realcionados a el area T.I',
  icons: {
    icon: 'diploma.svg'
  }
}

export default function RootLayout ({
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
        <body
          className={`${poppins.className} bg-dark m-auto h-full w-full bg-black dark text-white min-h-screen`}
        >
          <UIProvider>
            {children}
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
