import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import SignUp from "./components/Login & SignUp/SignUp";

function App() {
  return (

    <div className="dark">
      <Routes >
        <Route path="/Chat" element={<Chat />}/>
        <Route path="/Auth" element={<Auth/>}>
          <Route path="Login" element={<p>11</p>} />
          <Route path="SignUp" element={<SignUp/>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
