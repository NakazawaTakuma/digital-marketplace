import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetailCard from "../features/products/components/ProductDetailCard";
import { fetchProductById } from "../features/products/api/productAPI";

type LicenseEntry = {
  license: { id: number; name: string };
  price: number;
};

type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  images: string[];
  creators: { id: number; username: string }[];
  tags: { id: number; name: string }[];
  rating: string;
  allow_ai_use: boolean;
  is_ai_generated: boolean;
  formats: { format: string; info: Record<string, any> }[];
  licenses: LicenseEntry[];
  release_date: string;
  updated_at: string;
  view_count: number;
};

const ProductPage: React.FC = () => {
  // const { productId } = useParams<{ productId: string }>();
  // const [product, setProduct] = useState<Product | null>(null);
  // const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   if (!productId) return;
  //   fetchProductById(productId)
  //     .then((data) => setProduct(data))
  //     .catch((e) => setError(e.message));
  // }, [productId]);

  // if (error) return <div>エラー: {error}</div>;
  // if (!product) return <div>読み込み中…</div>;

  return (
    <div className="product-page-container">
      <ProductDetailCard />
    </div>
  );
};

export default ProductPage;
