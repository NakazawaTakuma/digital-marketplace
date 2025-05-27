/* src/components/FormatSection.tsx */
import React, { useState } from "react";
import styles from "./FormatSection.module.css";

export type FormatInfo = {
  format: string;
  info: Record<string, any>;
};

interface FormatProps {
  formats: FormatInfo[];
}

const FormatSection: React.FC<FormatProps> = ({ formats }) => {
  const [selectedFormat, setSelectedFormat] = useState(0);
  if (!formats || formats.length === 0) return null;

  return (
    <section className={styles.formatSection}>
      <h2 className={styles.formatSection__title}>フォーマット</h2>

      {/* ボタン群 */}
      <div className={styles.formatSection__buttonGroup}>
        {formats.map((f, i) => {
          const isActive = selectedFormat === i;
          return (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedFormat(i)}
              className={`${styles.formatSection__button} ${
                isActive
                  ? styles.formatSection__buttonActive
                  : styles.formatSection__buttonInactive
              }`}
            >
              {f.format}
            </button>
          );
        })}
      </div>

      {/* 詳細リスト */}
      <div>
        <ul className={styles.formatSection__list}>
          {Object.entries(formats[selectedFormat].info).map(([key, val]) => (
            <li key={key} className={styles.formatSection__item}>
              <strong className={styles.formatSection__label}>{key}:</strong>
              <span className={styles.formatSection__value}>{String(val)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FormatSection;
