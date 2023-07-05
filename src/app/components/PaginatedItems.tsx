'use client'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  itemsPerPage: number
  data: any
  setCurrentItems: any
  tab: string
}

export function PaginatedItems({ itemsPerPage, data, setCurrentItems, tab }: Props) {
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  useEffect(() => {
    setPageCount(0)
    setItemOffset(0)
  }, [tab])

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage
    setCurrentItems(data.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(data.length / itemsPerPage))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemOffset, itemsPerPage, data])

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length
    setItemOffset(newOffset)
  }
  return (
    <>
      {data.length <= itemsPerPage ? null : (
        <ReactPaginate
          nextLabel='Siguiente >'
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel='< Anterior'
          pageClassName='border border-slate-400  rounded cursor-pointer'
          pageLinkClassName='flex w-full h-full py-1 px-3  items-center'
          previousClassName='border border-slate-400 rounded'
          previousLinkClassName='flex w-full h-full p-1 text-sm'
          nextClassName='border border-slate-400 rounded'
          nextLinkClassName='flex w-full h-full p-1 text-sm'
          breakLabel='...'
          breakClassName='page-item'
          breakLinkClassName='page-link'
          containerClassName='bg-white flex p-2 m-auto max-w-fit rounded-md gap-3 bg-opacity-80 shadow-2xl'
          activeClassName='bg-orange-400'
          renderOnZeroPageCount={null}
        />
      )}
    </>
  )
}
