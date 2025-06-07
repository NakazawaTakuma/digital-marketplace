import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import ProductPage from "./pages/ProductPage";
import SellerProfilePage from "./pages/SellerProfilePage";
import HomePage from "./pages/HomePage";
import FollowPage from "./pages/FollowPage";
import FavoritePage from "./pages/FavoritePage";
import MyshopPage from "./pages/MyshopPage";
import NotificationPage from "./pages/NotificationPage";
import HistoryPage from "./pages/HistoryPage";
import SettingPage from "./pages/SettingPage";
import PasswordResetConfirmPage from "./pages/PasswordResetConfirmPage";
import ShopRedirect from "@/routes/ShopRedirect";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="follow/*" element={<FollowPage />} />
        <Route path="favorite/*" element={<FavoritePage />} />
        <Route path="myshop/*" element={<MyshopPage />} />
        <Route path="notification/*" element={<NotificationPage />} />
        <Route path="history/*" element={<HistoryPage />} />
        <Route path="setting/*" element={<SettingPage />} />
        <Route path="products/*" element={<ProductPage />} />
        <Route path="shop" element={<ShopRedirect />} />
        {/** /shop に来たら、/* へリダイレクト */}
        <Route path="shop/:slug/*" element={<SellerProfilePage />} />
        <Route path="reset-password" element={<PasswordResetConfirmPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
