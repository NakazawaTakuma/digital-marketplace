import React, { useState } from "react";
import styles from "./LoginModal.module.css";

interface LoginModalProps {
  onClose: () => void;
  onLogin: (username: string, password: string) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div
        className={styles.modalContainer}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className={styles.title}>ログイン</h2>
        <form onSubmit={submit} className={styles.form}>
          <div>
            <label className={styles.label}>ユーザー名</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div>
            <label className={styles.label}>パスワード</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.input}
              required
            />
          </div>
          <div>
            <button type="submit" className={styles.submitButton}>
              ログイン
            </button>
            <button className={`${styles.submitButton} ${styles.signupButton}`}>
              アカウント新規登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
