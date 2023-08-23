export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='m-auto flex min-h-screen max-w-7xl items-center justify-center'>
      {children}
    </main>
  )
}
