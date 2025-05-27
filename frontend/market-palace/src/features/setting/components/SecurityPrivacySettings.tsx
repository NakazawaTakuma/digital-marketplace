import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./SecurityPrivacySettings.module.css";

interface SecurityPrivacyData {
  passwordPolicy: string;
  sessions: boolean;
  dataSharing: boolean;
  cookies: boolean;
}

const SecurityPrivacySettings: React.FC = () => {
  const [data, setData] = useState<SecurityPrivacyData>({
    passwordPolicy: "standard",
    sessions: true,
    dataSharing: false,
    cookies: true,
  });

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("セキュリティ/プライバシー設定送信:", data);
    // TODO: API連携
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>セキュリティとプライバシー設定</h2>
      <div className={styles.container}>
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="passwordPolicy">
            パスワードポリシー
          </label>
          <select
            id="passwordPolicy"
            name="passwordPolicy"
            className={styles.input}
            value={data.passwordPolicy}
            onChange={handleSelectChange}
          >
            <option value="standard">標準 (8文字以上)</option>
            <option value="strong">強力 (12文字以上＋記号)</option>
            <option value="custom">カスタム</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="sessions"
              checked={data.sessions}
              onChange={handleToggle}
            />
            セッション管理 (同時ログイン制限)
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="dataSharing"
              checked={data.dataSharing}
              onChange={handleToggle}
            />
            データ共有 (第三者提供)
          </label>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="cookies"
              checked={data.cookies}
              onChange={handleToggle}
            />
            Cookie管理
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          保存
        </button>
      </div>
    </form>
  );
};

export default SecurityPrivacySettings;
