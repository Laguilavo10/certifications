'use client'
import { useEffect, useReducer, useState } from 'react'
import Certifications from './Certifications'
import Tabs from './Tabs'
import { PaginatedItems } from './PaginatedItems'

interface Props {
  resources: any
}

interface Action {
  type: string
}

export default function All({ resources }: Props) {
  const reducer = (state: any, action: Action) => {
    switch (action.type) {
      case 'SENA':
        const dataSena = resources.filter((img: any) =>
          img.folder.includes('SENA')
        )
        return dataSena
      case 'Platzi':
        const dataPlatzi = resources.filter((img: any) =>
          img.folder.includes('Platzi')
        )
        return dataPlatzi
      case 'Others':
        const dataOthers = resources.filter((img: any) =>
          img.folder.includes('Otros')
        )
        return dataOthers
      default:
        return resources
    }
  }
  const [tab, setTabs] = useState('Todos')
  const [state, dispatch] = useReducer(reducer, resources)
  const [currentItems, setCurrentItems] = useState(state)
  useEffect(() => {
    dispatch({ type: tab })
  }, [tab])
  return (
    <>
      <div className='relative h-48 bg-slate-400'>
        <h1 className='flex h-full items-center justify-center text-center text-4xl font-bold tracking-wider sm:text-7xl'>
          Certificados
        </h1>
        <div className='absolute -bottom-7 w-full '>
          <Tabs value={tab} setValue={setTabs} />
        </div>
      </div>
      <section className='bg-image py-20'>
        <Certifications resources={currentItems} />
        <PaginatedItems
          itemsPerPage={12}
          data={state}
          tab={tab}
          setCurrentItems={setCurrentItems}
        />
      </section>
    </>
  )
}
