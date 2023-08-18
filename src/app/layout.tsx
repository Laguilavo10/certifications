import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { UIProvider } from './components/UIProvider'
import Header from './components/Header'
import { Toaster } from 'sonner'


const poppins = Poppins({ weight: ['300', '500', '700'], subsets: ['latin'] })

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
        <body className={ `${poppins.className} h-full w-full dark m-auto bg-dark bg-black`}>
          <UIProvider>
            <Header />
            {children}
          </UIProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
