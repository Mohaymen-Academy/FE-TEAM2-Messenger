import Button from "./Button";
import { IconType } from "react-icons";
import clsx from "clsx";

interface AnimatedButtonProps {
  onClick: () => void;
  FirstIcon: IconType;
  SecondIcon: IconType;
  isActive: boolean;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  onClick,
  FirstIcon,
  SecondIcon,
  isActive,
}) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="ghost"
        size="sm"
        className="group relative w-12 h-12 hover:bg-transparent dark:hover:bg-transparent md:hover:bg-btn-ghost"
      >
        <FirstIcon
          size={30}
          className={clsx("absolute transition-all duration-300", {
            "scale-0": isActive,
            "scale-100": !isActive,
            "-rotate-90": isActive,
            "rotate-0": !isActive,
          })}
        />
        <SecondIcon
          size={30}
          className={clsx("absolute transition-all duration-300", {
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
