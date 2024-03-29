'use client'
import {
  StarIcon,
  PencilSquareIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'
import { Card, CardBody, Button, Input } from '@nextui-org/react'
import { useEffect, useState } from 'react'
import { DropdownTabs } from './DropdownTabs'
// import { tabs } from './Tabs'
import { Toaster, toast } from 'sonner'
import type { Certification } from '../types/types'
import { numberToDate } from '../utils/numberToDate'
import { updateCertification } from '../actions/updateCertification'
import DeleteCertificationButton from './DeleteCertificationButton'
import { useDropdown } from '../hooks/useDropdown'

interface Props {
  certification: Certification
  entities: string[]
}

export default function CardCertification({ certification, entities }: Props) {
  const [isEditable, setIsEditable] = useState(false)
  const { selectedKeys, setSelectedKeys, selectedValue } = useDropdown(
    certification.entity
  )

  const [certificationValue, setCertificationValue] =
    useState<Certification>(certification)
  const update = async () => {
    const response = await updateCertification(certificationValue)
    if (response.modifiedCount > 0) {
      toast.success('Certificado actualizado correctamente')
    } else {
      toast.error('Error al actualizar certificado')
    }
  }

  useEffect(() => {
    if (selectedValue === certification.entity) return
    setCertificationValue((prev) => ({
      ...prev,
      entity: selectedValue
    }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedValue])
  return (
    <>
      <form
        action={() => {
          update()
        }}
      >
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
                  type={!isEditable ? 'submit' : 'button'}
                  onClick={() => {
                    setIsEditable((prev) => !prev)
                  }}
                >
                  {isEditable ? (
                    <CheckCircleIcon className='h-6' />
                  ) : (
                    <PencilSquareIcon className='h-6' />
                  )}
                </Button>
                <DeleteCertificationButton certification={certification} />
              </div>
            </div>

            <div className='flex w-max flex-row  items-center justify-end gap-4 self-end text-white'>
              <Toaster position='bottom-right' richColors duration={5000} />
              <DropdownTabs
                options={entities}
                isDisabled={!isEditable}
                selectedKeys={selectedKeys}
                setSelectedKeys={setSelectedKeys}
                selectedValue={selectedValue}
              />
              <Input
                type='date'
                color='primary'
                variant='bordered'
                label='Date'
                isDisabled={!isEditable}
                value={numberToDate(new Date(certificationValue.date))}
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
      </form>
    </>
  )
}
