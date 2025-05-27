/* src/components/DetailSection.tsx */
import React from "react";
import styles from "./DetailSection.module.css";

interface DetailProps {
  detail: {
    rating: string;
    allowAI: boolean;
    isAIGenerated: boolean;
  };
}

const DetailSection: React.FC<DetailProps> = ({ detail }) => {
  return (
    <div className={styles.detailSectionCard}>
      <div className={styles.detailSectionHeader}>
        <h2 className={styles.detailSectionTitle}>詳細</h2>
      </div>

      <div className={styles.detailSectionContent}>
        <div className={styles.detailSectionRow}>
          <span className={styles.detailSectionLabel}>レーティング</span>
          <span className={styles.detailSectionValue}>{detail.rating}</span>
        </div>

        <div className={styles.detailSectionRow}>
          <span className={styles.detailSectionLabel}>AI利用</span>
          <span className={styles.detailSectionValue}>
            {detail.allowAI ? "許可" : "禁止"}
          </span>
        </div>

        <div className={styles.detailSectionRow}>
          <span className={styles.detailSectionLabel}>AI生成</span>
          <span className={styles.detailSectionValue}>
            {detail.isAIGenerated ? "はい" : "いいえ"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DetailSection;
