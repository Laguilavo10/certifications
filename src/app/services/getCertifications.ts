const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const getCertifications = async (email: string) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/get-certifications?email=${email}`
      // , {
      //   next: {
      //     revalidate: 0
      //   }
      // }
    )
    const { user } = await response.json()
    return user?.certifications
  } catch (error) {
    console.error('Error fetching certifications:', error)
    return []
  }
}
