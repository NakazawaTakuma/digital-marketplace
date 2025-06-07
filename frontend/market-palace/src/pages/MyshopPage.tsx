// pages/SellerProfilePage.tsx
import React from "react";
import MyshopList from "../features/myshop/components/MyshopList";
// タブごとのダミー表示コンポーネント

const MyshopPage: React.FC = () => {
  return (
    <div className="seller-profile">
      <MyshopList />
    </div>
  );
};

export default MyshopPage;
