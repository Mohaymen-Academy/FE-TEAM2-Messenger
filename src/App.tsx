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
import LogOutModal from "./components/modal/LogOutModal";
// import Playground from "./pages/playground";
import Playground from "./pages/playground";
import NoMatch from "./pages/NoMatch";
import FinalSkeleton from "./components/skeletonTest/FinalSkeleton";
function App() {
  const { theme } = useSelector((store: StoreStateTypes) => store.app);

  const navigate = useNavigate();

  useEffect(() => {}, []);

  return (
    <div className={`${theme} h-full`}>
      {/* <div className="w-40 h-40 bg-red-500 bubble-corner"></div> */}
      <Routes>
        <Route
          path="/"
          element={
            <button
              onClick={() => navigate("/chat")}
              className="bg-slate-200 p-4"
            >
              go to main page
            </button>
          }
        />
        <Route path="/chat" element={<Chat />} />
        <Route path="/playground" element={<NoMatch />} />
        <Route path="/playground" element={<Playground />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="numberVerification" element={<NumberVerification />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* <Route path="playground" element={<Test />} /> */}
      </Routes>
      <ToastContainer theme={theme} rtl={true} closeButton={<></>} />
    </div>
  );
}

export default App;
