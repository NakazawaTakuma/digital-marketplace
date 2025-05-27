import React from "react";
import styles from "./ApiIntegrationSettings.module.css";

const ApiIntegrationSettings: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>APIと連携設定</h2>
      {/* APIキー管理、Webhook、OAuthクライアント管理 など */}
    </div>
  );
};

export default ApiIntegrationSettings;
