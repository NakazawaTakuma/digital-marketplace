import React from "react";
import {
  TabNav,
  TabItem,
} from "../../../components/common/atoms/TabNav/TabNav";

// type SellerTabKey = "home" | "store" | "collection" | "market";
type SellerTabKey = "home" | "store";

const SELLER_TABS: TabItem<SellerTabKey>[] = [
  { key: "home", label: "ホーム" },
  { key: "store", label: "一覧" },
  // { key: "collection", label: "コレクション" },
  // { key: "market", label: "マーケット" },
];

interface SellerNavBarProps {
  activeTab: SellerTabKey;
  onTabChange: (tab: SellerTabKey) => void;
}

const SellerNavBar: React.FC<SellerNavBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <TabNav
      tabs={SELLER_TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
};

export default SellerNavBar;
export type { SellerTabKey };
