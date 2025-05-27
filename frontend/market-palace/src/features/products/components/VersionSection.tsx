import React from "react";
import styles from "./VersionSection.module.css";

interface PurchaseProps {
  versions: {
    name: string;
    releaseDate: string;
    updatedAt: string;
    status: string;
  }[];
}

const VersionSection: React.FC<PurchaseProps> = ({ versions }) => {
  // if (!actions || actions.length === 0) {
  //   return null;
  // }

  return (
    <div>
      {/* バージョン管理テーブル */}
      <section className={styles.section}>
        <h2>バージョン管理</h2>
        <div className={styles.table_container}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th>バージョン名</th>
                <th>リリース日</th>
                <th>更新日</th>
                <th>公開ステータス</th>
              </tr>
            </thead>
            <tbody>
              {versions.map((v, idx) => (
                <tr key={idx}>
                  <td>{v.name}</td>
                  <td>{v.releaseDate}</td>
                  <td>{v.updatedAt}</td>
                  <td
                    className={
                      v.status === "公開"
                        ? styles["status--public"]
                        : styles["status--private"]
                    }
                  >
                    {v.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default VersionSection;
