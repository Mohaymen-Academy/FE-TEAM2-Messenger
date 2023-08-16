import { merge } from "@/utils/merge";
import { Outlet } from "react-router-dom";
import patternDark from "../../assets/img/bgPatternDark.png";

const Auth = () => {
  const theme = "dark";

  return (
    <div className="relative">
      <div
        style={{
          height: "100%",
          background: `url(${patternDark}), linear-gradient(-40deg, ${
            theme === "dark"
              ? "rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)"
              : "rgba(119, 172, 140, 1), rgba(215, 219, 185, 1)"
          })`,
          backgroundBlendMode: "overlay",
        }}
        className={merge("grid place-items-center min-h-screen relative")}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Auth;
