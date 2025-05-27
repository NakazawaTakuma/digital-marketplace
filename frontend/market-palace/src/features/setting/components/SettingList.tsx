// src/components/SettingList.tsx
import React, { useState } from "react";
import SettingNav, { SettingTabKey } from "./SettingNav";

import styles from "./SettingList.module.css";

// 各設定コンポーネントをインポート
import ProfileSettings from "./ProfileSettings";
import AccountSettings from "./AccountSettings";
import NotificationSettings from "./NotificationSettings";
// import ApiIntegrationSettings from "./ApiIntegrationSettings";
import PaymentSettings from "./PaymentSettings";
import ContentSettings from "./ContentSettings";
import SecurityPrivacySettings from "./SecurityPrivacySettings";

const SettingList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SettingTabKey>("profile");

  const handleTabChange = (tab: SettingTabKey) => {
    setActiveTab(tab);
  };

  // activeTab に対応するコンポーネントを返す関数
  const renderActiveSetting = () => {
    switch (activeTab) {
      case "profile":
        return <ProfileSettings />;
      case "account":
        return <AccountSettings />;
      case "notification":
        return <NotificationSettings />;
      // case "apiIntegration":
      //   return <ApiIntegrationSettings />;
      case "payment":
        return <PaymentSettings />;
      case "content":
        return <ContentSettings />;
      case "securityPrivacy":
        return <SecurityPrivacySettings />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.navContainer}>
        <SettingNav activeTab={activeTab} onTabChange={handleTabChange} />
      </aside>
      <section className={styles.contentContainer}>
        {renderActiveSetting()}
      </section>
    </div>
  );
};

export default SettingList;
