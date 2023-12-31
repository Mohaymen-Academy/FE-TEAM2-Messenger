import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Chat from "./pages/chat/Chat";
import Auth from "./pages/auth/Auth";
import Login from "./components/auth/SignIn";
import { StoreStateTypes } from "./utils/types";
import NumberVerification from "./components/auth/NumberVerification";
import Register from "./components/auth/Register";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Playground from "./pages/playground";
import ProtectedRoutes from "./pages/protected/ProtectedRoutes";
import ImageModal from "./components/modal/ImageModal";
import LogOutModal from "./components/modal/LogOutModal";
import NoMatch from "./pages/NoMatch";
import CropperModal from "./components/modal/CropperModal";
function App() {
  const { theme, profileImageURL } = useSelector((store: StoreStateTypes) => store.app);

  return (
    <div className={`${theme} h-full`}>
      <ImageModal />
      <LogOutModal />
      <CropperModal imgURL={profileImageURL} />
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoutes
              // isAuthenticated={!!localStorage.getItem("refresh_token")}
              isAuthenticated={true}
            />
          }
        >
          <Route path="/chat" element={<Chat />} />
        </Route>

        <Route path="/playground" element={<Playground />} />

        <Route path="/auth" element={<Auth />}>
          <Route path="sign-in" element={<Login />} />
          <Route path="verification" element={<NumberVerification />} />
          <Route path="register" element={<Register />} />
        </Route>

        <Route path="*" element={<NoMatch />} />
      </Routes>
      <ToastContainer theme={theme} rtl={true} />
    </div>
  );
}

export default App;
