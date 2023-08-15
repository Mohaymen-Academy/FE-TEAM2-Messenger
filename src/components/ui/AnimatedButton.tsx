import Button from "./Button";
import { IconType } from "react-icons";
import clsx from "clsx";
import { merge } from "@/utils/merge";

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  FirstIcon: IconType;
  SecondIcon: IconType;
  isActive: boolean;
  size? : number
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  FirstIcon,
  SecondIcon,
  isActive,
  size=30,
  className,
  ...props
}) => {
  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        className={merge("group icon-button relative w-12 h-12 hover:bg-transparent dark:hover:bg-hover md:hover:bg-btn-ghost", className)}
        {...props}
      >
        <FirstIcon
          size={size}
          className={clsx(" absolute transition-all duration-300 icon-button", {
            "scale-0": isActive,
            "scale-100": !isActive,
            "-rotate-90": isActive,
            "rotate-0": !isActive,
          })}
        />
        <SecondIcon
          size={size}
          className={clsx("icon-button absolute transition-all duration-300", {
            "rotate-0": isActive,
            "scale-0": !isActive,
            "scale-100": isActive,
            "rotate-90": !isActive,
          })}
        />
        <span className="sr-only">Toggle Button</span>
      </Button>
    </>
  );
};

export default AnimatedButton;
