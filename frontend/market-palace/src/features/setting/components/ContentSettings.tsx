import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ContentSettings.module.css";

interface ContentData {
  role: "seller" | "buyer";
  defaultView: string;
  itemsPerPage: number;
  displayCurrency: string;
}

const ContentSettings: React.FC = () => {
  const [data, setData] = useState<ContentData>({
    role: "seller",
    defaultView: "grid",
    itemsPerPage: 20,
    displayCurrency: "JPY",
  });

  const handleChange = (
    e: ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: name === "itemsPerPage" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("コンテンツ設定送信:", data);
    // TODO: API連携
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>コンテンツ設定</h2>
      <div className={styles.container}>
        {/* 出品者・購入者向け設定 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="role">
            あなたの役割
          </label>
          <select
            id="role"
            name="role"
            className={styles.input}
            value={data.role}
            onChange={handleChange}
          >
            <option value="seller">出品者</option>
            <option value="buyer">購入者</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="defaultView">
            デフォルト表示
          </label>
          <select
            id="defaultView"
            name="defaultView"
            className={styles.input}
            value={data.defaultView}
            onChange={handleChange}
          >
            <option value="grid">グリッド</option>
            <option value="list">リスト</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="itemsPerPage">
            1ページあたりのアイテム数
          </label>
          <input
            type="number"
            id="itemsPerPage"
            name="itemsPerPage"
            className={styles.input}
            value={data.itemsPerPage}
            min={1}
            max={100}
            onChange={handleChange}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="displayCurrency">
            表示通貨
          </label>
          <select
            id="displayCurrency"
            name="displayCurrency"
            className={styles.input}
            value={data.displayCurrency}
            onChange={handleChange}
          >
            <option value="JPY">JPY</option>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>

        <button type="submit" className={styles.submitButton}>
          保存
        </button>
      </div>
    </form>
  );
};

export default ContentSettings;
