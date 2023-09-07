import { Pagination as Paginated } from '@nextui-org/react'

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
      <Paginated
        total={totalPages}
        color='primary'
        page={currentPage}
        onChange={setCurrentPage}
      />
  )
}
