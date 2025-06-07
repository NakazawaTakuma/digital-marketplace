// src/components/auth/molecules/PasswordResetForm/PasswordResetForm.tsx

import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { requestPasswordReset } from "../../../../services/authService";
import styles from "./PasswordResetForm.module.css";
import { getErrorMessage } from "@/utils/getErrorMessage";

const PasswordResetForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { openLogin } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setIsSubmitting(true);

    try {
      await requestPasswordReset(email.trim().toLowerCase());
      setSuccess(
        "パスワードリセット用のメールを送信しました。メールをご確認ください。"
      );
    } catch (err) {
      const msg = getErrorMessage(err);
      setError(
        msg ||
          "パスワードリセットリクエストに失敗しました。もう一度お試しください。"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>パスワードリセット</h2>
      {error && <p className={styles.error}>{error}</p>}
      {success && <p className={styles.success}>{success}</p>}

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="登録済みのメールアドレス"
        className={styles.input}
        required
      />

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "送信中…" : "リセットリンクを送信"}
      </button>

      <p className={styles.switchText}>
        <button
          type="button"
          className={styles.switchButton}
          onClick={openLogin}
        >
          ログイン画面に戻る
        </button>
      </p>
    </form>
  );
};

export default PasswordResetForm;
