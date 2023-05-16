import All from './components/All'
import { getImages } from './utils/getImages'

export default async function Home() {

  const { resources } = await getImages()

  return (
    <>
      <main className='min-w-screen h-full min-h-screen w-full'>
        <All resources={resources}/>
      </main>
    </>
  )
}
