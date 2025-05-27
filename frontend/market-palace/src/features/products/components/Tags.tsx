import React from "react";
import styles from "./tags.module.css";

interface TagProps {
  tags: string[];
}

const Tags: React.FC<TagProps> = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null;
  }

  return (
    <div className={styles.tags}>
      <div className={styles.tags_list}>
        <strong className={styles.tags_label}>タグ:</strong>
        {tags.map((t, i) => (
          <span key={i} className={styles.tags_badge}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Tags;
