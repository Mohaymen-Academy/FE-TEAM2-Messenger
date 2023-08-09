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
        className="group relative w-14 h-14"
      >
        <BiSun
          size={30}
          className="rotate-0 scale-100 transition-all duration-300 dark:hover dark:-rotate-90 dark:scale-0 sidebar-icon"
        />
        <BiMoon
          size={30}
          className="absolute rotate-90 scale-0 transition-all duration-300  dark:rotate-0 dark:scale-100 sidebar-icon"
        />
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
};

export default ThemeToggle;
