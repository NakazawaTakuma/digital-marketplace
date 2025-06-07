import React, { useState } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import { LoginCredentials } from "../../../../types/auth";
import styles from "./LoginForm.module.css";
import { Icon } from "@/utils/Icon";
import { getErrorMessage } from "@/utils/getErrorMessage";

const LoginForm: React.FC = () => {
  const [form, setForm] = useState<{ identifier: string; password: string }>({
    identifier: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login, openRegister, openPasswordReset } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const isEmail = form.identifier.includes("@");
      const credentials: LoginCredentials = isEmail
        ? { email: form.identifier, password: form.password }
        : { username: form.identifier, password: form.password };

      await login(credentials);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>ログイン</h2>
      {error && <p className={styles.error}>{error}</p>}

      <input
        name="identifier"
        type="text"
        value={form.identifier}
        onChange={handleChange}
        placeholder="メールアドレスまたはユーザー名"
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
          aria-label={showPassword ? "隠す" : "表示する"}
        >
          {showPassword ? <Icon name="eye-fill" /> : <Icon name="eye-slash" />}
        </button>
      </div>

      <button type="submit" className={styles.button} disabled={isSubmitting}>
        {isSubmitting ? "ログイン中…" : "ログイン"}
      </button>

      <div className={styles.switchWrapper}>
        <p className={styles.switchText}>
          アカウントをお持ちでないですか?{" "}
          <button
            type="button"
            className={styles.switchButton}
            onClick={openRegister}
          >
            新規登録
          </button>
        </p>
        <p className={styles.switchText}>
          パスワードをお忘れですか？{" "}
          <button
            type="button"
            className={styles.switchButton}
            onClick={openPasswordReset}
          >
            パスワードリセット
          </button>
        </p>
      </div>
    </form>
  );
};

export default LoginForm;
