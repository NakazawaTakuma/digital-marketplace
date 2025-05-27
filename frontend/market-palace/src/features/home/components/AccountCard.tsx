// src/components/AccountCard.tsx
import React from "react";
import styles from "./AccountCard.module.css";
import profileImage from "@root/tests/assets/Icon800x800.png";
import { Icon } from "@/utils/Icon";
import { formatCount } from "@root/src/utils/formatCount";
import DescriptionSection from "@root/src/utils/DescriptionSection";

interface SNSLink {
  name: string;
  url: string;
}

interface AccountCardProps {
  accountName: string;
  description: string;
  snsLinks: SNSLink[];
  followernum: number;
}

const AccountCard: React.FC<AccountCardProps> = ({
  accountName,
  description,
  snsLinks,
  followernum,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.profile}>
        {/* ① ラウンドがかかった正方形のアイコン画像（ここでは丸く表示しています） */}
        {/* <img src={profileImage} alt="Profile" className={styles.image} /> */}
        <div className={styles.info}>
          {/* ② アカウント名（太字、大文字） */}
          <div className={styles.account}>
            <img
              src={profileImage}
              alt="Profile"
              className={styles.miniimage}
            />
            <div>
              <h1 className={styles.name}>{accountName}</h1>
              <p className={styles.followernum}>
                {formatCount(followernum)}人のフォロワー
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
          {/* ⑥ SNSリンク */}
          <div className={styles.sns_links}>
            {snsLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.sns_link}
              >
                {link.name}
              </a>
            ))}
          </div>
          <DescriptionSection description={description} />
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
