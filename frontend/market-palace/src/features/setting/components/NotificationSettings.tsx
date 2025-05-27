import React, { useState, ChangeEvent } from "react";
import styles from "./NotificationSettings.module.css";

interface NotificationData {
  email: boolean;
  push: boolean;
  inApp: boolean;
  timezone: string;
}

const NotificationSettings: React.FC = () => {
  const [data, setData] = useState<NotificationData>({
    email: true,
    push: false,
    inApp: true,
    timezone: "",
  });

  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("通知設定送信:", data);
    // TODO: API連携
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>通知設定</h2>
      <div className={styles.container}>
        {/* メール通知 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="email"
              checked={data.email}
              onChange={handleToggle}
            />
            メール通知
          </label>
        </div>

        {/* プッシュ通知 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="push"
              checked={data.push}
              onChange={handleToggle}
            />
            プッシュ通知
          </label>
        </div>

        {/* アプリ内通知 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>
            <input
              type="checkbox"
              name="inApp"
              checked={data.inApp}
              onChange={handleToggle}
            />
            アプリ内通知
          </label>
        </div>

        {/* 通知時間帯 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="timezone">
            通知時間帯
          </label>
          <select
            id="timezone"
            name="timezone"
            className={styles.input}
            value={data.timezone}
            onChange={handleChange}
          >
            <option value="">選択してください</option>
            <option value="morning">朝 (8:00-12:00)</option>
            <option value="afternoon">午後 (12:00-18:00)</option>
            <option value="evening">夕方 (18:00-22:00)</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          保存
        </button>
      </div>
    </form>
  );
};

export default NotificationSettings;
