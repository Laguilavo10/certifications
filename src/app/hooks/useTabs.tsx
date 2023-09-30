'use client'
import { useState, useEffect } from 'react'
import type { Certification } from '../types/types'
import usePagination from './usePagination'

const useTabs = (
  initialResources: Certification[],
  initialTab: string = 'All'
) => {
  const { resources, currentPage, setCurrentPage, filtered, setFiltered } =
    usePagination({ initialResources, countPerPage: 12 })
  const [selectedTab, setSelectedTab] = useState(initialTab)

  useEffect(() => {
    setCurrentPage(1)
    if (selectedTab === 'All') {
      setFiltered([])
      return
    }

    const filteredResources = initialResources.filter(
      (certification) => certification.entity === selectedTab.toLowerCase()
    )
    setFiltered(filteredResources)
  }, [selectedTab])

  return {
    selectedTab,
    setSelectedTab,
    resources,
    currentPage,
    setCurrentPage,
    countCertifications: filtered.length || initialResources.length
  }
}

export default useTabs
