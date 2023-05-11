import { PropsWithChildren } from 'react'

export const FrameImage = (props: PropsWithChildren) => {
  return (
    <div className='relative box-border flex h-full w-[370px] rounded-md border-[4px] border-black bg-[#3d270b]  '>
      <div className=' z-10 m-auto my-6 h-5/6 w-5/6 justify-center rounded-md border-[4px] border-black transition-all duration-300 ease-in-out hover:scale-110'>
        {props.children}
      </div>
      <span className='absolute -top-[11px] left-[13px] flex h-[46px] w-[4px] rotate-[130deg] rounded-md bg-black ' />
      <span className='absolute -top-[11px] right-[13px] flex h-12 w-[4px] rotate-[230deg] rounded-md bg-black ' />
      <span className='absolute -bottom-[11px] right-[13px] flex h-12 w-[4px] rotate-[130deg] rounded-md bg-black ' />
      <span className='absolute -bottom-[11px] left-[13px] flex h-12 w-[4px] rotate-[230deg] rounded-md bg-black ' />


      <span className='absolute top-[11px] right-[40px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
      <span className='absolute bottom-[11px] right-[40px] flex h-[3px] w-[260px] rounded-md bg-[#f0cc9f] blur-md' />
      <span className='absolute top-[40px] right-[11px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />
      <span className='absolute top-[40px] left-[11px] flex h-[200px] w-[3px] rounded-md bg-[#f0cc9f] blur-md' />

      <span className='absolute -top-[56px] left-[160px] flex h-16 w-[4px] rotate-[45deg] rounded-md bg-black' />
      <span className='absolute -top-[56px] right-[154px] flex h-16 w-[4px] rotate-[135deg] rounded-md bg-black' />
      <span className='absolute -top-[56px] right-[172px] flex h-3 w-3 rounded-full  bg-yellow-500 border border-black' />

    </div>
  )
}
