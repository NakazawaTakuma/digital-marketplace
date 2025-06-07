import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { RegisterData } from "../../../../types/auth";
import styles from "./RegisterForm.module.css";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { Icon } from "@/utils/Icon";
import { validateUsername, validatePasswordStrength } from "@/utils/validation";

const RegisterForm: React.FC = () => {
  const { register, openLogin } = useAuth();
  const [form, setForm] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState<string>("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  // submit中ローディングフラグ
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name as keyof RegisterData]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // --- (1) ユーザー名チェック ---
    const usernameErr = validateUsername(form.username);
    if (usernameErr) {
      setError(usernameErr);
      return;
    }

    // --- (2) パスワードと確認用の一致チェック ---
    if (form.password !== form.confirmPassword) {
      setError("パスワードと確認用パスワードが一致しません。");
      return;
    }
    // --- (3) パスワード強度チェック ---
    const passwordErr = validatePasswordStrength(form.password);
    if (passwordErr) {
      setError(passwordErr);
      return;
    }

    // if (form.password !== form.confirmPassword) {
    //   setError("パスワードと確認用パスワードが一致しません。");
    //   return;
    // }

    setIsSubmitting(true);
    try {
      await register(form);
      // 成功すればモーダルの中身は AuthProvider が切り替えるので、ここで何もしない
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const toggleConfirmVisibility = () => {
    setShowConfirm((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>新規登録</h2>
      {error && <p className={styles.error}>{error}</p>}

      <input
        name="username"
        type="text"
        value={form.username}
        onChange={handleChange}
        placeholder="ユーザー名"
        className={styles.input}
        required
      />
      <input
        name="email"
        type="email"
        value={form.email}
        onChange={handleChange}
        placeholder="メールアドレス"
        className={styles.input}
        required
      />

      <div className={styles.passwordWrapper}>
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          value={form.password}
          onChange={handleChange}
          placeholder="パスワード"
          className={styles.input}
          required
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={styles.toggleButton}
          aria-label={showPassword ? "パスワードを隠す" : "パスワードを表示"}
        >
          {showPassword ? <Icon name="eye-fill" /> : <Icon name="eye-slash" />}
        </button>
      </div>

      <div className={styles.passwordWrapper}>
        <input
          name="confirmPassword"
          type={showConfirm ? "text" : "password"}
          value={form.confirmPassword}
          onChange={handleChange}
          placeholder="確認用パスワード"
          className={styles.input}
          required
        />
        <button
          type="button"
          onClick={toggleConfirmVisibility}
          className={styles.toggleButton}
          aria-label={
            showConfirm ? "確認用パスワードを隠す" : "確認用パスワードを表示"
          }
        >
          {showConfirm ? <Icon name="eye-fill" /> : <Icon name="eye-slash" />}
        </button>
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "登録中…" : "登録"}
      </button>

      <p className={styles.switchText}>
        すでにアカウントをお持ちですか?{" "}
        <button
          type="button"
          className={styles.switchButton}
          onClick={openLogin}
        >
          ログイン
        </button>
      </p>
    </form>
  );
};

export default RegisterForm;
