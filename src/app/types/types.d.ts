export interface Certification {
  _id: string
  date: Date
  entity: string
  fileName: string
  image: string
  isImportant: boolean
  name: string
  aspectRatioImage: number
}

export interface UserType {
  firstname: string
  lastname: string
  username: string
  email: string
  clerkId: string
  certifications: Certification[]
  entities: string[]
}
