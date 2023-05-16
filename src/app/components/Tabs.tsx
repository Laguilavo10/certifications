'use client'
import { useState } from 'react'

const tabs: string[] = ['Todos', 'SENA', 'Platzi']
interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
}
export default function Tabs({ value, setValue }: Props) {
  // const [value, setValue] = useState('Todos')
  const selectTab = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { id }
    } = evt
    if (id === value) return //evitar re-render
    setValue(id)
  }
  return (
    <ul className='m-auto flex w-3/6 justify-evenly rounded-lg bg-white p-3 text-left shadow-2xl ring-1 ring-gray-200'>
      {tabs.map((tab) => (
        <li key={tab}>
          <button
            onClick={selectTab}
            id={tab}
            className={`border-b-2 border-transparent text-xl font-medium  ${
              value === tab
                ? 'border-b-blue-500 text-blue-500'
                : 'text-gray-400 hover:text-gray-500'
            }`}>
            {tab}
          </button>
        </li>
      ))}
    </ul>
  )
}
