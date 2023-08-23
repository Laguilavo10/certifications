// import type { Metadata } from 'next'
// import '../globals.css'
import Header from '@/app/components/Header'

// export const metadata: Metadata = {
//   title: 'Certificados',
//   description: 'Certificados de Andres Laguilavo realcionados a el area T.I',
//   icons: {
//     icon: 'diploma.svg'
//   }
// }

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {/*
            // @ts-expect-error: Unreachable code error */}
      <Header />
      {children}
    </section>
  )
}
