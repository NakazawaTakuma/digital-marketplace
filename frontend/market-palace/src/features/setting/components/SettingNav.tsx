import React from "react";
import { TabNav, TabItem } from "../../../components/TabNav";

export type SettingTabKey =
  | "profile"
  | "account"
  | "notification"
  // | "apiIntegration"
  | "payment"
  | "content"
  | "securityPrivacy";

const SETTING_TABS: TabItem<SettingTabKey>[] = [
  { key: "profile", label: "プロフィール" },
  { key: "account", label: "アカウント" },
  { key: "notification", label: "通知" },
  // { key: "apiIntegration", label: "APIと連携" },
  { key: "payment", label: "支払いと決済" },
  { key: "content", label: "コンテンツ設定" },
  { key: "securityPrivacy", label: "セキュリティとプライバシー" },
];

interface SettingNavBarProps {
  activeTab: SettingTabKey;
  onTabChange: (tab: SettingTabKey) => void;
}

const SettingNav: React.FC<SettingNavBarProps> = ({
  activeTab,
  onTabChange,
}) => {
  return (
    <TabNav
      tabs={SETTING_TABS}
      activeTab={activeTab}
      onTabChange={onTabChange}
    />
  );
};

export default SettingNav;
