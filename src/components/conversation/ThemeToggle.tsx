import { toggleTheme } from "@/redux/Slices/appSlice";
import { BiMoon, BiSun } from "react-icons/bi";
import { useDispatch } from "react-redux";
import Button from "../ui/button/Button";

const ThemeToggle = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => dispatch(toggleTheme())}
        className="group relative hover:bg-slate-200/50"
      >
        <BiSun className="rotate-0 icon scale-100 transition-all duration-300 dark:hover dark:-rotate-90 dark:scale-0 " />
        <BiMoon className="absolute icon rotate-90 scale-0 transition-all duration-300  dark:rotate-0 dark:scale-100" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};

export default ThemeToggle;
