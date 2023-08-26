import type { Certification } from '../types/types'

export function sortCertifications(certifications: Certification[]) {
  certifications.forEach((certification) => {
    certification.date = new Date(certification.date)
  })

  // sort if isImportant first and by date
  certifications.sort((a, b) => {
    if (a.isImportant && !b.isImportant) {
      return -1
    } else if (!a.isImportant && b.isImportant) {
      return 1
    } else {
      return b.date.getTime() - a.date.getTime()
    }
  })

  return certifications
}
