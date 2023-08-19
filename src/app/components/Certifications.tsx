import Image from 'next/image'
import { FrameImage } from './FrameImage'
import { ImageZoom } from './ImageZoom'
import { LoadingSkeleton } from './LoadingSkeleton'
import { CertificationItem } from './CertificationItem'

interface Props {
  resources: Certification[]
}

export interface Certification {
  name: string
  fileName: string
  date: Date
  entity: string
  isImportant: boolean
  _id: string
  image: string
}

export default function Certifications ({ resources }: Props) {
  return (
    <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 p-14 md:w-full '>
      {resources.map((certification, index: number) => (
        <CertificationItem key={index} certification={certification} />
      ))}
    </div>
  )
}
