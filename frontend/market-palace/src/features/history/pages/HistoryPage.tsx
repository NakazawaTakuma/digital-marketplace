// pages/SellerProfilePage.tsx
import React, { useState, useEffect } from "react";

import ProductList from "../../../components/common/ProductList";
import SortFilterBar from "../../../components/common/SortFilterBar";
// タブごとのダミー表示コンポーネント

const HistoryPage: React.FC = () => {
  return (
    <div className="seller-profile">
      <SortFilterBar showRequestOpen={true} />
      <ProductList />
    </div>
  );
};

export default HistoryPage;
