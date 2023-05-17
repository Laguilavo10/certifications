import type { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata : Metadata = {
  title: 'Certificados',
  description: 'Certifcados de Andres Laguilavo realcionados a el area T.I',
  icons: {
    icon: 'diploma.svg',
  },
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <link rel='shortcut icon' href='/public/diploma.svg' type='image/x-icon'/>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
