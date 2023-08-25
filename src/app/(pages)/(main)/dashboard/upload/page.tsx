import { Toaster } from 'sonner'
import CreateEntity from '@/app/components/CreateEntity'
import { getData } from '@/app/services/getData'
import { currentUser } from '@clerk/nextjs'
import UploaderCard from '@/app/components/UploaderCard'

export default async function Upload() {
  const user = await currentUser()
  const emailAddress = user?.emailAddresses[0].emailAddress ?? '' // folderName will be the emailAddress
  console.log(emailAddress)
  const data = await getData({
    email: emailAddress,
    propertiesToGet: ['entities']
  })
  console.log(data.entities)
  return (
    <main className='m-auto flex h-full min-h-screen max-w-8xl flex-col pt-14'>
      <Toaster position='bottom-right' richColors duration={5000} />
      <CreateEntity />
      <UploaderCard emailAddress={emailAddress} entities={data?.entities} />
    </main>
  )
}
