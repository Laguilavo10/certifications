'use client'
import { useState } from 'react'
interface Props {
  children: React.ReactNode
  titleCertification: string
  aspectImage?: 'vertical' | 'horizontal'
}
export const FrameImage = ({
  children,
  titleCertification,
  aspectImage = 'horizontal'
}: Props) => {
  const [showCover, setShowCover] = useState(false)

  const dimentions = {
    horizontal: {
      mainContainer: 'w-[370px]',
      cornerRT: '-top-[11px] left-[13px] rotate-[130deg]',
      cornerLT: '-top-[11px] right-[13px] rotate-[230deg]',
      cornerRB: '-bottom-[11px] right-[13px] rotate-[130deg]',
      cornerLB: '-bottom-[11px] left-[13px] rotate-[230deg]',
      linePendantRight: 'left-[160px]',
      linePendantLeft: 'right-[154px]',
      circlePendant: 'right-[172px]'
    },
    vertical: {
      mainContainer: 'w-[250px] ',
      cornerRT: '-top-[9px] left-[12px] rotate-[137deg]',
      cornerLT: '-top-[9px] right-[12px] rotate-[223deg]',
      cornerRB: '-bottom-[9px] right-[12px] rotate-[137deg]',
      cornerLB: '-bottom-[9px] left-[12px] rotate-[223deg]',
      linePendantRight: 'left-[95px]',
      linePendantLeft: 'right-[95px]',
      circlePendant: 'right-[115px]'
    }
  }
  return (
    <>
      <div
        className={`relative box-border flex h-full ${dimentions[aspectImage].mainContainer} rounded-md border-[4px] border-black bg-[#3d270b]`}>
        <div
          className='relative z-10 m-auto my-6 h-5/6 w-5/6 justify-center overflow-hidden rounded-md border-[4px] border-black transition-all duration-300 ease-in-out sm:hover:scale-110'
          onMouseOver={() => { setShowCover(true) }}
          onMouseOut={() => { setShowCover(false) }}>
          {children}
          <div
            className={` 
                ${
                  showCover
                    ? 'pointer-events-none absolute top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-70 p-3 text-center text-lg font-bold uppercase tracking-wider text-white'
                    : ''
                }`}>
            {titleCertification}
          </div>
        </div>

        {/* Lineas Esquinas */}
        <span
          className={`${dimentions[aspectImage].cornerRT} absolute flex h-12 w-[4px] rounded-md bg-black `}
        />
        <span
          className={`${dimentions[aspectImage].cornerLT} absolute flex h-12 w-[4px] rounded-md bg-black `}
        />
        <span
          className={`${dimentions[aspectImage].cornerRB} absolute flex h-12 w-[4px] rounded-md bg-black `}
        />
        <span
          className={`${dimentions[aspectImage].cornerLB} absolute flex h-12 w-[4px] rounded-md bg-black `}
        />

        {/* Sombrado */}
        <span className='absolute right-[40px] top-[11px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
        <span className='absolute bottom-[11px] right-[40px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
        <span className='absolute right-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />
        <span className='absolute left-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />

        {/* Lineas Colgante */}
        <span
          className={`${dimentions[aspectImage].linePendantRight} absolute -top-[56px] flex h-16 w-[4px] rotate-[45deg] rounded-md bg-black`}
        />
        <span
          className={`${dimentions[aspectImage].linePendantLeft} absolute -top-[56px] flex h-16 w-[4px] rotate-[135deg] rounded-md bg-black`}
        />
        <span
          className={`${dimentions[aspectImage].circlePendant} absolute -top-[56px] flex h-3 w-3 rounded-full  border border-black bg-yellow-500`}
        />
      </div>
      {/* )} */}
    </>
  )
}
