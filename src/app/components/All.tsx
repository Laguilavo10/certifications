'use client'
import { useEffect, useReducer, useState } from 'react'
import Certifications from './Certifications'
import Tabs from './Tabs'
import { PaginatedItems } from './PaginatedItems'

interface Props {
  resources: any
}

export default function All ({ resources }: Props) {
  const defaultValue = {
    allItems: resources,
    currentPage: resources.slice(0, 12)
  }
  const [tab, setTabs] = useState('Todos')
  const [certifications, setCertifications] = useState(defaultValue)

  useEffect(() => {
    if (tab === 'Todos') {
      setCertifications({ ...certifications, allItems: resources })
      return
    }
    const filteredResoruces = resources.filter((img: any) =>
      img.folder.includes(tab)
    )
    setCertifications({ ...certifications, allItems: filteredResoruces })
  }, [tab])

  return (
    <>
      <div className='relative h-48'>
        <h1 className='flex h-full items-center justify-center bg-gradient-to-r from-primary-600 to-white bg-clip-text text-center text-4xl  font-bold uppercase tracking-wider text-transparent sm:text-7xl'>
          Certificados
        </h1>
        <div className='absolute -bottom-7 w-full '>
          <Tabs value={tab} handleValue={setTabs} />
        </div>
      </div>
      <section className='bg-image py-20'>
        <Certifications resources={certifications.currentPage} />
        <PaginatedItems
          itemsPerPage={12}
          data={certifications.allItems}
          tab={tab}
          setCurrentItems={setCertifications}
        />
      </section>
    </>
  )
}
