import { Outlet } from "react-router-dom";
import Header from "./components/common/organisms/Header/Header";
import Sidebar from "./components/common/organisms/Sidebar/Sidebar";
import { AuthProvider } from "./contexts/AuthProvider";
import AuthModal from "./components/auth/organisms/AuthModal/AuthModal";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <div className="app-container">
        <Header />
        <div className="main-layout">
          <Sidebar />
          <div className="content-area">
            <AuthModal />
            <Outlet />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
