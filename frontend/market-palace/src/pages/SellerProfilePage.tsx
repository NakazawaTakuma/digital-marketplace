// pages/SellerProfilePage.tsx
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import ProfileCard from "../features/seller/components/ProfileCard";
import SellerNavBar, {
  SellerTabKey,
} from "../features/seller/components/SellerNavBar";
import ProductList from "../components/cards/organisms/ProductList/ProductList";
// import MarketList from "../features/seller/components/MarketList";
// import CollectionList from "../features/seller/components/CollectionList";
import SortFilterBar from "../components/cards/molecules/SortFilterBar/SortFilterBar";

import { fetchUserProfileBySlugApi } from "../services/userService";
import type { UserProfileData } from "../types/user"; // 例：バックエンドから返ってくる型定義

// タブごとのダミー表示コンポーネント

const SellerProfilePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<SellerTabKey>("home");
  const navigate = useNavigate();

  // 【変更箇所】URL から slug を取得
  const { slug } = useParams<{ slug: string }>();
  // 【変更箇所】フェッチ結果を保存する state（初期は null）
  const [sellerProfile, setSellerProfile] = useState<UserProfileData | null>(
    null
  );
  const [loadingProfile, setLoadingProfile] = useState<boolean>(true);
  const [profileError, setProfileError] = useState<string | null>(null);

  const handleTabChange = (tab: SellerTabKey) => {
    setActiveTab(tab);
  };

  // activeTab の変更に合わせて URL を /shop以下に同期
  useEffect(() => {
    if (!slug) return; // slug がなければ何もしない

    const base = `/shop/${slug}`;
    // activeTab が "home" のときは /shop/<slug>、それ以外のタブのときは /shop/<slug>/<tab> へ移動
    if (activeTab === "home") {
      navigate(base, { replace: true });
    } else {
      navigate(`${base}/${activeTab}`, { replace: true });
    }
  }, [activeTab, slug, navigate]);

  // ────────────────
  // 【変更箇所】slug が変わるたびに「出品者プロフィール」をフェッチ
  useEffect(() => {
    if (!slug) return;
    setLoadingProfile(true);
    setProfileError(null);
    setSellerProfile(null);

    fetchUserProfileBySlugApi(slug)
      .then((response) => {
        setSellerProfile(response.data);
      })
      .catch((err) => {
        console.error(err);
        setProfileError("出品者情報の取得に失敗しました。");
      })
      .finally(() => {
        setLoadingProfile(false);
      });
  }, [slug]);
  // ────────────────

  return (
    <div className="seller-profile">
      {/* <ProfileCard /> */}
      {/*
        【変更箇所】
        - プロフィール情報をフェッチ中はローディング
        - エラーが出たらエラーメッセージを表示
        - フェッチ成功後は sellerProfile を ProfileCard に渡す
      */}
      {loadingProfile && <p>プロフィールを読み込み中…</p>}
      {profileError && <p className="text-red-500">{profileError}</p>}
      {!loadingProfile && !profileError && sellerProfile && (
        <ProfileCard seller={sellerProfile} />
      )}

      <SellerNavBar activeTab={activeTab} onTabChange={handleTabChange} />

      {activeTab === "home" && (
        <>
          <SortFilterBar showRequestOpen={false} />
          <ProductList />
        </>
      )}
      {activeTab === "store" && (
        <>
          <SortFilterBar showRequestOpen={false} />
          <ProductList />
        </>
      )}
      {/* {activeTab === "collection" && <CollectionList />}
      {activeTab === "market" && <MarketList />} */}
    </div>
  );
};

export default SellerProfilePage;
