// pages/SellerProfilePage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AccountCard from "../components/AccountCard";
import SellerNavBar from "../components/SellerNavBar";
import ProductList from "../../../components/common/ProductList";
import MarketList from "../components/MarketList";
import CollectionList from "../components/CollectionList";

import SortFilterBar from "../../../components/common/SortFilterBar";

// タブごとのダミー表示コンポーネント

type TabKey = "home" | "store" | "collection" | "market";

const SellerProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const navigate = useNavigate();

  const handleTabChange = (tab: TabKey) => {
    setActiveTab(tab);
  };

  // activeTab の変更に合わせて URL を /shop以下に同期
  useEffect(() => {
    const base = "/shop";
    navigate(activeTab === "home" ? base : `${base}/${activeTab}`, {
      replace: true,
    });
  }, [activeTab, navigate]);

  const snsLinks = [
    { name: "Twitter", url: "https://twitter.com/youraccount" },
    { name: "Instagram", url: "https://instagram.com/youraccount" },
    { name: "Facebook", url: "https://facebook.com/youraccount" },
  ];

  return (
    <div className="seller-profile">
      <AccountCard
        accountName="SALE SELLER"
        description={`
        こんにちは！  
        このアカウントでは以下の情報を発信しています。
        公式サイト: https://example.com
        `}
        snsLinks={snsLinks}
        followernum={24230}
      />

      <SellerNavBar activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === "home" && (
        <>
          <SortFilterBar showRequestOpen={false} />
          <ProductList />
        </>
      )}
      {activeTab === "store" && (
        <>
          <SortFilterBar showRequestOpen={false} />
          <ProductList />
        </>
      )}
      {activeTab === "collection" && <CollectionList />}
      {activeTab === "market" && <MarketList />}
    </div>
  );
};

export default SellerProfilePage;
