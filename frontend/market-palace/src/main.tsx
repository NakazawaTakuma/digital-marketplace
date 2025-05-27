import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import ProductPage from "./features/products/pages/ProductPage";
import SellerProfilePage from "./features/seller/pages/SellerProfilePage";
import HomePage from "./features/home/pages/HomePage";
import FollowPage from "./features/follow/pages/FollowPage";
import FavoritePage from "./features/favorite/pages/FavoritePage";
import MyshopPage from "./features/myshop/pages/MyshopPage";
import NotificationPage from "./features/notification/pages/NotificationPage";
import HistoryPage from "./features/history/pages/HistoryPage";
import SettingPage from "./features/setting/pages/SettingPage";

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
        <Route path="shop/*" element={<SellerProfilePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
