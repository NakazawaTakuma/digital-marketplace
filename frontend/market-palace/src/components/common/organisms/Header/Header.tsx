// src/components/Header.tsx
import React, { useState, useRef, useEffect } from "react";
import { Icon } from "@/utils/Icon";
import styles from "./Header.module.css";
import LoginButton from "../../../auth/atoms/LoginButton/LoginButton";
import { useAuth } from "../../../../hooks/useAuth";

const DEFAULT_PROFILE_IMG = "/default-user-icon.png";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const { user } = useAuth();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // menuRef が存在し、かつクリック先が menuRef の外側なら閉じる
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.header}>
      {/* 左側：メニューとロゴ */}
      <div className={styles.leftGroup}>
        <button
          onClick={() => console.log("メニュー")}
          className={styles.iconButton}
        >
          <Icon name="list" />
        </button>
        <button
          onClick={() => console.log("ロゴ")}
          className={styles.iconButton}
        >
          <Icon name="logo1" />
        </button>
      </div>

      {/* 検索 */}
      <div className={styles.searchContainer}>
        <Icon name="search" size={18} />
        <input
          className={styles.searchInput}
          type="text"
          placeholder="検索"
          onChange={() => {}}
        />
      </div>

      {/* 右側 */}
      <div className={styles.rightGroup}>
        {!user && (
          <LoginButton
            className={`${styles.iconButton} ${styles.loginButton}`}
          />
        )}
        {/* Avatar Button */}
        <div className={styles.avatarWrapper}>
          <button
            onClick={toggleMenu}
            className={styles.avatarButton}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
          >
            <img
              src={user?.profile_image || DEFAULT_PROFILE_IMG}
              alt="User Icon"
              className={styles.avatarImg}
            />
          </button>

          {isMenuOpen && (
            // ドロップダウン全体を menuRef で参照
            <div ref={menuRef} className={styles.dropdownMenu}>
              <LoginButton className={styles.dropdownItem} />
            </div>
          )}
        </div>

        <button
          onClick={() => console.log("カート")}
          className={`${styles.iconButton} ${styles.cartWrapper}`}
        >
          <Icon name="cart" />
          <span className={styles.badge}>12</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
