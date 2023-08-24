const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? ''

export const getCertifications = async ({
  username,
  email
}: {
  username?: string
  email?: string
}) => {
  let url
  console.log(username, email)

  if (username) {
    url = `${BASE_URL}/api/get-certifications?username=${username}`
  } else if (email) {
    url = `${BASE_URL}/api/get-certifications?email=${email}`
  } else {
    // throw new Error('No username or email provided')
    return 'No username or email provided'
  }
  console.log(url)

  try {
    const response = await fetch(url, {
      next: {
        revalidate: 100000
      }
    })
    const { user } = await response.json()
    console.log(user)

    return user
  } catch (error) {
    console.error('Error fetching certifications:', error)
    return []
  }
}
