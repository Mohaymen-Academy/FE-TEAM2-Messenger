import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import Login from "./components/auth/SignIn";
import { StoreStateTypes } from "./utils/types";
import NumberVerification from "./components/auth/NumberVerification";
import Register from "./components/auth/Register";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import Playground from "./pages/playground";
import ProtectedRoutes from "./pages/protected/ProtectedRoutes";
import NoMatch from "./pages/NoMatch";
function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  useEffect(() => {}, []);

  return (
    <div className={`${theme} h-full`}>
      <Routes>
        <Route path="" element={<ProtectedRoutes isAuthenticated={false}/>}>
          <Route path="/chat" element={<Chat />} />
        </Route>

        <Route path="/playground" element={<Playground />} />
        
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="varification" element={<NumberVerification />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NoMatch /> } />
        
      </Routes>
      <ToastContainer theme={theme} rtl={true} closeButton={<></>} />
    </div>
  );
}

export default App;
