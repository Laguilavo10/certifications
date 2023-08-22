'use client'
import { useState, useMemo } from 'react'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

export const DropdownTabs = ({
  options,
  isDisabled = false,
  initialValue
}: {
  options: string[]
  isDisabled?: boolean
  initialValue: string
}) => {
  const [selectedKeys, setSelectedKeys] = useState(new Set([initialValue]))

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )

  return (
    <Dropdown isDisabled={true}>
      <DropdownTrigger disabled={true}>
        <Button variant='bordered' className='capitalize' color='secondary'>
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label='Single selection actions'
        variant='flat'
        selectionMode='single'
        selectedKeys={selectedKeys}
        // @ts-expect-error : I dont Know why this is not working
        onSelectionChange={setSelectedKeys}
        disabledKeys={isDisabled ? options : []}
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
