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

  return (
    <>
      <div className='flex w-full flex-col items-end gap-1 '>
        <Pagination
          totalPages={PagesAvailables}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <small className='text-xs text-slate-600 italic'>Total Certifications : {totalCertifications}</small>
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
