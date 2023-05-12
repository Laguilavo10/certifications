import Certifications from './components/Certifications'
import Tabs from './components/Tabs'
import { getImages } from './utils/getImages'

export default async function Home() {
  const { resources } = await getImages()

  return (
    <>
      <main className='min-w-screen h-full min-h-screen w-full'>
        <div className='h-48 relative bg-slate-400'>
          <div className='absolute -bottom-7 w-full '>
            <Tabs />
          </div>
        </div>
        <section className='bg-image py-20'>
          <Certifications resources={resources} />
        </section>
      </main>
    </>
  )
}
