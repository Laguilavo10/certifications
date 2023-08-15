export const createFolderIfNotExist = async (folderName: string | undefined) => {
  if (folderName === undefined) return
  const data = await fetch('/api/create-folder', {
    method: 'POST',
    body: JSON.stringify({
      nameFolder: folderName
    })
  })
}
