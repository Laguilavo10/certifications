'use client'
import {
  Input,
  Card,
  CardHeader,
  CardBody,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'
import { useEffect, useMemo, useState } from 'react'
import { tabs } from '../../../components/Tabs'
import { numberToDate } from '@/app/utils/numberToDate'
import { createSignature } from '@/app/services/createSignature'

const url = 'https://api.cloudinary.com/v1_1/dyqdtw07b/image/upload'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? ''

interface FilesWithTitle extends File {
  title: string
}
export default function Upload() {
  const [files, setFiles] = useState<FilesWithTitle[]>([])
  const [loading, setloading] = useState(false)
  const handleFiles = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target
    const filesArray = Array.prototype.slice.call(files) as FilesWithTitle[] // convert a FileList to File[]
    const filesWithTitle = filesArray.map((file) => {
      file.title ??= file.name?.replace(/\.[^.]+$/, '')
      return file
    })
    setFiles(filesWithTitle)
  }

  const submitCertifications = async (
    evt: React.MouseEvent<HTMLButtonElement>
  ) => {
    evt.preventDefault()
    if (files?.length === 0) return
    setloading(true)
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileName = file.title
      const folder = 'Pruebas'

      const { signature, timestamp } = await createSignature(fileName, folder)

      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', `${API_KEY}`)
      formData.append('timestamp', `${timestamp}`)
      formData.append('signature', signature)
      formData.append('folder', `Certifications/${folder}`)
      formData.append('public_id', fileName)
      formData.append('format', 'jpg')
      try {
        const response = await fetch(url, {
          method: 'POST',
          body: formData
        });

        const responseData = await response.json();
        console.log(responseData);
        console.log(`${i + 1} de ${files.length}`);
      } catch (err) {
        console.log('err', err);
      }
    }
    setloading(false)

  }

  const handleFileName = (
    evt: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const { value } = evt.target
    const updateFileName = files?.map((file, i) => {
      if (i === index) {
        file.title = value
      }
      return file
    }) as FilesWithTitle[]
    setFiles(updateFileName)
  }

  return (
    <main className='mt-10 flex h-screen w-full text-white'>
      <Card className='m-auto max-h-[500px] min-h-[400px] w-4/6  py-4'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Upload your certifications</h4>
        </CardHeader>
        <CardBody className=' py-2'>
          <form className='flex flex-col items-center gap-4'>
            <input
              type='file'
              multiple
              accept='image/*, .pdf'
              onChange={handleFiles}
              className='m-auto'
            />
            <section className='flex h-full w-full flex-col gap-2'>
              {files?.map((file, index) => (
                <>
                  <Card key={index} className='w-full py-3'>
                    <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
                      <small className='font-bold'>
                        Certification # {index + 1}
                      </small>
                    </CardHeader>
                    <CardBody className='flex w-full flex-row items-center justify-between gap-4 overflow-hidden !p-3 !py-2'>
                      <Input
                        type='text'
                        color='primary'
                        variant='underlined'
                        label='Certification'
                        // defaultValue={file.title}
                        value={file.title}
                        onChange={(evt) => handleFileName(evt, index)}
                        description={`File: ${file.name}`}
                        isRequired
                        classNames={{
                          description: 'truncate'
                        }}
                      />
                      <DropdownTabs options={tabs} />
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
                </>
              ))}
            </section>
            <Button
              onClick={submitCertifications}
              isLoading={loading}
              color='primary'
              spinner={
                <svg
                  className='h-5 w-5 animate-spin text-current'
                  fill='none'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  />
                  <path
                    className='opacity-75'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    fill='currentColor'
                  />
                </svg>
              }
            >
              {loading ? 'Submitting' : 'Submit'}
            </Button>
          </form>
        </CardBody>
      </Card>
    </main>
  )
}

const DropdownTabs = ({ options }: { options: string[] }) => {
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
