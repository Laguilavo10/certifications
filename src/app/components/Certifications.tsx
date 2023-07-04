import Image from 'next/image'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'
import { LoadingSkeleton } from './LoadingSkeleton'

interface Props {
  resources: any
}
export default function Certifications({ resources }: Props) {
  return (
    <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 p-14 md:w-full '>
      {resources.map((image: any) => (
        <article
          className='relative flex h-[280px] w-full flex-col items-center justify-center rounded-md shadow-md md:h-[300px]'
          key={image.public_id}>
          <FrameImage
            aspectImage={image.aspect_ratio > 1 ? 'horizontal' : 'vertical'}>
            <ImageZoom>
              <LoadingSkeleton>
                <Image
                  src={image.url}
                  width={1000}
                  height={1000}
                  alt={`diploma ${image.filename}`}
                  className='h-full w-full'
                />
              </LoadingSkeleton>
            </ImageZoom>
          </FrameImage>
        </article>
      ))}
    </div>
  )
}
