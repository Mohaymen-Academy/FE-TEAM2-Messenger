import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Paragraph from "./components/ui/paragraph/Paragraph";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/Login & SignUp/SignUp";

function App() {
  const { theme } = useSelector((store) => store.app);

  return (
    <div className={`${theme}`}>
      <ThemeToggle />
      <Routes>
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Auth" element={<Auth />}>
          <Route path="Login" element={<p>11</p>} />
          <Route path="SignUp" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
