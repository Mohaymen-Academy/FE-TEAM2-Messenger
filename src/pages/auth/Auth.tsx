import { merge } from "@/utils/merge";
import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div
      className={merge(
        "grid place-items-center min-h-screen bg-lightGradient dark:bg-darkBg after:bg-lightIcons dark:after:bg-darkIcons bg-cover after:absolute after:w-full after:h-full after:-z-10"
      )}
    >
      <Outlet />
    </div>
  );
};

export default Auth;
