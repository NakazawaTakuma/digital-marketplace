import React from "react";
import { TabNav, TabItem } from "@/components/common/atoms/TabNav/TabNav";

export type MyshopTabKey = "contents" | "analytics" | "publisher";

const MTSHOP_TABS: TabItem<MyshopTabKey>[] = [
  { key: "contents", label: "コンテンツ" },
  { key: "analytics", label: "アナリティクス" },
  { key: "publisher", label: "パブリッシャー設定" },
];

interface MyshopNavBarProps {
  activeTab: MyshopTabKey;
  onTabChange: (tab: MyshopTabKey) => void;
}

const MyshopNav: React.FC<MyshopNavBarProps> = ({ activeTab, onTabChange }) => {
  return (
    <TabNav
      tabs={MTSHOP_TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
};

export default MyshopNav;
