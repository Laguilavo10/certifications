'use client'
import usePagination from '../hooks/usePagination'
import type { Certification } from '../types/types'
import CardCertification from './CardCertification'
import Pagination from './Pagination'

interface Props {
  certifications: Certification[]
  entities: string[]
}

const PER_PAGE = 12

export default function CertificationsDashboard({
  certifications,
  entities
}: Props) {
  const { resources, currentPage, setCurrentPage } = usePagination({
    initialResources: certifications,
    countPerPage: PER_PAGE
  })
  const totalCertifications = certifications.length
  const PagesAvailables = Math.ceil(totalCertifications / PER_PAGE)

  if (certifications.length === 0) return null

  return (
    <>
      <div className='flex flex-col items-end w-full gap-1 '>
        <Pagination
          totalPages={PagesAvailables}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <small className='text-xs italic text-slate-600'>
          Total Certifications : {totalCertifications}
        </small>
      </div>
      {resources?.map((certification) => (
        <CardCertification
          key={certification._id}
          certification={certification}
          entities={entities}
        />
      ))}
    </>
  )
}
