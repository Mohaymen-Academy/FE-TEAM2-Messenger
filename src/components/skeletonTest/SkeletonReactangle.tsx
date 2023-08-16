import { merge } from '@/utils/merge'
import React from 'react'

const SkeletonReactangle = ({className}) => {
  return (
    <div
      className={merge("h-4 w-full bg-skeleton-primary animate-pulse", className)}
    ></div>
  );
}

export default SkeletonReactangle