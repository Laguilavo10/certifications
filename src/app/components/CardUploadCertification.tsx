'use client'
import { Input, Card, CardHeader, CardBody } from '@nextui-org/react'
import { StarIcon } from '@heroicons/react/24/outline'
import { DropdownTabs } from './DropdownTabs'
import { numberToDate } from '../utils/numberToDate'
import type { FileWithTitle } from '../(pages)/(main)/dashboard/upload/page'
import { useDropdown } from '../hooks/useDropdown'
import { useEffect } from 'react'

interface Props {
  file: FileWithTitle
  index: number
  updateValue: (updateInfo: {
    newValue: string | boolean | number | Date
    property: keyof FileWithTitle
    fileName: string
  }) => void
  tabs: string[]
}

export default function CardUploadCertification({
  file,
  index,
  updateValue,
  tabs
}: Props) {
  const { selectedKeys, setSelectedKeys, selectedValue } =
    useDropdown('Entidad')

  useEffect(() => {
    if (selectedValue === 'Entidad') return
    updateValue({
      newValue: selectedValue,
      property: 'entity',
      fileName: file.name
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue])

  return (
    <Card className='w-full py-3'>
      <CardHeader className='flex items-start gap-3 px-4 pb-0 pt-2'>
        <div className='font-bold'>Certification # {index + 1}</div>
        <div
          className={`flex items-center justify-center gap-1 ${
            file.important ? 'opacity-100' : 'opacity-10'
          } cursor-pointer`}
          onClick={(evt) => {
            updateValue({
              newValue: !file.important,
              fileName: file.name,
              property: 'important'
            })
          }}
        >
          <StarIcon
            className={`h-5 w-5  ${
              file.important
                ? 'fill-yellow-500 stroke-yellow-500'
                : ' stroke-slate-500'
            }`}
          />
          Important
        </div>
      </CardHeader>
      <CardBody className='flex w-full flex-col items-center justify-between gap-4 overflow-hidden !p-3 !py-2 md:flex-row'>
        <Input
          type='text'
          color='primary'
          variant='underlined'
          label='Certification'
          value={file.title}
          onChange={(evt) => {
            updateValue({
              newValue: evt.target.value,
              fileName: file.name,
              property: 'title'
            })
          }}
          description={`File: ${file.name}`}
          isRequired
          classNames={{
            description: 'truncate'
          }}
        />
        <DropdownTabs
          options={tabs}
          selectedKeys={selectedKeys}
          setSelectedKeys={setSelectedKeys}
          selectedValue={selectedValue}
        />
        <Input
          type='date'
          color='primary'
          variant='bordered'
          label='Date'
          defaultValue={numberToDate(file.lastModified)}
          isRequired
          classNames={{
            base: 'w-min'
          }}
        />
      </CardBody>
    </Card>
  )
}
