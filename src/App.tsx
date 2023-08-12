//@ts-nocheck
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import Login from "./components/auth/SignIn";
import { StoreStateTypes } from "./utils/types";
import Button from "./components/ui/button/Button";
import AnimatedButton from "../src/components/ui/AnimatedButton";
import NumberVerification from "./components/auth/NumberVerification";
import { Toaster } from "react-hot-toast";
import Register from "./components/auth/Register";

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div className={`${theme} h-full`}>
      {/* <div className="w-40 h-40 bg-red-500 bubble-corner"></div> */}
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="numberVerification" element={<NumberVerification />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
      <Toaster />
    </div>
  );
}

export default App;
