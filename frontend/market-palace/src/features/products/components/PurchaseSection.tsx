import React, { useState } from "react";
import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption,
} from "@headlessui/react";
import styles from "./PurchaseSection.module.css";
import { Icon } from "@/utils/Icon";
// import CartIcon from "./react.svg?react";

type LicenseEntry = {
  id: number;
  name: string;
  price: number;
};

interface PurchaseProps {
  licenses: LicenseEntry[];
  selectedLicense: LicenseEntry | null;
  setSelectedLicense: (license: LicenseEntry | null) => void;
}

const PurchaseSection: React.FC<PurchaseProps> = ({
  licenses,
  selectedLicense,
  setSelectedLicense,
}) => {
  const [stockByLicense] = useState<Record<number, number>>({
    1: 5,
    2: 2,
  });

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>ライセンス</h2>

      <Listbox value={selectedLicense} onChange={setSelectedLicense}>
        <div className={styles.dropdown}>
          <ListboxButton className={styles.select}>
            <span className={styles.optionName}>{selectedLicense?.name}</span>
            <span className={styles.optionPrice}>
              {selectedLicense?.price.toLocaleString()}円
            </span>
          </ListboxButton>

          <ListboxOptions className={styles.options}>
            {licenses.map((license) => (
              <ListboxOption
                key={license.id}
                value={license}
                className={({ focus }) =>
                  `${styles.option} ${focus ? styles.optionActive : ""}`
                }
              >
                <span className={styles.optionName}>{license.name}</span>
                <span className={styles.optionPrice}>
                  {license.price.toLocaleString()}円
                </span>
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>

      {selectedLicense && (
        <>
          <p className={styles.stock}>
            残り点数: {stockByLicense[selectedLicense.id] ?? "在庫情報なし"}
          </p>
          <div className={styles.actions}>
            <button className={`${styles.button} ${styles["button--buy"]}`}>
              <Icon name="bag-check" />
              今すぐ購入
            </button>
            <button className={`${styles.button} ${styles["button--cart"]}`}>
              <Icon name="cart-plus" />
              <div className={styles.cartstr}>
                <div>カートに</div>
                <div>入れる</div>
              </div>
            </button>
          </div>
        </>
      )}
    </section>
  );
};

export default PurchaseSection;
export type { LicenseEntry };
