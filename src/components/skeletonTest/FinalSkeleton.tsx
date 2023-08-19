import SkeletonConversationWraaper from "./SkeletonConversationWraaper";
import SkeletonConversationItem from "./SkeletonConversationItem";

const FinalSkeleton = () => {
  return (
    <div>
      <SkeletonConversationWraaper className={"flex flex-col gap-2"}>
        <SkeletonConversationItem />
        <SkeletonConversationItem />
        <SkeletonConversationItem />
        <SkeletonConversationItem />
        <SkeletonConversationItem />
      </SkeletonConversationWraaper>
    </div>
  );
};

export default FinalSkeleton;
