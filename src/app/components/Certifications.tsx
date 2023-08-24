'use client'
import { CertificationItem } from './CertificationItem'
import Tabs from './Tabs'
import EmptyState from '@/app/components/EmptyState'
import { PaginatedItems } from './PaginatedItems'
import useTabs from '../hooks/useTabs'
import type { Certification } from '@/types/types'

interface Props {
  resources: Certification[]
}

export default function Certifications({ resources }: Props) {
  const { selectedTab, certifications, setSelectedTab, setCertifications } =
    useTabs(resources, 'Todos')

  return (
    <>
      <section className='bg-image min-h-full'>
        <div className='relative m-auto h-full max-w-8xl py-20'>
          <div className='absolute -top-7 left-0 w-full'>
            <Tabs value={selectedTab} handleValue={setSelectedTab} />
          </div>
            {resources.length === 0 && <EmptyState theme='dark'/>}
          <div className=' m-auto grid w-4/5 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-center justify-center gap-4 gap-x-40 gap-y-20 p-14 md:w-full '>
            {certifications?.currentPage?.map(
              (certification, index: number) => (
                <CertificationItem key={index} certification={certification} />
              )
            )}
          </div>
          <PaginatedItems
            setCurrentItems={setCertifications}
            itemsPerPage={12}
            data={certifications.allItems}
            tab={selectedTab}
          />
        </div>
      </section>
    </>
  )
}
