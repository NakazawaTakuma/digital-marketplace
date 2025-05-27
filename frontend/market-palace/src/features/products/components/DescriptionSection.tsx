/* src/components/DescriptionSection.tsx */
import React, { useState } from "react";
import styles from "./DescriptionSection.module.css";

interface DescriptionProps {
  description: string;
}

const DescriptionSection: React.FC<DescriptionProps> = ({ description }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleDescription = () => setIsExpanded((prev) => !prev);

  if (!description) return null;

  return (
    <section className={styles.descriptionSection}>
      <p
        className={`${styles.descriptionSection__text} ${
          isExpanded
            ? styles.descriptionSection__expanded
            : styles.descriptionSection__collapsed
        }`}
      >
        {description}
      </p>
      <button
        type="button"
        onClick={toggleDescription}
        className={styles.descriptionSection__toggleButton}
      >
        {isExpanded ? "一部を表示" : "すべて表示"}
      </button>
    </section>
  );
};

export default DescriptionSection;
