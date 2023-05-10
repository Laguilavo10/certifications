import { PropsWithChildren } from 'react'

export const FrameImage = (props: PropsWithChildren) => {
  return (
    <div className='flex relative box-border h-full w-[370px] cursor-pointer rounded-md border-[7px] border-black bg-[#B27B39]  '>
      <div className='m-auto my-6 h-5/6 w-5/6 rounded-md border-[7px] border-black hover:scale-110 transition-all duration-300 ease-in-out z-10'>
        {props.children}
      </div>

      <span className='absolute -top-[11px] left-3 flex h-12 w-[7px] rotate-[130deg] rounded-md bg-black' />
      <span className='absolute -top-[11px] right-3 flex h-12 w-[7px] rotate-[230deg] rounded-md bg-black' />
      <span className='absolute -bottom-[11px] right-3 flex h-12 w-[7px] rotate-[130deg] rounded-md bg-black' />
      <span className='absolute -bottom-[11px] left-3 flex h-12 w-[7px] rotate-[230deg] rounded-md bg-black' />

      <span className='absolute -top-[56px] left-[154px] flex h-16 w-[7px] rotate-[45deg] rounded-md bg-black' />
      <span className='absolute -top-[56px] right-[154px] flex h-16 w-[7px] rotate-[135deg] rounded-md bg-black' />
    </div>
  )
}