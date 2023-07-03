import Image from 'next/image'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'

interface Props {
  resources: any
}
export default function Certifications({ resources }: Props) {
  return (
    <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 md:w-full p-14 '>
      {resources.map((image:any) => (
        <article
          className='rounded-md shadow-md relative flex h-[280px] w-full flex-col items-center justify-center md:h-[300px]'
          key={image.public_id}>
          <FrameImage aspectImage={image.aspect_ratio > 1 ? 'horizontal' : 'vertical'}>
            <ImageZoom>
              <Image
                src={image.url}
                width={1000}
                height={1000}
                alt={`diploma ${image.filename}`}
                className='h-full w-full'
              />
            </ImageZoom>
          </FrameImage>
        </article>
      ))}
    </div>
  )
}
