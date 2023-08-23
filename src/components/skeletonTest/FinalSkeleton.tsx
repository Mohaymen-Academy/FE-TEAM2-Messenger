import SkeletonConversationItem from "./SkeletonConversationItem";

const FinalSkeleton = () => {
  return (
    <div className="w-full flex flex-col">
      {Array.from({ length: 10 }).map((_, i) => (
        <SkeletonConversationItem key={i} />
      ))}
    </div>
  );
};

export default FinalSkeleton;
