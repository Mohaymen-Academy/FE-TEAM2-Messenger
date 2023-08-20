import React from 'react'
import SkeletonConversationWraaper from './SkeletonConversationWraaper'
import SkeletonMessage from './SkeletonMessage';
import SkeletonConversationItem from './SkeletonConversationItem';

const FinalSkeleton = () => {
  return (
    <div className='w-full flex flex-col'>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
     <SkeletonConversationItem/>
    </div>
  );
};

export default FinalSkeleton;
