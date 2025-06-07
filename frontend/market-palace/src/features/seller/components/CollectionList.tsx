// src/features/seller/components/CollectionListSection.tsx
import React from "react";
import styles from "./CollectionList.module.css";
import Icon800x1200 from "@root/tests/assets/Icon800x1200.png";
import CollectionCard, {
  Collection,
} from "../../../components/cards/molecules/CollectionCard/CollectionCard";

// サンプルコレクションデータ
const collections: Collection[] = [
  {
    id: 1,
    title: "コレクション1",
    imageUrls: [Icon800x1200, Icon800x1200],
  },
  {
    id: 2,
    title: "コレクション2",
    imageUrls: [
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
    ],
  },
  {
    id: 3,
    title: "コレクション3",
    imageUrls: [
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
    ],
  },
];

const CollectionListSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>コレクション一覧</h2>
      <div className={styles.grid}>
        {collections.map((col, idx) => {
          const cardData: Collection = {
            id: idx + 1,
            title: col.title,
            imageUrls: col.imageUrls,
          };

          return <CollectionCard collection={cardData} />;
        })}
      </div>
    </section>
  );
};

export default CollectionListSection;
