'use client'
import { PlusCircleIcon } from '@heroicons/react/24/outline'
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input
} from '@nextui-org/react'
import { useState } from 'react'
import { registerEntity } from '../actions/registerEntity'
import { toast, Toaster } from 'sonner'

export default function CreateEntity() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [value, setValue] = useState('')

  const submitEntity = async () => {
    const entity = await registerEntity(value)
    if (entity?.modifiedCount === 1) {
      toast.success('Entity created successfully')
      setValue('')
    }
  }
  return (
    <>
      <Toaster position='bottom-right' richColors duration={5000} />
      <Button
        endContent={<PlusCircleIcon className='h-5' />}
        onPress={onOpen}
        className='mb-5 mr-5 self-end justify-self-end'
      >
        Create Entity
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement='top-center'>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className='flex flex-col gap-1'>
                Register a New Entity
              </ModalHeader>
              <ModalBody>
                <Input
                  label='Entity'
                  value={value}
                  variant='bordered'
                  onChange={(e) => {
                    setValue(e.target.value)
                  }}
                />
              </ModalBody>
              <ModalFooter>
                <Button color='danger' variant='light' onPress={onClose}>
                  Close
                </Button>
                <Button color='primary' type='submit' onPress={submitEntity}>
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
      {/* </form> */}
    </>
  )
}
