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
import LogOutModal from "./components/modal/LogOutModal";
import TextArea from "./components/feed/input/TextArea";
import MessageInput from "./components/feed/input/MessageInput";
import Controls from "./components/feed/input/Controls";

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div className={`${theme} h-full`}>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="number" element={<NumberVerification />} />
        </Route>

        <Route path="playground" element={<TextArea />} />
      </Routes>
    </div>
  );
}

export default App;
