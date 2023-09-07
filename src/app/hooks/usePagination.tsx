'use client'
import { useEffect, useState } from 'react'
import type { Certification } from '../types/types'
interface Props {
  initialResources: Certification[]
  countPerPage?: number
}
export default function usePagination({
  initialResources,
  countPerPage = 12
}: Props) {
  const [currentPage, setCurrentPage] = useState(1)
  const [resources, setResources] = useState<Certification[]>([])

  useEffect(() => {
    const startIndex = (currentPage - 1) * countPerPage
    const endIndex = startIndex + countPerPage
    const newResources = initialResources.slice(startIndex, endIndex)
    setResources(newResources)
  }, [currentPage])

  return {
    resources,
    setResources,
    currentPage,
    setCurrentPage
  }
}
