import React from "react";
import Button from "../ui/button/Button";

const DesktopSidebar = () => {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col">
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
      </div>
      <div className="flex flex-col">
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <Button size="lg" />
        <div className="w-full aspect-square bg-orange-400">sd</div>>
      </div>
    </div>
  );
};

export default DesktopSidebar;
