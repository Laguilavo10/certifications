import Header from '@/app/components/Header'
import { Suspense } from 'react'
import Loading from './loading'

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Suspense fallback={<Loading />}>
      <section>
        {/*
          // @ts-expect-error: Unreachable code error */}
        <Header />
        {children}
      </section>
    </Suspense>
  )
}
