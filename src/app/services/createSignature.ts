import { BASE_URL } from '../constant/baseUrl'

export const createSignature = async (fileName: string, folder: string) => {
  try {
    const data = await fetch(`${BASE_URL}/api/create-signature`, {
      method: 'POST',
      body: JSON.stringify({ fileName, folder })
    })
    const { signature, timestamp }: { signature: string, timestamp: number } =
      await data.json()
    return { signature, timestamp }
  } catch (error) {
    console.error(error)
    throw error
  }
}
