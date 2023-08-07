import { useSelector } from "react-redux";
import ThemeToggle from "./components/conversation/ThemeToggle";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

import Emoji from "./components/feed/input/Emoji";
import { useEffect } from "react";
import { StoreStateTypes } from "./utils/types";

function App() {
  const navigate = useNavigate();
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  // useEffect(() => {
  //   navigate("/auth/login");
  // }, []);

  return (
    <div className={`${theme}`}>
      <Routes>
        <Route path="/chat" element={<Chat />} />
        <Route path="/auth" element={<Auth />}>
          <Route index path="login" element={<Login />} />
          <Route path="sign-up" element={<SignUp />} />
        </Route>
        <Route path="test" element={<Emoji />} />
      </Routes>
    </div>
  );
}

export default App;
