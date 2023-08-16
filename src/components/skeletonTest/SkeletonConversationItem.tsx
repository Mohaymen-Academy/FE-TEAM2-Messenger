
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonReactangle from "./SkeletonReactangle";



function SkeletonConversationItem() {
  return (
    <div className=" p-2 flex gap-4">
      <SkeletonAvatar className="w-10" />
      <div className="flex flex-col gap-4 w-full justify-center">
        <SkeletonReactangle className="w-[50%]" />
        <SkeletonReactangle className="h-3 w-full" />
      </div>
    </div>
  );
}

export default SkeletonConversationItem