export const getImages = async () => {
  const URL_API = `https://api.cloudinary.com/v1_1/dyqdtw07b/resources/search/`
  const API_KEY = '381343614963598'
  const API_SECRET = 'HEu2KQMWx7sNfdcU3PxwyVgF0uo'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(
        `${API_KEY}:${API_SECRET}`
      ).toString('base64')})}`
    },
    body: JSON.stringify({ expression: 'folder=Certifications' })
  }
  const data = await fetch(URL_API, options)
  const images = await data.json()
  return images
}