import React from 'react'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'
import { LoadingSkeleton } from './LoadingSkeleton'
import type { Certification } from './Certifications'
import Image from 'next/image'

interface Props {
  certification: Certification
}

export function CertificationItem({ certification }: Props) {
  const { name, fileName, date, entity, isImportant, image } = certification
  // if (!image) return null
  return (
    <article className='relative flex h-[280px] w-full flex-col items-center justify-center rounded-md shadow-md md:h-[300px]'>
      <FrameImage
        // aspectImage={image.aspect_ratio > 1 ? 'horizontal' : 'vertical'}
        titleCertification={name}
      >
        <ImageZoom>
          <LoadingSkeleton>
            <Image
              width={1000}
              height={1000}
              // src={image}
              src='https://laguilavo-certifications.vercel.app/_next/image?url=http%3A%2F%2Fres.cloudinary.com%2Fdyqdtw07b%2Fimage%2Fupload%2Fv1688510536%2FCertifications%2FPlatzi%2Fdiploma-tailwind.jpg&w=1080&q=75'
              alt={`diploma ${name}`}
              className='h-full w-full cursor-pointer'
            />
          </LoadingSkeleton>
        </ImageZoom>
      </FrameImage>
    </article>
  )
}
