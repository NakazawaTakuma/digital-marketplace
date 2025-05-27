/* src/components/ActionButtons.tsx */
import React from "react";
import { Icon } from "@/utils/Icon";
import styles from "./ActionButtons.module.css";

interface ActionButtonsProps {
  actions: {
    likes: number;
    favorites: number;
    comments: number;
  };
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ actions }) => {
  return (
    <div className={styles.actionButtons}>
      {/* 1 行目 */}
      <div className={styles.actionButtons__row}>
        <button className={styles.actionButtons__button} onClick={() => {}}>
          <Icon name="gift" size={28} />
          {actions.likes}
        </button>

        <button className={styles.actionButtons__button} onClick={() => {}}>
          <Icon name="bookmark-star" size={28} />
          {actions.favorites}
        </button>

        <button className={styles.actionButtons__button} onClick={() => {}}>
          <Icon name="comment" size={28} />
          {actions.comments}
        </button>
      </div>

      {/* 2 行目 */}
      <div className={styles.actionButtons__row}>
        <button className={styles.actionButtons__button} onClick={() => {}}>
          <Icon name="share" size={28} />
        </button>
        <button className={styles.actionButtons__button} onClick={() => {}}>
          <Icon name="bell" size={28} />
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
