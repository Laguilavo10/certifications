import { FolderMinusIcon } from '@heroicons/react/24/outline'
import UploadButton from './UploadButton'

export default function EmptyState({
  theme = 'dark'
}: {
  theme: 'light' | 'dark'
}) {
  const styles = theme === 'dark' ? 'text-black' : 'text-gray-300'
  return (
    <section className='flex flex-col items-center justify-center w-1/2 gap-3 m-auto text-2xl font-bold text-center'>
      <FolderMinusIcon
        className={`m-auto h-10 ${
          theme === 'dark' ? 'fill-yellow-600 stroke-black' : 'stroke-white'
        }`}
      />
      <h3 className={`text-center ${styles}`}>No certifications</h3>
      <p
        className={`text-center ${
          theme === 'dark' ? 'text-black' : 'text-gray-300'
        } text-lg font-medium flex flex-col gap-3 items-start justify-center`}
      >
        Get Started uploading a certification
        <UploadButton/>
      </p>
    </section>
  )
}
