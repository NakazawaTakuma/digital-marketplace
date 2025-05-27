// src/features/seller/components/CollectionListSection.tsx
import React from "react";
import styles from "./CollectionList.module.css";
import { useNavigate } from "react-router-dom";
import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import Icon800x1200 from "@root/tests/assets/Icon800x1200.png";
import PC3840x2400 from "@root/tests/assets/pc3840x2400.jpeg";
import CollectionCard, {
  Collection,
} from "../../../components/common/CollectionCard";

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
