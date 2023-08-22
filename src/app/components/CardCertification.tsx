'use client'
import {
  StarIcon,
  PencilSquareIcon,
  TrashIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { Card, CardBody, Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { DropdownTabs } from './DropdownTabs'
import { tabs } from './Tabs'
import { Toaster, toast } from 'sonner'
import type { Certification } from '../types/types'
import { numberToDate } from '../utils/numberToDate'

interface Props {
  certification: Certification
}

export default function CardCertification({ certification }: Props) {
  const [isEditable, setIsEditable] = useState(false)

  const [certificationValue, setCertificationValue] =
    useState<Certification>(certification)

  const updateCertification = async () => {

    toast.success('Certification uploaded successfully')
  }


  return (
    <>
      <Card className='flex flex-row gap-5 px-10 py-5'>
        <img src={certificationValue.image} alt='' className='w-[200px]' />
        <CardBody className='relative flex flex-col  justify-center p-0'>
          <div className='flex w-full '>
            <div className='w-full'>
              <small
                className='flex items-center gap-2'
                onClick={() => {
                  if (isEditable) {
                    setCertificationValue((prev) => ({
                      ...prev,
                      isImportant: !prev.isImportant
                    }))
                  }
                }}
              >
                <StarIcon
                  className={`h-4 text-tiny font-bold uppercase ${
                    certificationValue.isImportant
                      ? 'fill-yellow-500 stroke-yellow-500'
                      : ' stroke-slate-500'
                  }`}
                />
                Important
              </small>
              <Input
                isDisabled={!isEditable}
                type='text'
                color='primary'
                variant='underlined'
                label='Certification'
                value={certificationValue.name}
                description={`File: ${certificationValue.fileName}`}
                onChange={(evt) => {
                  setCertificationValue((prev) => {
                    return { ...prev, name: evt.target.value }
                  })
                }}
                isRequired
                classNames={{
                  input: 'text-xl',
                  description: 'truncate'
                }}
              />
            </div>
            <div className=' flex flex-row gap-2'>
              <Button
                isIconOnly
                aria-label='Like'
                variant='light'
                color={isEditable ? 'success' : 'warning'}
                onClick={() => {
                  setIsEditable((prev) => !prev)
                }}
              >
                {isEditable ? (
                  <CheckCircleIcon
                    className='h-6 '
                    onClick={updateCertification}
                  />
                ) : (
                  <PencilSquareIcon className='h-6' />
                )}
              </Button>
              <Button
                isIconOnly
                color='danger'
                variant='light'
                aria-label='Take a photo'
              >
                <TrashIcon className='h-6 ' />
              </Button>
            </div>
          </div>

          <div className='flex w-max flex-row  items-center justify-end gap-4 self-end text-white'>
            <Toaster
              position='bottom-right'
              richColors
              theme='dark'
              duration={5000}
            />
            <DropdownTabs
              options={tabs}
              initialValue={certificationValue.entity}
              isDisabled={!isEditable}
            />
            <Input
              type='date'
              color='primary'
              variant='bordered'
              label='Date'
              isDisabled={!isEditable}
              // defaultValue={numberToDate(certificationValue.date)}
              value={numberToDate(certificationValue.date)}
              onChange={(evt) => {
                setCertificationValue((prev) => ({
                  ...prev,
                  date: evt.target.valueAsDate as Date
                }))
              }}
              isRequired
              classNames={{
                base: 'w-min'
              }}
            />
          </div>
        </CardBody>
      </Card>
    </>
  )
}
