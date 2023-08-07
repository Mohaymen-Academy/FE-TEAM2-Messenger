import { Route, Routes, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/Login & SignUp/SignUp";
import Login from "./components/Login & SignUp/Login";
import { useEffect } from "react";
import { StoreStateTypes } from "./utils/types";

function App() {
  const navigate = useNavigate();
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  useEffect(() => {
    navigate("/auth/login");
  }, []);

  return (
    <div className={`${theme} h-screen`}>
      <Routes>
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Auth" element={<Auth />}>
          <Route path="Login" element={<Login />} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
