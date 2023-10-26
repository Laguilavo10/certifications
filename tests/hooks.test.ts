import useTabs from '@/app/hooks/useTabs'
import usePagination from '@/app/hooks/usePagination'
import { renderHook, act } from '@testing-library/react'
import type { Certification } from '@/app/types/types'

describe('usePagination', () => {
  // create an array of 50 elements
  const initialResources = Array.from(
    { length: 50 },
    (_, index) => index + 1
  ) as unknown as Certification[]

  test('should return the correct initial values', () => {
    const { result } = renderHook(() => usePagination({ initialResources }))

    // validate the initial values
    expect(result.current.resources).toEqual(initialResources.slice(0, 12))
    expect(result.current.currentPage).toBe(1)

    // validate the filtered values of the second page
    act(() => {
      result.current.setCurrentPage(2)
    })
    expect(result.current.resources).toEqual(initialResources.slice(12, 24))
    expect(result.current.currentPage).toBe(2)
  })

  test('should return the correct values for page', () => {
    const { result } = renderHook(() => usePagination({ initialResources }))

    // validate the initial values
    expect(result.current.resources).toEqual(initialResources.slice(0, 12))
    expect(result.current.currentPage).toBe(1)

    // validate the filtered values of the second page
    act(() => {
      result.current.setCurrentPage(2)
    })
    expect(result.current.resources).toEqual(initialResources.slice(12, 24))
    expect(result.current.currentPage).toBe(2)
  })
})

describe('useTabs', () => {
  const certifications = [
    { id: 1, name: 'Certification 1', entity: 'entity 1' },
    { id: 2, name: 'Certification 2', entity: 'entity 2' },
    { id: 3, name: 'Certification 3', entity: 'entity 1' },
    { id: 4, name: 'Certification 4', entity: 'entity 3' },
    { id: 5, name: 'Certification 5', entity: 'entity 2' },
    { id: 6, name: 'Certification 6', entity: 'entity 1' },
    { id: 7, name: 'Certification 7', entity: 'entity 3' },
    { id: 8, name: 'Certification 8', entity: 'entity 2' },
    { id: 9, name: 'Certification 9', entity: 'entity 1' },
    { id: 10, name: 'Certification 10', entity: 'entity 3' },
    { id: 11, name: 'Certification 11', entity: 'entity 2' },
    { id: 12, name: 'Certification 12', entity: 'entity 1' },
    { id: 13, name: 'Certification 13', entity: 'entity 3' },
    { id: 14, name: 'Certification 14', entity: 'entity 2' },
    { id: 15, name: 'Certification 15', entity: 'entity 1' },
    { id: 16, name: 'Certification 16', entity: 'entity 3' },
    { id: 17, name: 'Certification 17', entity: 'entity 2' },
    { id: 18, name: 'Certification 18', entity: 'entity 1' },
    { id: 19, name: 'Certification 19', entity: 'entity 3' },
    { id: 20, name: 'Certification 20', entity: 'entity 2' }
  ] as unknown as Certification[]

  test('should return the correct initial values', () => {
    const { result } = renderHook(() => useTabs(certifications))

    expect(result.current.selectedTab).toBe('All')
    expect(result.current.resources).toEqual(certifications.slice(0, 12))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.countCertifications).toBe(certifications.length)
  })

  test('should update the selected tab and filtered resources correctly', () => {
    const { result } = renderHook(() => useTabs(certifications))
    let entity = 'entity 1'
    expect(result.current.selectedTab).toBe('All')
    expect(result.current.resources).toEqual(certifications.slice(0, 12))
    expect(result.current.currentPage).toBe(1)
    expect(result.current.countCertifications).toBe(certifications.length)

    act(() => {
      result.current.setSelectedTab(entity)
    })

    expect(result.current.selectedTab).toBe(entity)
    expect(result.current.resources).toEqual(
      certifications.filter((c) => c.entity === entity)
    )
    expect(result.current.currentPage).toBe(1)
    expect(result.current.countCertifications).toBe(
      certifications.filter((c) => c.entity === entity).length
    )

    // entity 2
    entity = 'entity 2'

    act(() => {
      result.current.setSelectedTab(entity)
    })

    expect(result.current.selectedTab).toBe(entity)
    expect(result.current.resources).toEqual(
      certifications.filter((c) => c.entity === entity)
    )
    expect(result.current.currentPage).toBe(1)
    expect(result.current.countCertifications).toBe(
      certifications.filter((c) => c.entity === entity).length
    )

    // entity 3
    entity = 'entity 3'

    act(() => {
      result.current.setSelectedTab(entity)
    })

    expect(result.current.selectedTab).toBe(entity)
    expect(result.current.resources).toEqual(
      certifications.filter((c) => c.entity === entity)
    )
    expect(result.current.currentPage).toBe(1)
    expect(result.current.countCertifications).toBe(
      certifications.filter((c) => c.entity === entity).length
    )
  })
})
