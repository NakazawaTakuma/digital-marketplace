/* src/components/Sidebar.tsx */
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Icon } from "@/utils/Icon";
import styles from "./Sidebar.module.css";

export interface SidebarItem {
  id: number;
  iconName: string;
  selectediconName: string;
  label: string;
  url: string;
  onClick?: () => void;
}

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items: SidebarItem[] = [
    {
      id: 1,
      iconName: "home",
      selectediconName: "home-fill",
      label: "ホーム",
      url: "/",
    },
    {
      id: 2,
      iconName: "suit-heart",
      selectediconName: "suit-heart-fill",
      label: "フォロー",
      url: "/follow",
    },
    {
      id: 3,
      iconName: "bookmark-star",
      selectediconName: "bookmark-star-fill",
      label: "お気に入り",
      url: "/favorite",
    },
    {
      id: 4,
      iconName: "shop",
      selectediconName: "shop-fill",
      label: "マイショップ",
      url: "/myshop",
    },
    {
      id: 5,
      iconName: "bell",
      selectediconName: "bell-fill",
      label: "通知",
      url: "/notification",
    },
    {
      id: 6,
      iconName: "clock-history",
      selectediconName: "clock-fill",
      label: "履歴",
      url: "/history",
    },
    {
      id: 7,
      iconName: "settings",
      selectediconName: "settings-fill",
      label: "設定",
      url: "/setting",
    },
  ];

  // 現在の location.pathname が item.url または下位パスか判定
  const isActive = (itemUrl: string) =>
    location.pathname === itemUrl ||
    location.pathname.startsWith(itemUrl + "/");

  return (
    <aside className={styles.sidebar}>
      {items.map((item) => (
        <button
          key={item.id}
          className={`${styles.sidebar__item} ${isActive(item.url) ? styles.active : ""}`}
          onClick={() => {
            // onClick があれば実行
            item.onClick?.();
            // ナビゲート
            navigate(item.url);
          }}
        >
          <Icon
            name={isActive(item.url) ? item.selectediconName : item.iconName}
            className={styles.sidebar__icon}
          />
          <span className={styles.sidebar__label}>{item.label}</span>
        </button>
      ))}
    </aside>
  );
};

export default Sidebar;
