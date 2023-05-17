import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata = {
  title: 'Certificados',
  description: 'Certifcados de Andres Laguilavo realcionados a el area T.I'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
