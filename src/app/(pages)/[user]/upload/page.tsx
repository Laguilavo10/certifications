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
import { useEffect, useRef, useState } from 'react'
import { createSignature } from '@/app/services/createSignature'
import { useUser } from '@clerk/nextjs'
import { createFolderIfNotExist } from '@/app/services/createFolder'
import { connectDB } from '../../../db/connect'
import CardUploadCertification from '@/app/components/CardUploadCertification'
import { SpinnerIcon } from '@/app/assets/icons'
import { toast, Toaster } from 'sonner'
const API_KEY = process.env.NEXT_PUBLIC_API_KEY ?? ''

export interface FileWithTitle extends File {
  title: string
  important: boolean
  entity: string
}

export interface fileSubmitted {
  idFile: string
  submited: boolean
  error: string
}
export default function Upload() {
  const { user } = useUser()
  const [files, setFiles] = useState<FileWithTitle[]>([])
  const [filesSubmitted, setFilesSubmitted] = useState<fileSubmitted[]>([])
  const [loading, setloading] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = evt.target
    const filesArray = Array.prototype.slice.call(files) as FileWithTitle[] // convert a FileList to File[]
    const filesWithTitle = filesArray.map((file, index) => {
      file.title ??= file.name?.replace(/\.[^.]+$/, '')
      file.important ??= false
      file.entity ??= ''
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

    const emailAddress = user?.primaryEmailAddress?.emailAddress ?? '' // folderName will be the emailAddress
    await createFolderIfNotExist(emailAddress)
    let countFilesSubmitedSucces = 0
    let countFilesSubmitedError = 0
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const fileName = file.title

      const { signature, timestamp } = await createSignature(
        fileName,
        emailAddress
      )

      const formData = new FormData()
      formData.append('file', file)
      formData.append('api_key', `${API_KEY}`)
      formData.append('timestamp', `${timestamp}`)
      formData.append('signature', signature)
      formData.append('folder', `Certifications/${emailAddress}`)
      formData.append('public_id', fileName)
      formData.append('format', 'jpg')
      formData.append('entity', file.entity)
      formData.append('important', `${file.important}`)
      formData.append('user', `${emailAddress}`)

      try {
        const response: fileSubmitted = await fetch('/api/save-certification', {
          method: 'POST',
          body: formData
        }).then((res) => res.json())
        setFilesSubmitted((prev) => [...prev, response])
        countFilesSubmitedSucces++
      } catch (err: any) {
        console.log('err', err)
        countFilesSubmitedError++
        setFilesSubmitted((prev) => [...prev, err])
      }
    }

    setloading(false)
    toast.success(
      `${countFilesSubmitedSucces} of ${files?.length} Certifications uploaded successfully`
    )
    if (countFilesSubmitedError > 0) {
      toast.error(
        `${countFilesSubmitedError} of ${files?.length} Certifications has an error`
      )
    }
    setFiles([])
    fileInputRef?.current?.form?.reset()
  }

  const updateValue = ({
    newValue,
    property,
    fileName
  }: {
    newValue: string | boolean | number | Date
    property: keyof FileWithTitle
    fileName: string
  }) => {
    const updateFile = files?.map((file) => {
      if (file.name === fileName) {
        //@ts-ignore
        file[property] = newValue
      }
      return file
    }) as FileWithTitle[]
    setFiles(updateFile)
  }

  useEffect(() => {
    if (filesSubmitted.length !== files.length || filesSubmitted.length === 0)
      return

    const countFilesSubmitted = filesSubmitted.reduce(
      (acc, curr) => (curr.submited ? acc + 1 : acc),
      0
    )
    const countFilesErrorSubmitted = filesSubmitted.filter((file) => {
      if (!file.submited) {
        return file.idFile
      }
    })

    toast.success(
      `${countFilesSubmitted} of ${files?.length} Certifications uploaded successfully`
    )
    if (countFilesErrorSubmitted.length > 0) {
      toast.error(
        `${countFilesErrorSubmitted.length} of ${files?.length} Certifications has an error`,
        {
          description: `Error en los archivos ${countFilesErrorSubmitted.map(
            (file) => file.idFile
          )}`
        }
      )
    }
  }, [filesSubmitted])

  return (
    <main className='flex h-screen w-full text-white'>
      <Toaster
        position='bottom-right'
        richColors
        duration={5000}
      />

      <Card className='m-auto max-h-[500px] min-h-[400px] w-full p-4 md:w-min'>
        <CardHeader className='flex-col items-start px-4 pb-0 pt-2'>
          <h4 className='text-large font-bold'>Upload your certifications</h4>
        </CardHeader>
        <CardBody className='py-2'>
          <form className='flex h-max min-h-full flex-col justify-between gap-4'>
            <input
              type='file'
              multiple
              accept='image/*, .pdf'
              onChange={handleFiles}
              className='m-auto'
              ref={fileInputRef}
            />
            <section className='flex h-full w-full flex-col gap-2 '>
              {files?.map((file, index) => (
                <CardUploadCertification
                  file={file}
                  index={index}
                  updateValue={updateValue}
                  key={file.name}
                />
              ))}
            </section>
            <Button
              onClick={submitCertifications}
              isLoading={loading}
              color='primary'
              spinner={<SpinnerIcon />}
            >
              {loading
                ? `Submitting ${filesSubmitted.length} of ${files?.length} files`
                : 'Submit'}
            </Button>
          </form>
        </CardBody>
      </Card>
    </main>
  )
}
