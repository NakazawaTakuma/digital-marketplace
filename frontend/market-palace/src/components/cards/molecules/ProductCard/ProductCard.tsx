// src/features/seller/components/ProductCard.tsx
import React from "react";
import styles from "./ProductCard.module.css";

export interface Product {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img
        src={product.imageUrl}
        alt={product.title}
        className={styles.image}
        loading="lazy"
      />
      {/* <div className={styles.content}>
        <p className={styles.title}>{product.title}</p>
        <p className={styles.price}>¥{product.price.toLocaleString()}</p>
      </div> */}
    </div>
  );
};

export default ProductCard;
