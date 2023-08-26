'use client'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure
} from '@nextui-org/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import type { Certification } from '../types/types'
import { deleteCertification } from '../actions/deleteCertification'
import { toast } from 'sonner'

interface Props {
  certification: Certification
}
export default function DeleteCertificationButton({ certification }: Props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  const submitDelete = async (onClose: () => void) => {
    const file = await deleteCertification(certification)
    if (file?.modifiedCount === 1) {
      toast.success('File remove successfully')
      onClose()
    }
  }

  return (
    <>
      <Button
        isIconOnly
        onPress={onOpen}
        color='danger'
        variant='light'
        aria-label='Take a photo'
      >
        <TrashIcon className='h-6 ' />
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Eliminar Certificación
              </ModalHeader>
              <ModalBody>
                <p>Estas seguro que quieres eliminar esta certificación?</p>
              </ModalBody>
              <ModalFooter>
                <Button color='primary' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button
                  color='danger'
                  onPress={() => {
                    void submitDelete(onClose)
                  }}
                >
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
