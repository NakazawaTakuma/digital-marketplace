import React from "react";
import styles from "./CollectionCard.module.css";

export interface Collection {
  id: number;
  title: string;
  imageUrls: string[];
}

interface CollectionCardProps {
  collection: Collection;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ collection }) => {
  const total = collection.imageUrls.length;
  const cols = total >= 4 ? 2 : 1;
  const maxItems = cols * cols;
  const imagesToShow = collection.imageUrls.slice(0, maxItems);

  return (
    <div className={styles.cardWrapper}>
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
                alt={`${collection.title} ${idx + 1}`}
                className={styles.image}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className={styles.content}>
          <p className={styles.title}>{collection.title}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
