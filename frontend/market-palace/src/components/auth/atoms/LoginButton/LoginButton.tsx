// src/components/LoginButton.tsx

import React from "react";
import { Icon } from "@/utils/Icon";
import styles from "./LoginButton.module.css";
import { useAuth } from "../../../../hooks/useAuth";

const LoginButton: React.FC<{ className?: string }> = ({ className }) => {
  const { user, openLogin, logout } = useAuth();

  // 認証済み（user が null でない）なら「ログアウト」ボタン、
  // 未認証なら「ログイン」ボタンを表示
  if (user) {
    return (
      <button onClick={logout} className={className || styles.loginButton}>
        <Icon name="box-arrow-left" /> ログアウト
      </button>
    );
  }

  return (
    <button onClick={openLogin} className={className || styles.loginButton}>
      <Icon name="box-arrow-in-right" /> ログイン
    </button>
  );
};

export default LoginButton;
