import { auth } from '@clerk/nextjs'
import { BASE_URL } from '../constant/baseUrl'

export const deleteFile = async (publicIdFile: string | undefined) => {
  if (publicIdFile === undefined) return
  console.log(publicIdFile)

  if (typeof window === 'undefined') {
    const user = auth()
    const token = (await user.getToken()) as string

    const response = await fetch(`${BASE_URL}/api/delete-file`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        mode: 'cors'
      },
      body: JSON.stringify({
        publicId: publicIdFile
      })
    }).then(async (res) => await res.json())

    return response?.user
  }

  const response = await fetch(`${BASE_URL}/api/delete-file`, {
    method: 'POST',
    body: JSON.stringify({
      publicId: publicIdFile
    })
  })
    .then(async res => await res.json())
  console.log(response)
  return response
}
