import React from 'react'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'
import { LoadingSkeleton } from './LoadingSkeleton'
import type { Certification } from '@/types/types'
import Image from 'next/image'
import ImportantTag from './ImportantTag'

interface Props {
  certification: Certification
}

export function CertificationItem({ certification }: Props) {
  const { name, image, aspectRatioImage, isImportant } = certification
  return (
    <article className='relative flex h-[280px] w-full flex-col items-center justify-center rounded-md shadow-md md:h-[300px]'>
      <FrameImage
        aspectImage={aspectRatioImage > 1 ? 'horizontal' : 'vertical'}
        titleCertification={name}
      >
        {isImportant && <ImportantTag />}
        <ImageZoom>
          <LoadingSkeleton>
            <Image
              width={1000}
              height={1000}
              src={image}
              alt={`diploma ${name}`}
              className='h-full w-full cursor-pointer'
            />
          </LoadingSkeleton>
        </ImageZoom>
      </FrameImage>
    </article>
  )
}
