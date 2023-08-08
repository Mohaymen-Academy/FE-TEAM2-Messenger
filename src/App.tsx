import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";

import Emoji from "./components/feed/input/Emoji";
import { StoreStateTypes } from "./utils/types";

function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

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
