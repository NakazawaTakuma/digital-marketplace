// src/components/MyshopList.tsx
import React, { useState } from "react";
import MyshopNav, { MyshopTabKey } from "./MyshopNav";

import styles from "./MyshopList.module.css";

// 各設定コンポーネントをインポXート
import MyshopContents from "./MyshopContents";
import MyshopAnalytics from "./MyshopAnalytics";
import PublisherSettings from "./PublisherSettings";

const MyshopList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MyshopTabKey>("contents");

  const handleTabChange = (tab: MyshopTabKey) => {
    setActiveTab(tab);
  };

  // activeTab に対応するコンポーネントを返す関数
  const renderActiveMyshop = () => {
    switch (activeTab) {
      case "contents":
        return <MyshopContents />;
      case "analytics":
        return <MyshopAnalytics />;
      case "publisher":
        return <PublisherSettings />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <aside className={styles.navContainer}>
        <MyshopNav activeTab={activeTab} onTabChange={handleTabChange} />
      </aside>
      <section className={styles.contentContainer}>
        {renderActiveMyshop()}
      </section>
    </div>
  );
};

export default MyshopList;
