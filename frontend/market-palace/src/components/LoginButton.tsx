// src/components/LoginButton.tsx
import React from "react";
import LoginModal from "./LoginModal";
import { Icon } from "@/utils/Icon";
import styles from "./LoginButton.module.css";

interface LoginButtonProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
  className?: string; // 追加: カスタムスタイル用
}

const LoginButton: React.FC<LoginButtonProps> = ({
  isOpen,
  onOpen,
  onClose,
  onLogin,
  className = styles.loginButton, // デフォルトスタイルを指定
}) => {
  return (
    <>
      <button onClick={onOpen} className={className}>
        <Icon name="box-arrow-in-right" />
        ログイン
      </button>
      {isOpen && <LoginModal onClose={onClose} onLogin={onLogin} />}
    </>
  );
};

export default LoginButton;
