import { FolderMinusIcon } from '@heroicons/react/24/outline'

export default function EmptyState({
  theme = 'dark'
}: {
  theme: 'light' | 'dark'
}) {
  const styles = theme === 'dark' ? 'text-black' : 'text-gray-300'
  return (
    <section className='m-auto flex w-1/2 flex-col items-center justify-center gap-3 text-center text-2xl font-bold'>
      <FolderMinusIcon
        className={`m-auto h-10 ${
          theme === 'dark' ? 'fill-yellow-600 stroke-black' : 'stroke-white'
        }`}
      />
      <h3 className={`text-center ${styles}`}>No certifications</h3>
      <p className={`text-center ${theme === 'dark' ? 'text-black' : 'text-gray-300'} text-lg font-medium`}>
        Get started by creating a new project.
      </p>
    </section>
  )
}
