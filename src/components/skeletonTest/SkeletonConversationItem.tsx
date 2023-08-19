
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonReactangle from "./SkeletonReactangle";



function SkeletonConversationItem() {
  return (
    <div className="p-4 flex gap-4 w-full">
      <div>
        <SkeletonAvatar className="w-10" />
      </div>
      <div className="flex flex-col gap-4 w-full justify-center">
        <SkeletonReactangle className="w-[30%] h-3 rounded-md" />
        <SkeletonReactangle className="h-2 md:w-[90%]  w-full rounded-xl" />
      </div>
    </div>
  );
}

export default SkeletonConversationItem