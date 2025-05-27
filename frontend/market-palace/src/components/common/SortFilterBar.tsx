import React, { useState, useRef } from "react";
import styles from "./SortFilterBar.module.css";

const sortOptions = ["人気順", "新しい順", "古い順", "安い順", "高い順"];
const filterOptions = [
  "すべて",
  "画像",
  "3Dモデル",
  "フォント",
  "PC壁紙",
  "スマホ壁紙",
  "テンプレート",
];
const uploadDateFilters = ["全期間", "今年", "今月", "今週", "今日"];

type DropdownType = "sort" | "filter" | "uploadDate" | null;

interface SortFilterBarProps {
  showRequestOpen?: boolean; // リクエスト募集中チェックボックスを表示するか
}

const SortFilterBar: React.FC<SortFilterBarProps> = ({
  showRequestOpen = true,
}) => {
  const [sortValue, setSortValue] = useState("新しい順");
  const [filterValue, setFilterValue] = useState("すべて");
  const [uploadDateValue, setUploadDateValue] = useState("全期間");
  const [openType, setOpenType] = useState<DropdownType>(null);
  const [dropdownStyle, setDropdownStyle] = useState<React.CSSProperties>({});

  // 追加：チェックボックス状態
  const [isDownloadable, setIsDownloadable] = useState(false);
  const [isRequestOpen, setIsRequestOpen] = useState(false);

  const sortButtonRef = useRef<HTMLButtonElement>(null);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const uploadDateButtonRef = useRef<HTMLButtonElement>(null);

  const handleSelect = (type: Exclude<DropdownType, null>, value: string) => {
    if (type === "sort") {
      setSortValue(value);
    } else if (type === "filter") {
      setFilterValue(value);
    } else {
      setUploadDateValue(value);
    }
    setOpenType(null);
  };

  const toggleDropdown = (type: Exclude<DropdownType, null>) => {
    if (openType === type) {
      setOpenType(null);
      return;
    }
    let buttonRef = sortButtonRef;
    if (type === "filter") buttonRef = filterButtonRef;
    else if (type === "uploadDate") buttonRef = uploadDateButtonRef;

    const btn = buttonRef.current;
    if (btn) {
      const rect = btn.getBoundingClientRect();
      const parentRect = btn.offsetParent?.getBoundingClientRect() ?? {
        top: 0,
        left: 0,
      };
      setDropdownStyle({
        position: "absolute",
        top: rect.bottom + 5 - parentRect.top,
        left: rect.left - parentRect.left,
      });
    }
    setOpenType(type);
  };

  return (
    <>
      {openType && (
        <div className={styles.overlay} onClick={() => setOpenType(null)} />
      )}

      <div className={styles.bar}>
        {/* 並び替えボタン */}
        <button
          ref={sortButtonRef}
          type="button"
          className={styles.button}
          onClick={() => toggleDropdown("sort")}
        >
          {sortValue}
        </button>

        {/* 絞り込みボタン */}
        <button
          ref={filterButtonRef}
          type="button"
          className={styles.button}
          onClick={() => toggleDropdown("filter")}
        >
          {filterValue}
        </button>

        {/* 投稿日フィルターボタン */}
        <button
          ref={uploadDateButtonRef}
          type="button"
          className={`${styles.button} ${styles.uploadDateButton}`}
          onClick={() => toggleDropdown("uploadDate")}
        >
          投稿日: {uploadDateValue}
        </button>

        {/* ドロップダウンメニュー */}
        {openType === "sort" && (
          <div className={styles.dropdown} style={dropdownStyle}>
            {sortOptions.map((option) => (
              <div key={option} onClick={() => handleSelect("sort", option)}>
                {option}
              </div>
            ))}
          </div>
        )}
        {openType === "filter" && (
          <div className={styles.dropdown} style={dropdownStyle}>
            {filterOptions.map((option) => (
              <div key={option} onClick={() => handleSelect("filter", option)}>
                {option}
              </div>
            ))}
          </div>
        )}
        {openType === "uploadDate" && (
          <div className={styles.dropdown} style={dropdownStyle}>
            {uploadDateFilters.map((option) => (
              <div
                key={option}
                onClick={() => handleSelect("uploadDate", option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 追加：チェックボックス群 */}
      <div className={styles.checkboxGroup}>
        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            checked={isDownloadable}
            onChange={() => setIsDownloadable(!isDownloadable)}
          />
          ダウンロード可能
        </label>

        {showRequestOpen && (
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={isRequestOpen}
              onChange={() => setIsRequestOpen(!isRequestOpen)}
            />
            リクエスト募集中
          </label>
        )}
      </div>
    </>
  );
};

export default SortFilterBar;
