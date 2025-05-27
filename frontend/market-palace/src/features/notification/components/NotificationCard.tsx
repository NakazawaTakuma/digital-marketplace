// src/components/NotificationCard.tsx
import React from "react";
import { formatDistanceToNow } from "date-fns";
import ja from "date-fns/locale/ja";
import styles from "./NotificationCard.module.css";

interface NotificationCardProps {
  imageUrl: string;
  description: string;
  date: Date;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  imageUrl,
  description,
  date,
}) => {
  const relativeTime = formatDistanceToNow(date, {
    addSuffix: true,
    locale: ja,
  });

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img
          src={imageUrl}
          alt={description}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <p className={styles.description}>{description}</p>
      <p className={styles.date}>{relativeTime}</p>
    </div>
  );
};

export default NotificationCard;
