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

  const PagesAvailables = Math.ceil(certifications.length / PER_PAGE)

  return (
    <>
      {resources?.map((certification) => (
        <CardCertification
          key={certification._id}
          certification={certification}
          entities={entities}
        />
      ))}
      <Pagination
        totalPages={PagesAvailables}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  )
}
