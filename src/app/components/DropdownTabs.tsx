'use client'
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger
} from '@nextui-org/react'

interface Props {
  options: string[]
  selectedKeys: Set<string>
  setSelectedKeys: React.Dispatch<React.SetStateAction<Set<string>>>
  selectedValue: string
  isDisabled?: boolean
}

// To get selectedKeys, setSelectedKeys and selectedValue
// use the customHook useDropdown

export const DropdownTabs = ({
  options,
  isDisabled = false,
  selectedKeys,
  setSelectedKeys,
  selectedValue
}: Props) => {
  return (
    <Dropdown>
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
