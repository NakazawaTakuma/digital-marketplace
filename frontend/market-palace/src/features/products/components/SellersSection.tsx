import React from "react";
import { Icon } from "@/utils/Icon";
import styles from "./SellersSection.module.css";
import Modal from "../../../components/common/organisms/Modal/Modal";

interface Seller {
  id: number;
  name: string;
  url: string;
  image: string;
}

interface SellersProps {
  sellers: Seller[];
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const SellersSection: React.FC<SellersProps> = ({
  sellers,
  isOpen,
  setIsOpen,
}) => {
  if (!sellers || sellers.length === 0) return null;

  const visibleSellers = sellers.slice(0, 3);

  return (
    <div className={styles.sellersSection}>
      <section className={styles.sellersSection__list}>
        {visibleSellers.map((s) => (
          <a
            key={s.id}
            href={s.url}
            className={styles.sellersSection__link}
            title={s.name}
          >
            <img
              src={s.image}
              alt={s.name}
              className={`${styles.sellersSection__link} img`}
            />
          </a>
        ))}

        <button
          className={styles.sellersSection__moreButton}
          onClick={() => setIsOpen(true)}
          aria-label="もっと見る"
        >
          <Icon name="three-dots" fill="#fff" size={16} />
        </button>
      </section>

      {isOpen && (
        <Modal title="販売所一覧" onClose={() => setIsOpen(false)}>
          {/* <h2 className={styles.sellersSection__dialogTitle}>販売所一覧</h2> */}
          <div className={styles.sellersSection__grid}>
            {sellers.map((s) => (
              <div key={s.id} className={styles.sellersSection__gridItem}>
                <a
                  href={s.url}
                  className={styles.sellersSection__itemLink}
                  title={s.name}
                >
                  <img
                    src={s.image}
                    alt={s.name}
                    className={styles.sellersSection__itemImg}
                  />
                  <p className={styles.sellersSection__itemName}>{s.name}</p>
                </a>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
};

export default SellersSection;
