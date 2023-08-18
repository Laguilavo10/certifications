'use client'
import { useState, useMemo } from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

export const DropdownTabs = ({ options }: { options: string[] }) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['entidad']))

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button variant='bordered' className='capitalize' color='secondary'>
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Single selection actions'
        variant='flat'
        selectionMode='single'
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        {options.map((option) => (
          <DropdownItem key={option} className='text-white'>
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}
