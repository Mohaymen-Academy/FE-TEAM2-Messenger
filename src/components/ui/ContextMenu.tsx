import React from "react";

interface ContextMenuProps {
  children: React.ReactNode;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ children }) => {
  return (
    <div className="bg-secondary w-full flex flex-col items-center p-1 rounded-xl">
      {children}
    </div>
  );
};

export default ContextMenu;
