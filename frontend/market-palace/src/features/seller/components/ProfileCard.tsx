// src/components/ProfileCard.tsx
import React from "react";
import styles from "./ProfileCard.module.css";
import { Icon } from "@/utils/Icon";
import { formatCount } from "@root/src/utils/formatCount";
import DescriptionSection from "@root/src/utils/DescriptionSection";
import type { UserProfileData } from "@/types/user";
const DEFAULT_PROFILE_IMG = "/default-user-icon.png";

interface ProfileCardProps {
  seller?: UserProfileData;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ seller }) => {
  const displayUser = seller
    ? {
        display_name: seller.display_name,
        profile_image: seller.profile_image,
        bio: seller.bio,
      }
    : null;
  const follower_count = 200000;

  if (!displayUser) {
    return <p>ユーザー情報がありません。URLを確認してください。</p>;
  }

  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        {/* <div className={styles.info}>
          <div className={styles.account}>
            <img
              src={user.profile_image || DEFAULT_PROFILE_IMG}
              alt="Profile"
              className={styles.miniimage}
            />
            <div>
              <h1 className={styles.name}>{user.display_name}</h1>
              <p className={styles.followernum}>
                {formatCount(followernum)}人のフォロワー
              </p>
            </div>
          </div>
          <div className={styles.allbuttons}>
            <div className={styles.buttons}>
              <button className={styles.follow_button}>
                <Icon name="suit-heart" />
                フォロー
              </button>
              <button className={styles.present_button}>
                <Icon name="gift-fill" />
                プレゼントを贈る
              </button>
            </div>
            <div className={styles.buttons}>
              <button className={styles.request_button}>
                <Icon name="envelope-heart-fill" />
                リクエストを送る
              </button>
              <button className={styles.subscr_button}>サブスク</button>
            </div>
          </div>
          <DescriptionSection description={user.bio} />
        </div> */}
        {/* ① ラウンドがかかった正方形のアイコン画像 */}
        <div className={styles.info}>
          {/* ② ユーザー名（太字、大文字） */}
          <div className={styles.account}>
            <img
              src={displayUser.profile_image || DEFAULT_PROFILE_IMG}
              alt={`${displayUser.display_name} のアイコン`}
              className={styles.miniimage}
            />
            <div>
              <h1 className={styles.name}>{displayUser.display_name}</h1>
              <p className={styles.followernum}>
                {formatCount(follower_count)}人のフォロワー
              </p>
            </div>
          </div>
          {/* ③～⑤ フォロー、プレゼント、サブスクボタン */}
          <div className={styles.allbuttons}>
            <div className={styles.buttons}>
              <button className={styles.follow_button}>
                <Icon name="suit-heart" />
                フォロー
              </button>
              <button className={styles.present_button}>
                <Icon name="gift-fill" />
                プレゼントを贈る
              </button>
            </div>
            <div className={styles.buttons}>
              <button className={styles.request_button}>
                <Icon name="envelope-heart-fill" />
                リクエストを送る
              </button>
              <button className={styles.subscr_button}>サブスク</button>
            </div>
          </div>
          <DescriptionSection description={displayUser.bio || ""} />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
