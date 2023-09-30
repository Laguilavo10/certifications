'use client'
import { CertificationItem } from './CertificationItem'
import Tabs from './Tabs'
import EmptyState from '@/app/components/EmptyState'
import useTabs from '../hooks/useTabs'
import type { Certification } from '@/types/types'
import Pagination from './Pagination'

interface Props {
  resources: Certification[]
  entities: string[]
}

export default function Certifications({ resources, entities }: Props) {
  const {
    selectedTab,
    setSelectedTab,
    resources: certifications,
    currentPage,
    setCurrentPage,
    countCertifications
  } =
    useTabs(resources, 'All')
  const availablePages = Math.ceil(countCertifications / 12)
  return (
    <>
      <section className='min-h-full bg-image'>
        <div className='relative h-full py-20 m-auto max-w-8xl'>
          <div className='absolute left-0 w-full -top-7'>
            <Tabs value={selectedTab} handleValue={setSelectedTab} tabsOptions={entities} />
          </div>
            {resources.length === 0 && <EmptyState theme='dark'/>}
          <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 p-14 md:w-full '>
            {certifications?.map(
              (certification, index: number) => (
                <CertificationItem key={index} certification={certification} />
              )
            )}
          </div>
          <div className='flex justify-center'>
          <Pagination totalPages={availablePages} currentPage={currentPage} setCurrentPage={setCurrentPage} showNextPrevButtons/>
          </div>
        </div>
      </section>
    </>
  )
}
