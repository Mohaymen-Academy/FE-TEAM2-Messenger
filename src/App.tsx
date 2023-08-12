import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import Login from "./components/auth/SignIn";
import { StoreStateTypes } from "./utils/types";
import ThemeToggle from "./components/conversation/ThemeToggle";
import FloatingLabelInput from "./components/auth/input/FloatingLabelInput";
import SignIn from "./components/auth/SignIn";
import NumberVerification from "./components/auth/NumberVerification";

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div className={`${theme}`}>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="number" element={<NumberVerification/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
