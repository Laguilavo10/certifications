import Image from 'next/image'
import { FrameImage } from './components/FrameImage'
import { ImageZoom } from './components/ImageZoom'
import { getImages } from './utils/getImages'

export default async function Home() {
  const { resources } = await getImages()
  return (
    <>
      <main className=' bg-image min-w-screen h-full min-h-screen w-full'>
        <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 md:w-full md:p-14 '>
          {resources.map((image: any) => (
            <article
              className='rounded-mdshadow-md relative flex h-[280px] w-full flex-col items-center justify-center md:h-[300px]'
              key={image.public_id}>
              <FrameImage>
                <ImageZoom>
                  <Image
                    src={image.url}
                    width={800}
                    height={800}
                    alt={`diploma ${image.filename}`}
                    className='aspect-[4/3] h-full w-full'
                  />
                </ImageZoom>
              </FrameImage>
            </article>
          ))}
        </div>
      </main>
    </>
  )
}
