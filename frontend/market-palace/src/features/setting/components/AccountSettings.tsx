import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./AccountSettings.module.css";

interface AccountData {
  username: string;
  email: string;
  password: string;
  dob: string;
  gender: string;
  region: string;
  language: string;
}

const AccountSettings: React.FC = () => {
  const [data, setData] = useState<AccountData>({
    username: "",
    email: "user@example.com",
    password: "",
    dob: "",
    gender: "",
    region: "",
    language: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("送信データ:", data);
    // TODO: API連携
  };

  const handlePasswordChange = () => {
    // TODO: パスワード変更モーダルなど
    alert("パスワード変更処理を実装してください。");
  };

  const handleDeleteAccount = () => {
    // TODO: アカウント削除確認ダイアログ
    if (
      window.confirm(
        "本当にアカウントを削除しますか？ この操作は取り消せません。"
      )
    ) {
      console.log("アカウント削除実行");
    }
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>アカウント設定</h2>
      <div className={styles.container}>
        {/* ユーザー名 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="username">
            ユーザー名
          </label>
          <div className={styles.usernameSection}>
            <input
              id="username"
              name="username"
              type="text"
              className={styles.input}
              value={data.username}
              onChange={handleChange}
              disabled
            />
            <button type="button" className={styles.changeButton}>
              変更
            </button>
          </div>
        </div>
        {/* メールアドレス */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>メールアドレス </label>
          <div className={styles.emailSection}>
            <input
              type="email"
              name="email"
              className={styles.input}
              value={data.email}
              disabled
            />
            <button type="button" className={styles.changeButton}>
              変更
            </button>
          </div>
        </div>

        {/* パスワード */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>パスワード</label>
          <div className={styles.passwordSection}>
            <input
              type="password"
              name="password"
              className={styles.input}
              value={data.password}
              onChange={handleChange}
              placeholder="********"
              disabled
            />
            <button
              type="button"
              className={styles.changeButton}
              onClick={handlePasswordChange}
            >
              変更
            </button>
          </div>
        </div>

        {/* 個人情報 */}
        <div className={styles.fieldGroup}>
          <label className={styles.subTitle}>個人情報</label>
        </div>

        {/* 生年月日 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="dob">
            生年月日
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            className={styles.input}
            value={data.dob}
            onChange={handleChange}
          />
        </div>

        {/* 性別 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="gender">
            性別
          </label>
          <select
            id="gender"
            name="gender"
            className={styles.input}
            value={data.gender}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="male">男性</option>
            <option value="female">女性</option>
            <option value="other">その他</option>
          </select>
        </div>

        {/* 国/地域 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="region">
            国／地域
          </label>
          <select
            id="region"
            name="region"
            className={styles.input}
            value={data.region}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="JP">日本</option>
            <option value="US">アメリカ合衆国</option>
            <option value="GB">英国</option>
            {/* TODO: 国リストを充実 */}
          </select>
        </div>

        {/* 言語 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="language">
            言語
          </label>
          <select
            id="language"
            name="language"
            className={styles.input}
            value={data.language}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="jp">日本語</option>
            <option value="en">English</option>
            {/* TODO: 言語リスト */}
          </select>
        </div>

        {/* 保存ボタン */}
        <div className={styles.fieldGroup}>
          <button type="submit" className={styles.submitButton}>
            個人情報を保存
          </button>
        </div>

        {/* アカウント削除 */}
        <div className={styles.fieldGroup}>
          <label className={styles.subTitle}>アカウントの削除</label>
        </div>
        <div className={styles.fieldGroup}>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={handleDeleteAccount}
          >
            アカウントの削除
          </button>
        </div>
      </div>
    </form>
  );
};

export default AccountSettings;
