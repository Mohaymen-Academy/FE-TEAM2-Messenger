import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <div className="grid place-items-center min-h-screen before:absolute before:bg-lightGradient dark:before:bg-darkBg before:h-full before:w-full before:bg-cover after:bg-lightIcons dark:after:bg-darkIcons after:h-full after:w-full after:absolute before:z-10 after:z-20 relative">
      <div className="absolute z-30">
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;