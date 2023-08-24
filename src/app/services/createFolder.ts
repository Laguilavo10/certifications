import { BASE_URL } from '../constant/baseUrl'

export const createFolderIfNotExist = async (folderName: string | undefined) => {
  if (folderName === undefined) return
  await fetch(`${BASE_URL}/api/create-folder`, {
    method: 'POST',
    body: JSON.stringify({
      nameFolder: folderName
    })
  })
}
