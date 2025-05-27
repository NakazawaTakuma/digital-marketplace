import React from "react";
import { TabNav, TabItem } from "../../../components/TabNav";

export type NotificationTabKey =
  | "all"
  | "orders"
  | "messages"
  | "activity"
  | "system"
  | "event"
  | "recommend";

const NOTIFICATION_TABS: TabItem<NotificationTabKey>[] = [
  { key: "all", label: "すべて" },
  { key: "orders", label: "取引" },
  { key: "messages", label: "メッセージ" },
  { key: "activity", label: "フォロー" },
  { key: "system", label: "システム" },
  { key: "event", label: "イベント" },
  { key: "recommend", label: "おすすめ" },
];

interface NotificationNavBarProps {
  activeTab: NotificationTabKey;
  onTabChange: (tab: NotificationTabKey) => void;
}

const NotificationNav: React.FC<NotificationNavBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <TabNav
      tabs={NOTIFICATION_TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
};

export default NotificationNav;
