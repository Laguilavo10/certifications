import Header from '@/app/components/Header'

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
