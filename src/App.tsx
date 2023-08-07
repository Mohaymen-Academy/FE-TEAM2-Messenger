import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/Login & SignUp/SignUp";
import Login from "./components/Login & SignUp/Login";
import Emoji from "@/components/input/Emoji";

function App() {
  const { theme } = useSelector((store) => store.app);

  return (
    <div className={`${theme}`}>
      <ThemeToggle />

      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="test" element={<Emoji />} />
      </Routes>
    </div>
  );
}

export default App;
