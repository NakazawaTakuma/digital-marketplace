// pages/SellerProfilePage.tsx
import React from "react";

import ProductList from "../components/cards/organisms/ProductList/ProductList";
import SortFilterBar from "../components/cards/molecules/SortFilterBar/SortFilterBar";
// タブごとのダミー表示コンポーネント

const FollowPage: React.FC = () => {
  return (
    <div className="seller-profile">
      <SortFilterBar showRequestOpen={true} />
      <ProductList />
    </div>
  );
};

export default FollowPage;
