const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const getCertifications = async (username: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-certifications?username=${username}`
      , {
        next: {
          revalidate: 100000
        }
      }
    )
    const { user } = await response.json()
    return user
  } catch (error) {
    console.error('Error fetching certifications:', error)
    return []
  }
}
