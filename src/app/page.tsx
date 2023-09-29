import Image from 'next/image'
import AuthButtons from './components/AuthButtons'

export default async function Home() {
  return (
    <div className='magicpattern'>
    <main className='flex flex-col items-center justify-center h-full max-w-3xl min-h-screen gap-20 pt-32 pb-20 m-auto '>
      {/* Hero */}
      <div className='flex flex-col items-center justify-center gap-10'>

        <h1 className='text-3xl text-center font-heading sm:text-5xl md:text-6xl'>
          A simple way to showcase <br /> your{' '}
          <span className='text-orange-600'>certifications</span>
        </h1>
        <p className='text-center text-white/70 '>
          A gallery of Certificates that is more than a virtual space; its your
          personal showcase to display every step you have taken on your
          professional path.
        </p>
      <AuthButtons />
      </div>
      {/* Image */}
      <div className='perspective'>
        <Image
          src='/image.png'
          alt='product preview'
          width={1349}
          height={642}
          quality={100}
          className='rounded-lg border-[10px] border-white/20 border-opacity-30 shadow-2xlshadow-orange-600/70 ring-1 ring-gray-900/10'
        />
      </div>
      {/* Steps */}
      <ol className='pt-8 my-8 space-y-4 md:flex md:space-x-12 md:space-y-0'>
          <li className='md:flex-1'>
            <div className='flex flex-col py-2 pl-4 space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-orange-600'>
                Step 1
              </span>
              <span className='text-xl font-semibold'>
                Sign up for an account
              </span>
              <span className='mt-2 text-white/70'>
                Sign with your Google or Github account and get started
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col py-2 pl-4 space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-orange-600'>
                Step 2
              </span>
              <span className='text-xl font-semibold'>
                Upload your certifications
              </span>
              <span className='mt-2 text-white/70'>
                You can upload your certifications in PDF or Image format
              </span>
            </div>
          </li>
          <li className='md:flex-1'>
            <div className='flex flex-col py-2 pl-4 space-y-2 border-l-4 border-zinc-300 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4'>
              <span className='text-sm font-medium text-orange-600'>
                Step 3
              </span>
              <span className='text-xl font-semibold'>
                Show your certifications to others
              </span>
              <span className='mt-2 text-white/70'>
                That&apos;s it. Just like that you have your own gallery
              </span>
            </div>
          </li>
        </ol>

    </main>
    </div>
  )
}
