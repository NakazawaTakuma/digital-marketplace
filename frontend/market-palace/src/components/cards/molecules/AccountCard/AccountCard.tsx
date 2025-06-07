import React from "react";
import styles from "./AccountCard.module.css";

export interface Account {
  id: number;
  title: string;
  imageUrls: string[];
  iconImageUrl: string;
}

interface AccountCardProps {
  account: Account;
}

const AccountCard: React.FC<AccountCardProps> = ({ account }) => {
  const total = account.imageUrls.length;
  const cols = total >= 4 ? 2 : 1;
  const maxItems = cols * cols;
  const imagesToShow = account.imageUrls.slice(0, maxItems);

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <div
          className={styles.images}
          style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
        >
          {imagesToShow.map((url, idx) => (
            <img
              key={idx}
              src={url}
              alt={`${account.title} ${idx + 1}`}
              className={styles.image}
              loading="lazy"
            />
          ))}
        </div>
        <img
          src={account.iconImageUrl}
          alt={`${account.title} icon`}
          className={styles.icon}
          loading="lazy"
        />
      </div>

      <div className={styles.content}>
        <p className={styles.title}>{account.title}</p>
      </div>
    </div>
  );
};

export default AccountCard;
