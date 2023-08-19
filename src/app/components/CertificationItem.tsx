import React from 'react'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'
import { LoadingSkeleton } from './LoadingSkeleton'
import type { Certification } from './Certifications'

interface Props {
  certification: Certification
}

export function CertificationItem ({ certification }: Props) {
  const { name, fileName, date, entity, isImportant, image } = certification
  return (
    <article
      className='relative flex h-[280px] w-full flex-col items-center justify-center rounded-md shadow-md md:h-[300px]'
    >
      <FrameImage
        // aspectImage={image.aspect_ratio > 1 ? 'horizontal' : 'vertical'}
        titleCertification={name}
      >
        <ImageZoom>
          <LoadingSkeleton>
            <img
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
