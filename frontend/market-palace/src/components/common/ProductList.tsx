// src/features/seller/components/ProductList.tsx
import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProductCard, { Product } from "./ProductCard";
import AccountCard, { Account } from "./AccountCard";
// import CollectionCard, { Collection } from "./CollectionCard";

import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import Icon800x1200 from "@root/tests/assets/Icon800x1200.png";
import PC3840x2400 from "@root/tests/assets/pc3840x2400.jpeg";
import styles from "./ProductList.module.css";

const sampleProducts: Product[] = [
  {
    id: 1,
    title:
      "商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1商品1",
    imageUrl: Icon800x1200,
    price: 1200,
  },
  { id: 2, title: "商品2", imageUrl: PC3840x2400, price: 1500 },
  { id: 3, title: "商品3", imageUrl: Icon800x800, price: 1800 },
  { id: 4, title: "商品4", imageUrl: PC3840x2400, price: 2200 },
  { id: 5, title: "商品5", imageUrl: Icon800x1200, price: 1200 },
  { id: 6, title: "商品6", imageUrl: PC3840x2400, price: 1500 },
  { id: 7, title: "商品7", imageUrl: Icon800x800, price: 1800 },
  { id: 8, title: "商品8", imageUrl: Icon800x1200, price: 2200 },
  { id: 9, title: "商品9", imageUrl: Icon800x1200, price: 2200 },
  { id: 10, title: "商品10", imageUrl: PC3840x2400, price: 1200 },
  { id: 11, title: "商品11", imageUrl: Icon800x1200, price: 1500 },
  { id: 12, title: "商品12", imageUrl: Icon800x800, price: 1800 },
  { id: 13, title: "商品13", imageUrl: Icon800x1200, price: 2200 },
  { id: 14, title: "商品4", imageUrl: PC3840x2400, price: 2200 },
  { id: 15, title: "商品5", imageUrl: Icon800x800, price: 1200 },
  { id: 16, title: "商品6", imageUrl: Icon800x1200, price: 1500 },
  { id: 17, title: "商品7", imageUrl: Icon800x1200, price: 1800 },
  { id: 18, title: "商品8", imageUrl: PC3840x2400, price: 2200 },
  { id: 19, title: "商品9", imageUrl: Icon800x1200, price: 2200 },
  { id: 20, title: "商品10", imageUrl: PC3840x2400, price: 1200 },
  { id: 21, title: "商品11", imageUrl: Icon800x1200, price: 1500 },
  { id: 22, title: "商品12", imageUrl: PC3840x2400, price: 1800 },
  { id: 23, title: "商品13", imageUrl: Icon800x1200, price: 2200 },
  // さらに多くの商品データ...
];

const sampleAccounts: Account[] = [
  {
    id: 1,
    title: "アカウント1",
    iconImageUrl: Icon800x800,
    imageUrls: [Icon800x800, Icon800x800, Icon800x800, Icon800x800],
  },
  {
    id: 2,
    title: "アカウント2",
    iconImageUrl: Icon800x800,
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
    title: "アカウント3",
    iconImageUrl: Icon800x800,
    imageUrls: [
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
      Icon800x1200,
    ],
  },
];

// const sampleCollections: Collection[] = [
//   {
//     id: 1,
//     title: "コレクション1",
//     imageUrls: [Icon800x1200, Icon800x1200],
//   },
//   {
//     id: 2,
//     title: "コレクション2",
//     imageUrls: [
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//     ],
//   },
//   {
//     id: 3,
//     title: "コレクション3",
//     imageUrls: [
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//       Icon800x1200,
//     ],
//   },
// ];

// サンプルデータを型情報付きでまとめる
type Item =
  | { kind: "account"; id: string; data: Account }
  | { kind: "product"; id: string; data: Product };
// | { kind: "collection"; id: string; data: Collection };

const ProductList: React.FC = () => {
  const mixedItems: Item[] = [
    ...sampleAccounts.map((acct) => ({
      kind: "account" as const,
      id: acct.id.toString(), // number → string に変換
      data: acct,
    })),
    ...sampleProducts.map((prod) => ({
      kind: "product" as const,
      id: prod.id.toString(), // number → string に変換
      data: prod,
    })),
    // ...sampleCollections.map((col) => ({
    //   kind: "collection" as const,
    //   id: col.id.toString(), // number → string に変換
    //   data: col,
    // })),
  ];

  // ここでソートしたりシャッフルしたり、任意のロジックを入れられる
  // 例：ID 並び順でソートする場合
  mixedItems.sort((a, b) => {
    if (a.id < b.id) return -1;
    if (a.id > b.id) return 1;
    return 0;
  });

  return (
    <div className={styles.container}>
      <ResponsiveMasonry
        columnsCountBreakPoints={{
          350: 2,
          768: 3,
          1024: 4,
          1280: 5,
          1580: 6,
          1780: 7,
          2080: 8,
        }}
      >
        <Masonry gutter="16px" sequential={false}>
          {mixedItems.map((item) =>
            // item.kind === "account" ? (
            //   <AccountCard key={`account-${item.id}`} account={item.data} />
            // ) : item.kind === "product" ? (
            //   <ProductCard key={`product-${item.id}`} product={item.data} />
            // ) : (
            //   <CollectionCard
            //     key={`collection-${item.id}`}
            //     collection={item.data}
            //   />
            // )
            item.kind === "account" ? (
              <AccountCard key={`account-${item.id}`} account={item.data} />
            ) : (
              <ProductCard key={`product-${item.id}`} product={item.data} />
            )
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default ProductList;
