// src/components/Header.tsx
import React, { useState, useContext } from "react";
import { Icon } from "@/utils/Icon";
import styles from "./Header.module.css";
import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import LoginButton from "./LoginButton";
import { AuthContext } from "../contexts/AuthContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { login } = useContext(AuthContext);
  const handleLogin = (username: string, password: string) => {
    login(username, password);
    setIsLoginOpen(false);
  };

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

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
        <LoginButton
          isOpen={isLoginOpen}
          onOpen={() => setIsLoginOpen(true)}
          onClose={() => setIsLoginOpen(false)}
          onLogin={handleLogin}
          className={`${styles.iconButton} ${styles.loginButton}`}
        />

        {/* Avatar Button */}
        <div className={styles.avatarWrapper}>
          <button
            onClick={toggleMenu}
            className={styles.avatarButton}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
          >
            <img
              src={Icon800x800}
              alt="User Icon"
              className={styles.avatarImg}
            />
          </button>
          {isMenuOpen && (
            <div className={styles.dropdownMenu} onMouseLeave={closeMenu}>
              <LoginButton
                isOpen={isLoginOpen}
                onOpen={() => setIsLoginOpen(true)}
                onClose={() => setIsLoginOpen(false)}
                onLogin={handleLogin}
                className={styles.dropdownItem}
              />
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
