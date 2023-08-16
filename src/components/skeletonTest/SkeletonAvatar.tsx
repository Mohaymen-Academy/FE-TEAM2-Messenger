import { merge } from '@/utils/merge'
import React from 'react'
import { HTMLAttributes } from "react";

interface skeletonAvatarProps extends HTMLAttributes<HTMLDivElement> {

}

const SkeletonAvatar: React.FC<skeletonAvatarProps> = ({className, children ,...props}) => {
  return (
    <div
      className={merge(
        "aspect-square p-7 text-center animate-pulse rounded-full bg-skeleton-primary ",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export default SkeletonAvatar