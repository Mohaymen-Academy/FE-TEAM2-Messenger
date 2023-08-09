//@ts-nocheck
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import Login from "./components/auth/SignIn";
import Emoji from "./components/feed/input/Emoji";
import { StoreStateTypes } from "./utils/types";
import ThemeToggle from "./components/conversation/ThemeToggle";
import FloatingLabelInput from "./components/auth/input/FloatingLabelInput";
import SignIn from "./components/auth/SignIn";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);
  // const scrollProxy = ScrollTrigger.normalizeScroll();

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.normalizeScroll({
        allowNestedScroll: true,
        lockAxis: false,
        momentum: (self) => Math.min(3, self.velocityY / 1000), // dynamically control the duration of the momentum when flick-scrolling
        type: "touch,wheel,pointer", // now the page will be drag-scrollable on desktop because "pointer" is in the list
      });
    }, 500);
  }, []);

  return (
    <div className={`my-trigger ${theme}`}>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route index path="sign-in" element={<Login />} />
        </Route>
        {/* <Route path="test" element={<FloatingLabelInput label="salam" />} /> */}
      </Routes>
    </div>
  );
}

export default App;
