import Image from 'next/image'
import { FrameImage } from './components/FrameImage'

export default async function Home() {
  const getImages = async () => {
    const URL_API = `https://api.cloudinary.com/v1_1/dyqdtw07b/resources/search/`
    const API_KEY = '381343614963598'
    const API_SECRET = 'HEu2KQMWx7sNfdcU3PxwyVgF0uo'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${Buffer.from(
          `${API_KEY}:${API_SECRET}`
        ).toString('base64')})}`
      },
      body: JSON.stringify({ expression: 'folder=Certifications' })
    }
    const data = await fetch(URL_API, options)
    const images = await data.json()
    return images
  }
  const { resources } = await getImages()
  return (
    <>
      <main className=' h-full w-full bg-image'>
        <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 md:w-full md:p-14 '>
          {resources.map((image: any) => (
            <article
              className='rounded-mdshadow-md relative flex h-[280px] w-full flex-col items-center justify-center md:h-[300px]'
              key={image.public_id}>
              <FrameImage>
                <Image
                  src={image.url}
                  width={500}
                  height={500}
                  alt={`diploma ${image.filename}`}
                  className='aspect-[4/3] h-full w-full '
                />
              </FrameImage>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
