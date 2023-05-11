'use client'
import React, { PropsWithChildren } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export const ImageZoom = (props: PropsWithChildren) => {
  return <Zoom >{props.children}</Zoom>
}
