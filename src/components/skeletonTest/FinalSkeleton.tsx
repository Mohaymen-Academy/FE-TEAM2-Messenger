import React from 'react'
import SkeletonConversationWraaper from './SkeletonConversationWraaper'
import SkeletonMessage from './SkeletonMessage';




const FinalSkeleton = () => {
  return (
    <div>
     <SkeletonMessage sentByCurrentUser={false} groupMessage={true}/>
     <SkeletonMessage sentByCurrentUser={true} groupMessage={false}/>
     <SkeletonMessage sentByCurrentUser={false} groupMessage={false}/>
    </div>
  );
}

export default FinalSkeleton