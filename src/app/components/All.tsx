'use client'
import { useEffect, useState } from 'react'
import Certifications from './Certifications'
import Tabs from './Tabs'

interface Props {
  resources: any
}

export default function All({ resources }: Props) {
  const [tab, setTabs] = useState('Todos')
  const [data, setData] = useState(resources)
  const dataByTab = () => {
    switch (tab) {
      case 'Todos':
        setData(resources)
        return data
      case 'SENA':
        const dataSena = resources.filter((img : any)=>(img.folder.includes('SENA')))
        setData(dataSena)
        break
      case 'Platzi':
        const dataPlatzi = resources.filter((img : any)=>(img.folder.includes('Platzi')))
        setData(dataPlatzi)
        break
      case 'Otros':
        setData(resources)
        return data
      default:
        break
    }
  }
  useEffect(() => {
    dataByTab()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])
  
  return (
    <>
      <div className='relative h-48 bg-slate-400'>
        <div className='absolute -bottom-7 w-full '>
          <Tabs value={tab} setValue={setTabs} />
        </div>
      </div>
      <section className='bg-image py-20'>
        <Certifications resources={data} />
      </section>
    </>
  )
}
