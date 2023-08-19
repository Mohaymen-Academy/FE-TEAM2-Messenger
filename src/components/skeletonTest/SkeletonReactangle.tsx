import { merge } from "@/utils/merge";

const SkeletonReactangle = ({ className }: { className: string }) => {
  return (
    <div
      className={merge(
        "h-4 w-full bg-skeleton-primary animate-pulse",
        className
      )}
    ></div>
  );
};

export default SkeletonReactangle;
