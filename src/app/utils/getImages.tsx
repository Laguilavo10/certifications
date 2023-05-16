
export const getImages = async () => {
  const options : RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(
        `${process.env.NEXT_PUBLIC_API_KEY}:${process.env.NEXT_PUBLIC_API_SECRET}`
      ).toString('base64')})}`
    },
    body: JSON.stringify({ expression: 'folder=Certifications/*' })
  }
  const data = await fetch(process.env.NEXT_PUBLIC_URL_API as string, options)
  const images = await data.json()
  return images
}

