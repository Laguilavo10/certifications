'use client'
import { useState, useEffect } from 'react'
import type { Certification } from '../types/types'

const useTabs = (initialResources: Certification[], initialTab: string = 'Todos') => {
  const [selectedTab, setSelectedTab] = useState(initialTab)
  const [certifications, setCertifications] = useState({
    allItems: initialResources,
    currentPage: initialResources.slice(0, 12)
  })

  useEffect(() => {
    if (selectedTab === 'Todos') {
      setCertifications({
        allItems: initialResources,
        currentPage: initialResources.slice(0, 12)
      })
      return
    }

    const filteredResources = initialResources.filter((certification) =>
      certification.entity.includes(selectedTab)
    )

    setCertifications({
      allItems: filteredResources,
      currentPage: filteredResources.slice(0, 12)
    })
  }, [selectedTab, initialResources])

  return {
    selectedTab,
    certifications,
    setSelectedTab,
    setCertifications
  }
}

export default useTabs
