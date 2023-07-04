import { PropsWithChildren } from 'react'
interface Props {
  children: React.ReactNode
  aspectImage?: 'vertical' | 'horizontal'
}
export const FrameImage = ({ children, aspectImage = 'horizontal' }: Props) => {
  return (
    <>
      {aspectImage === 'horizontal' ? (
        <div className='relative box-border flex h-full w-[370px] rounded-md border-[4px] border-black bg-[#3d270b]  '>
          <div className='z-10 m-auto my-6 h-5/6 w-5/6 justify-center rounded-md border-[4px] border-black transition-all duration-300 ease-in-out sm:hover:scale-110 overflow-hidden'>
            {children}
          </div>
          <span className='absolute -top-[11px] left-[13px] flex h-[46px] w-[4px] rotate-[130deg] rounded-md bg-black ' />
          <span className='absolute -top-[11px] right-[13px] flex h-12 w-[4px] rotate-[230deg] rounded-md bg-black ' />
          <span className='absolute -bottom-[11px] right-[13px] flex h-12 w-[4px] rotate-[130deg] rounded-md bg-black ' />
          <span className='absolute -bottom-[11px] left-[13px] flex h-12 w-[4px] rotate-[230deg] rounded-md bg-black ' />

          <span className='absolute right-[40px] top-[11px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute bottom-[11px] right-[40px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute right-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute left-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />

          <span className='absolute -top-[56px] left-[160px] flex h-16 w-[4px] rotate-[45deg] rounded-md bg-black' />
          <span className='absolute -top-[56px] right-[154px] flex h-16 w-[4px] rotate-[135deg] rounded-md bg-black' />
          <span className='absolute -top-[56px] right-[172px] flex h-3 w-3 rounded-full  border border-black bg-yellow-500' />
        </div>
      ) : (
        <div className='relative box-border flex h-full w-[250px] rounded-md border-[4px] border-black bg-[#3d270b]  '>
          <div className='z-10 m-auto my-6 h-5/6 w-5/6 justify-center rounded-md border-[4px] border-black transition-all duration-300 ease-in-out sm:hover:scale-110'>
            {children}
          </div>

          {/* Lineas Esquinas */}
          <span className='absolute -top-[9px] left-[12px] flex h-12 w-[4px] rotate-[137deg] rounded-md bg-black ' />
          <span className='absolute -top-[9px] right-[12px] flex h-12 w-[4px] rotate-[223deg] rounded-md bg-black ' />
          <span className='absolute -bottom-[9px] right-[12px] flex h-12 w-[4px] rotate-[137deg] rounded-md bg-black ' />
          <span className='absolute -bottom-[9px] left-[12px] flex h-12 w-[4px] rotate-[223deg] rounded-md bg-black ' />

          {/* Sombrado */}
          <span className='absolute right-[40px] top-[11px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute bottom-[11px] right-[40px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute right-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />
          <span className='absolute left-[11px] top-[40px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />

          {/* Lineas Colgante */}
          <span className='absolute -top-[56px] left-[95px] flex h-16 w-[4px] rotate-[45deg] rounded-md bg-black' />
          <span className='absolute -top-[56px] right-[95px] flex h-16 w-[4px] rotate-[135deg] rounded-md bg-black' />
          <span className='absolute -top-[56px] right-[115px] flex h-3 w-3 rounded-full  border border-black bg-yellow-500' />
        </div>
      )}
    </>
  )
}
