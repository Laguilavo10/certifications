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

export default function CreateEntity() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [value, setValue] = useState('')

  return (
    <>
      <Button endContent={<PlusCircleIcon className='h-5' />} onPress={onOpen} className='mb-5 self-end justify-self-end mr-5'>
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
                <Button
                  color='primary'
                  onPress={() => {
                    void registerEntity(value)
                  }}
                >
                  Register
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
