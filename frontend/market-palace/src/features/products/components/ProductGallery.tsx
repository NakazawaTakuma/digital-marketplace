// src/features/seller/components/ProductGallery.tsx
import React, { useRef, useState, useEffect } from "react";
import styles from "./ProductGallery.module.css";

interface ProductGalleryProps {
  images: string[];
  selectedIndex: number;
  onSelect: (idx: number) => void;
  isOpen: boolean;
  onToggleOpen: (open: boolean) => void;
}

const GalleryImages: React.FC<ProductGalleryProps> = ({
  images,
  selectedIndex,
  onSelect,
  isOpen,
  onToggleOpen,
}) => {
  // ドラッグ用の ref と state
  const thumbsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;
    const thumb = container.children[selectedIndex] as HTMLElement;
    if (thumb) {
      thumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [selectedIndex]);
  const isDown = useRef(false);
  const isMoved = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const [, setDragging] = useState(false);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const frameId = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      // コンポーネントアンマウント時にキャンセル
      if (frameId.current) cancelAnimationFrame(frameId.current);
    };
  }, []);

  if (!images || images.length === 0) return null;

  // マウス用イベント
  const onMouseDown = (e: React.MouseEvent) => {
    if (!thumbsRef.current) return;
    isDown.current = true;
    isMoved.current = false;
    // 速度リセット＆基準位置・時間をセット
    velocity.current = 0;
    lastX.current = e.pageX - thumbsRef.current.offsetLeft;
    lastTime.current = performance.now();
    startX.current = lastX.current;
    scrollStart.current = thumbsRef.current.scrollLeft;
    setDragging(true);
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDown.current || !thumbsRef.current) return;
    e.preventDefault();

    const now = performance.now();
    // 現在のポインタ位置
    const x = e.pageX - thumbsRef.current.offsetLeft;
    // 前回位置との差
    const dx = x - lastX.current;
    // 経過時間(ms)
    const dt = now - lastTime.current;

    // 速度(px/ms)を計算・格納
    if (dt > 0) {
      velocity.current = dx / dt;
    }

    // スクロール量を移動
    thumbsRef.current.scrollLeft = scrollStart.current - (x - startX.current);

    // ドラッグ判定
    if (Math.abs(x - startX.current) > 20) {
      isMoved.current = true;
    }

    // 次回計算のために更新
    lastX.current = x;
    lastTime.current = now;
  };

  const onMouseUpOrLeave = () => {
    isDown.current = false;
    setDragging(false);

    // 慣性スクロール開始
    const decay = () => {
      const c = thumbsRef.current;
      if (!c) return;

      // 摩擦係数で減速
      velocity.current *= 0.95;

      // 十分に遅くなったら終了
      if (Math.abs(velocity.current) < 0.02) return;

      // 1フレーム16ms想定でスクロール
      c.scrollLeft -= velocity.current * 16;
      frameId.current = requestAnimationFrame(decay);
    };

    decay();
  };

  // タッチ用イベントにも慣性を適用
  const onTouchStart = (e: React.TouchEvent) => {
    if (!thumbsRef.current) return;
    isDown.current = true;
    isMoved.current = false;
    setDragging(true);

    // 速度トラッキング初期化
    velocity.current = 0;
    lastX.current = e.touches[0].pageX - thumbsRef.current.offsetLeft;
    lastTime.current = performance.now();

    startX.current = lastX.current;
    scrollStart.current = thumbsRef.current.scrollLeft;

    e.preventDefault();
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDown.current || !thumbsRef.current) return;
    e.preventDefault();

    const now = performance.now();
    const x = e.touches[0].pageX - thumbsRef.current.offsetLeft;
    const dx = x - lastX.current;
    const dt = now - lastTime.current;

    // 速度(px/ms) を更新
    if (dt > 0) {
      velocity.current = dx / dt;
    }

    // スクロール位置を更新
    thumbsRef.current.scrollLeft = scrollStart.current - (x - startX.current);

    // ドラッグ判定
    if (Math.abs(x - startX.current) > 20) {
      isMoved.current = true;
    }

    lastX.current = x;
    lastTime.current = now;
  };

  const onTouchEnd = () => {
    isDown.current = false;
    setDragging(false);

    // 慣性スクロール開始
    const decay = () => {
      const c = thumbsRef.current;
      if (!c) return;

      // 摩擦係数
      velocity.current *= 0.95;
      // 十分に遅くなったら終了
      if (Math.abs(velocity.current) < 0.02) return;

      // 1フレーム16ms想定でスクロール
      c.scrollLeft -= velocity.current * 16;
      frameId.current = requestAnimationFrame(decay);
    };

    decay();
  };
  return (
    <div className={styles.gallery}>
      <div className={styles.viewer}>
        <img
          src={images[selectedIndex]}
          alt={`Image ${selectedIndex + 1}`}
          className={styles.main_image}
          onClick={() => onToggleOpen(true)}
        />
      </div>

      {/* ← サムネイル＋ナビボタンを横並びにするラッパー */}
      <div className={styles.thumbnailsWrapper}>
        {/* ← 「前へ」ボタン */}
        <button
          className={styles.navButton}
          onClick={() => onSelect(Math.max(0, selectedIndex - 1))}
          disabled={selectedIndex === 0}
        >
          ‹
        </button>
        {/* ← 既存のサムネイルスクロール領域 */}
        <div
          ref={thumbsRef}
          className={`${styles.thumbnails} ${
            isDown.current ? styles.thumbnailsDragging : ""
          }`}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Thumbnail ${idx + 1}`}
              className={`${styles.thumbnail} ${
                selectedIndex === idx ? styles["thumbnail--active"] : ""
              }`}
              onClick={() => {
                console.log(4);
                if (!isDown.current && !isMoved.current) {
                  onSelect(idx);
                }
              }}
            />
          ))}
        </div>
        {/* ← 「次へ」ボタン */}
        <button
          className={styles.navButton}
          onClick={() =>
            onSelect(Math.min(images.length - 1, selectedIndex + 1))
          }
          disabled={selectedIndex === images.length - 1}
        >
          ›
        </button>
      </div>

      {isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => onToggleOpen(false)}
        >
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className={styles.closeButton}
              onClick={() => onToggleOpen(false)}
            >
              ×
            </button>
            <img
              src={images[selectedIndex]}
              alt={`Image ${selectedIndex + 1}`}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryImages;
