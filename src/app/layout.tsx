import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { UIProvider } from './components/UIProvider'

const poppins = Poppins({ weight: ['300', '500', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My-certifications',
  description: 'Galería de diplomas y certificados que destacan los logros y el éxito a lo largo de las carreras profesionales de los usuarios y colaboradores. Descubre los logros académicos y profesionales que demuestran la búsqueda constante de la excelencia por parte de los usuarios.',
  icons: {
    icon: 'diploma.svg'
  }
}

const clerkPubKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <html lang='en'>
        <link
          rel='shortcut icon'
          href='/diploma.svg'
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
