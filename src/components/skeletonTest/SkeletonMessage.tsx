
import React from "react";
import SkeletonAvatar from "./SkeletonAvatar";
import SkeletonReactangle from "./SkeletonReactangle";

interface SkeletonMessageProps {
  sentByCurrentUser: boolean;
  groupMessage: boolean;
}

const SkeletonMessage = ({ sentByCurrentUser, groupMessage }) => {
  return (
    <div
      className={`
        relative
        p-2
        gap-2
        justify-${sentByCurrentUser ? "end" : "start"}
        ${!sentByCurrentUser && groupMessage && "flex flex-row-reverse"}
      `}
    >
      {!sentByCurrentUser && groupMessage && (
        <div className="flex justify-end self-end flex-row-reverse gap-2">
          <div className="h-full self-end">
            <SkeletonAvatar />
          </div>
          <div className="w-full flex flex-col gap-3 bg-slate-400 rounded-2xl p-4">
            <SkeletonReactangle className="h-2 w-32" />
            <SkeletonReactangle className="h-2 w-32" />
            <SkeletonReactangle className="h-2 w-32" />
            <SkeletonReactangle className="h-2 w-32" />
            <SkeletonReactangle className="h-2 w-32" />
          </div>
        </div>
      )}
      <div className="flex flex-col gap-1 w-full relative">
        <div
          className={`
            flex
            items-center
            gap-2
            justify-${sentByCurrentUser ? "start" : "end"}
            ${!sentByCurrentUser && "flex-row-reverse self-end"}
          `}
        ></div>
        <div
          className={`
            flex 
            justify-${sentByCurrentUser ? "start" : "end"}
            relative
          `}
        >
          <div>
            {sentByCurrentUser && (
              <div className="flex flex-col gap-3 bg-slate-400 rounded-2xl p-4">
                <SkeletonReactangle className="h-2 w-32" />
                <SkeletonReactangle className="h-2 w-32" />
                <SkeletonReactangle className="h-2 w-32" />
                <SkeletonReactangle className="h-2 w-32" />
                <SkeletonReactangle className="h-2 w-32" />
              </div>
            )}
            {!sentByCurrentUser && !groupMessage && (
              <div className="flex justify-end self-end flex-row-reverse gap-2 bg-slate-400 rounded-2xl p-4">
                <div className="w-full flex flex-col gap-3 ">
                  <SkeletonReactangle className="h-2 w-32" />
                  <SkeletonReactangle className="h-2 w-32" />
                  <SkeletonReactangle className="h-2 w-32" />
                  <SkeletonReactangle className="h-2 w-32" />
                  <SkeletonReactangle className="h-2 w-32" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonMessage;
