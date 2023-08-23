import AuthButtons from './components/AuthButtons'

export default async function Home() {
  return (
    <main className='flex h-full min-h-screen max-w-3xl flex-col items-center justify-center m-auto gap-5'>
      <div className='flex flex-col gap-10 justify-center items-center'>
        <h1 className='flex h-full bg-gradient-to-r from-orange-600 to-white bg-clip-text text-center text-4xl  font-bold uppercase tracking-wider text-transparent sm:text-7xl'>
          Certificados
        </h1>
        <p className='text-center '>Lugar donde tus éxitos toman forma. Una alería de Certificados que es más que un espacio virtual; es tu escaparate personal para mostrar cada paso que has dado en tu camino hacia el éxito.</p>
      </div>
      <AuthButtons/>
    </main>
  )
}
