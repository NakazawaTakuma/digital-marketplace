// src/components/NotificationList.tsx
import React, { useState } from "react";
import NotificationCard from "./NotificationCard";
import NotificationNav, { NotificationTabKey } from "./NotificationNav";

import styles from "./NotificationList.module.css";

import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import Icon800x1200 from "@root/tests/assets/Icon800x1200.png";
import PC3840x2400 from "@root/tests/assets/pc3840x2400.jpeg";

interface NotificationData {
  id: number;
  imageUrl: string;
  description: string;
  date: Date;
}

const sampleNotifications: NotificationData[] = [
  {
    id: 1,
    imageUrl: Icon800x800,
    description: "新しいコメントが投稿されました。",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3日前
  },
  {
    id: 2,
    imageUrl: Icon800x1200,
    description: "新しいコメントが投稿されました。",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1週間前
  },
  {
    id: 3,
    imageUrl: PC3840x2400,
    description: "新しいコメントが投稿されました。",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1か月前
  },
  {
    id: 4,
    imageUrl: Icon800x800,
    description: "新しいコメントが投稿されました。",
    date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3日前
  },
  {
    id: 5,
    imageUrl: Icon800x1200,
    description: "週次レポートが利用可能です。",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 1週間前
  },
  {
    id: 6,
    imageUrl: PC3840x2400,
    description: "メンテナンスのお知らせ。",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 1か月前
  },
];

const NotificationList: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NotificationTabKey>("all");

  const handleTabChange = (tab: NotificationTabKey) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.navContainer}>
        <NotificationNav activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {sampleNotifications.map((notif) => (
        <NotificationCard
          key={notif.id}
          imageUrl={notif.imageUrl}
          description={notif.description}
          date={notif.date}
        />
      ))}
    </div>
  );
};

export default NotificationList;
