'use client'
import { Button, Pagination as Paginated } from '@nextui-org/react'

interface Props {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  showNextPrevButtons?: boolean
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage,
  showNextPrevButtons = false
}: Props) {
  if (totalPages === 0) {
    return null
  }

  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <Paginated
        total={totalPages}
        color='primary'
        page={currentPage}
        onChange={setCurrentPage}
        size='lg'
        className='black'
      />
      {showNextPrevButtons && (
        <div className='flex gap-2'>
          <Button
            size='md'
            variant='faded'
            color='primary'
            onPress={() => {
              setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
            }}
          >
            Previous
          </Button>
          <Button
            size='md'
            variant='faded'
            color='primary'
            onPress={() => {
              setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  )
}
