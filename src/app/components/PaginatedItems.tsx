'use client'
import { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  itemsPerPage: number
  data: any
  setCurrentItems: any
  tab: string
}

export function PaginatedItems({
  itemsPerPage,
  data,
  setCurrentItems,
  tab
}: Props) {
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
          pageClassName='border border-slate-400  rounded-md cursor-pointer bg-white/70'
          pageLinkClassName='flex w-full h-full px-3 items-center justify-center'
          nextLinkClassName='flex w-full h-full p-2 items-center justify-center text-sm bg-white/70 rounded-md border border-slate-400'
          previousLinkClassName='flex w-full h-full p-2 items-center justify-center text-sm bg-white/70 rounded-md border border-slate-400'
          previousClassName=''
          nextClassName=''
          breakLabel='...'
          breakClassName='flex justify-center'
          breakLinkClassName='page-link'
          containerClassName='m-auto mt-8 flex p-2 justify-center rounded-md-md gap-3 bg-opacity-80 flex-col sm:flex-row font-bold w-[200px] md:w-auto'
          activeClassName='!bg-orange-400'
          renderOnZeroPageCount={null}
        />
      )}
    </>
  )
}
