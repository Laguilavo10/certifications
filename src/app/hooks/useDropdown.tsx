'use client'
import { useMemo, useState } from 'react'

export function useDropdown(initialValue: string) {
  const [selectedKeys, setSelectedKeys] = useState(new Set([initialValue]))

  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(', ').replaceAll('_', ' '),
    [selectedKeys]
  )
  return { selectedKeys, setSelectedKeys, selectedValue }
}
