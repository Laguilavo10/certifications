'use client'
import React, { useState } from 'react'

export function LoadingSkeleton({
  children
}: {
  children: React.ReactElement<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>
}) {
  const [isImgLoaded, setIsImgLoaded] = useState<boolean>(false)
  const modifyChildren = React.cloneElement(children, {
    onLoad: () => {
      setIsImgLoaded(true)
    }
  })
  return (
    <div
      className={`${
        !isImgLoaded && 'animate-pulse'
      }  bg-slate-300 h-full w-full`}>
      {modifyChildren}
    </div>
  )
}