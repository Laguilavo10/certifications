const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const deleteFile = async (publicIdFile: string | undefined) => {
  if (publicIdFile === undefined) return
  console.log(publicIdFile)

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
