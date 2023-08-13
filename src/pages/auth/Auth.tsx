import { merge } from "@/utils/merge";
import { Outlet} from "react-router-dom";
import patternLight from "../../assets/img/bgPatternLight.png";
import patternDark from "../../assets/img/bgPatternDark.png";
import { StoreStateTypes } from "@/utils/types";
import { useSelector } from "react-redux";
import Context from "@/components/ui/Context";


const Auth = () => {
  const theme = useSelector((store: StoreStateTypes) => store.app.theme);
  
  return (
    <div className="relative">
      <div
        style={{
          height: false
            ? "calc(100vh - 92px)"
            : false
            ? "calc(100vh - 52px)"
            : "100%",
          background: `url(${
            theme === "dark" ? patternDark : patternLight
          }), linear-gradient(-40deg, ${
            theme === "dark"
              ? "rgba(15, 23, 42, 1), rgba(15, 23, 42, 1)"
              : "rgba(119, 172, 140, 1), rgba(215, 219, 185, 1)"
          })`,
          backgroundBlendMode: "overlay",
        }}
        className={merge("grid place-items-center min-h-screen relative dark")}
      >
        <div className="absolute z-30">
          <Outlet />
          {/* <Context /> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
