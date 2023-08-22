import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from '@nextui-org/react'

interface Props {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  className?: string
}

export default function SearchBar({ value, setValue, className }: Props) {
  return (
    <Input
      type='search'
      label='Search'
      placeholder='Certification...'
      labelPlacement='outside'
      startContent={<MagnifyingGlassIcon className='h-6 w-6' />}
      value={value}
      onChange={(e) => {
        setValue(e.target.value)
      }}
      className={className}
    />
  )
}
