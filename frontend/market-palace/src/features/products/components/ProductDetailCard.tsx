// src/components/ProductDetailCard.tsx
import React, { useState } from "react";
import { useMediaQuery } from "../hooks/useMediaQuery";
import GalleryImages from "./ProductGallery";
import DescriptionSection from "./DescriptionSection";
import FormatSection from "./FormatSection";
import Tags from "./Tags";
import SellersSection from "./SellersSection";
import CreatorsSection from "./CreatorsSection";
import ActionButtons from "./ActionButtons";
import PurchaseSection from "./PurchaseSection";
import VersionSection from "./VersionSection";
import DetailSection from "./DetailSection";
import styles from "./ProductDetailCard.module.css";

import Icon800x800 from "@root/tests/assets/Icon800x800.png";
import Icon800x1200 from "@root/tests/assets/Icon800x1200.png";
import PC3840x2400 from "@root/tests/assets/pc3840x2400.jpeg";
import Banner600x200 from "@root/tests/assets/Icon600x200.jpg";

type Product = {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  images: string[];
  creators: { id: number; username: string }[];
  tags: string[];
  rating: string;
  allow_ai_use: boolean;
  is_ai_generated: boolean;
  formats: FormatInfo[];
  licenses: LicenseEntry[];
  release_date: string;
  updated_at: string;
  view_count: number;
};

interface Props {
  product: Product;
}

// ダミーデータ
const dummyProduct = {
  title: "サンプル商品タイトル",
  sellers: [
    {
      id: 1,
      name: "Shop A 長い名前テスト用1234567890",
      url: "#",
      image: Banner600x200,
    },
    { id: 2, name: "Shop B", url: "#", image: Banner600x200 },
    {
      id: 3,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 4,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 5,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 6,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 7,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 4,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 5,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 6,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 7,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 8,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 9,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 10,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
    {
      id: 11,
      name: "非常に長い販売所名をここに入れて切り捨てをテストします非常に長い販売所名をここに入れて切り捨てをテストします",
      url: "#",
      image: Banner600x200,
    },
  ],
  creators: [
    { id: 1, username: "creator_one_long_name_test_123456" },
    { id: 2, username: "creator_two" },
    { id: 3, username: "creator_two" },
    { id: 4, username: "creator_two" },
    { id: 5, username: "creator_two" },
    { id: 6, username: "creator_two" },
    { id: 7, username: "creator_two" },
    { id: 8, username: "creator_two" },
    { id: 9, username: "creator_two" },
    { id: 10, username: "creator_two" },
    { id: 11, username: "creator_two" },
  ],
  description: `これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。これは商品の説明文です。商品の魅力や特徴を簡潔に紹介します。
さらに詳細な情報を含めることで、ユーザーに商品の価値を伝えます。
長い説明文が続く場合は、折りたたみ機能を実装して見やすさを保ちます。
これにより、UIがすっきりし、必要に応じて全文を確認できます。`, // 4行以上の例
  tags: ["UI", "React", "TypeScript"],

  detail: {
    rating: "全年齢",
    allowAI: true,
    isAIGenerated: false,
  },
  formats: [
    {
      format: "PNG",
      info: {
        幅: "800px",
        高さ: "800px",
        容量: "200KB",
        アスペクト比: "1:1",
      },
    },
    {
      format: "JPEG",
      info: {
        幅: "3840px",
        高さ: "2400px",
        容量: "2MB",
        アスペクト比: "16:10",
      },
    },
  ],
  licenses: [
    { id: 1, name: "個人", price: 1000 },
    { id: 2, name: "商用", price: 5000 },
  ],

  actions: {
    likes: 120,
    favorites: 45,
    comments: 8,
  },

  versions: [
    {
      name: "v1.0",
      releaseDate: "2025-01-01",
      updatedAt: "2025-01-10",
      status: "公開",
    },
    {
      name: "v1.1",
      releaseDate: "2025-02-15",
      updatedAt: "2025-02-20",
      status: "非公開",
    },
    {
      name: "v2.0",
      releaseDate: "2025-03-01",
      updatedAt: "2025-03-15",
      status: "公開",
    },
  ],
};

const ProductDetailCard: React.FC = () => {
  const [creatorsDialogOpen, setCreatorsDialogOpen] = useState(false);
  const [sellersDialogOpen, setSellersDialogOpen] = useState(false);
  const [selectedLicense, setSelectedLicense] = useState(
    dummyProduct.licenses[0] || null
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaQuery("(max-width: 1228px)");
  const product = dummyProduct;
  // galleryImages
  const galleryImages = [
    Icon800x1200,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
    Icon800x1200,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
    PC3840x2400,
    PC3840x2400,
    Icon800x800,
  ];

  const mediaItems = [
    <GalleryImages
      key="gallery"
      images={galleryImages}
      selectedIndex={selectedIndex}
      onSelect={setSelectedIndex}
      isOpen={isOpen}
      onToggleOpen={setIsOpen}
    />,
    <div key="extra" className={styles.extraContainer}>
      <DescriptionSection description={product.description} />
      <FormatSection formats={product.formats} />
      <Tags tags={product.tags} />
    </div>,
  ];

  const infoItems = [
    <h1 key="title" className={styles.title}>
      {product.title}
    </h1>,
    <ActionButtons key="actions" actions={product.actions} />,
    <CreatorsSection
      key="creators"
      creators={product.creators}
      isOpen={creatorsDialogOpen}
      setIsOpen={setCreatorsDialogOpen}
    />,
    // <SellersSection
    //   key="sellers"
    //   sellers={product.sellers}
    //   isOpen={sellersDialogOpen}
    //   setIsOpen={setSellersDialogOpen}
    // />,
    <PurchaseSection
      key="purchase"
      licenses={product.licenses}
      selectedLicense={selectedLicense}
      setSelectedLicense={setSelectedLicense}
    />,

    <VersionSection key="versions" versions={product.versions} />,
    <DetailSection key="detail" detail={product.detail} />,
    <footer key="report" className={styles.footer}>
      <button className={styles.reportButton}>報告</button>
    </footer>,
  ];

  // ③ モバイル時は mediaItems と infoItems を交互に繋げて列表示
  // const mobileOrder = [
  //   mediaItems[0],
  //   infoItems[0],
  //   infoItems[1],
  //   infoItems[2],
  //   infoItems[3],
  //   infoItems[4],
  //   mediaItems[1],

  //   infoItems[5],
  //   infoItems[6],
  //   infoItems[7],
  // ];
  const mobileOrder = [
    mediaItems[0],
    infoItems[0],
    infoItems[1],
    infoItems[2],
    infoItems[3],

    mediaItems[1],
    infoItems[4],
    infoItems[5],
    infoItems[6],
    // infoItems[7],
  ];
  return (
    <div className={styles.card}>
      {isMobile ? (
        <div className={styles.mobileContainer}>{mobileOrder}</div>
      ) : (
        <div className={styles.desktopContainer}>
          <div className={styles.mediaColumn}>{mediaItems}</div>
          <div className={styles.infoColumn}>{infoItems}</div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailCard;
