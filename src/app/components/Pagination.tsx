import { Button, Pagination as Paginated } from '@nextui-org/react'

interface Props {
  totalPages: number
  currentPage: number
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
}

export default function Pagination({
  totalPages,
  currentPage,
  setCurrentPage
}: Props) {
  return (
    <div className='m-auto flex flex-col gap-5'>
      <Paginated
        total={totalPages}
        color='primary'
        page={currentPage}
        onChange={setCurrentPage}
      />
      <div className='m-auto flex gap-2'>
        <Button
          size='sm'
          variant='flat'
          color='primary'
          onPress={() => {
            setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
          }}
        >
          Previous
        </Button>
        <Button
          size='sm'
          variant='flat'
          color='primary'
          onPress={() => {
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
