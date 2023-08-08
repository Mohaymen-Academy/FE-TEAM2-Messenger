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

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div className={`${theme}`}>
      <ThemeToggle />
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
