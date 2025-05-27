import React from "react";
import styles from "./MarketList.module.css";
import Banner600x200 from "@root/tests/assets/Icon600x200.jpg";
import { Link } from "react-router-dom";

// サンプルショップデータ
const shops = [
  { id: "shop1", name: "ショップA", link: "/shop/market/shop1" },
  { id: "shop2", name: "ショップB", link: "/shop/market/shop2" },
  { id: "shop3", name: "ショップC", link: "/shop/market/shop3" },
  { id: "shop4", name: "ショップD", link: "/shop/market/shop4" },
  { id: "shop1", name: "ショップA", link: "/shop/market/shop1" },
  { id: "shop2", name: "ショップB", link: "/shop/market/shop2" },
  { id: "shop3", name: "ショップC", link: "/shop/market/shop3" },
  { id: "shop4", name: "ショップD", link: "/shop/market/shop4" },
  { id: "shop1", name: "ショップA", link: "/shop/market/shop1" },
  { id: "shop2", name: "ショップB", link: "/shop/market/shop2" },
  { id: "shop3", name: "ショップC", link: "/shop/market/shop3" },
  { id: "shop4", name: "ショップD", link: "/shop/market/shop4" },
];

const MarketListSection: React.FC = () => {
  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>マーケット一覧</h2>
      <div className={styles.grid}>
        {shops.map((shop) => (
          <Link to={shop.link} key={shop.id} className={styles.card}>
            <img src={Banner600x200} alt={shop.name} className={styles.image} />
            {/* <span className={styles.name}>{shop.name}</span> */}
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MarketListSection;
