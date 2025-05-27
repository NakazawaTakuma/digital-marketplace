import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./ProfileSettings.module.css";

interface LinkItem {
  id: number;
  iconUrl: string;
  linkUrl: string;
  description: string;
}

interface ProfileData {
  displayName: string;
  avatarUrl: string;
  bio: string;
  links: LinkItem[];
}

const ProfileSettings: React.FC = () => {
  const [data, setData] = useState<ProfileData>({
    displayName: "",
    avatarUrl: "",
    bio: "",
    links: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (
    e: ChangeEvent<HTMLInputElement>,
    target: "avatar" | "link",
    linkId?: number
  ) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (file.size > 10 * 1024 * 1024) {
      alert("ファイルは10MB以下にしてください。");
      return;
    }
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !["jpeg", "jpg", "png", "gif"].includes(ext)) {
      alert("JPEG, PNG, GIF のいずれかを選択してください。");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (target === "avatar") {
        setData((prev) => ({ ...prev, avatarUrl: reader.result as string }));
      } else if (target === "link" && linkId != null) {
        setData((prev) => ({
          ...prev,
          links: prev.links.map((link) =>
            link.id === linkId
              ? { ...link, iconUrl: reader.result as string }
              : link
          ),
        }));
      }
    };
    reader.readAsDataURL(file);
  };

  const addLink = () => {
    if (data.links.length >= 8) return;
    setData((prev) => ({
      ...prev,
      links: [
        ...prev.links,
        { id: Date.now(), iconUrl: "", linkUrl: "", description: "" },
      ],
    }));
  };

  const updateLink = (
    id: number,
    field: keyof Omit<LinkItem, "id">,
    value: string
  ) => {
    setData((prev) => ({
      ...prev,
      links: prev.links.map((link) =>
        link.id === id ? { ...link, [field]: value } : link
      ),
    }));
  };

  const removeLink = (id: number) => {
    setData((prev) => ({
      ...prev,
      links: prev.links.filter((link) => link.id !== id),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("送信データ:", data);
    // TODO: API連携
  };

  return (
    <form className={styles.card}>
      <h2 className={styles.title}>プロフィール設定</h2>
      <div className={styles.container} onSubmit={handleSubmit}>
        {/* 表示名 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="displayName">
            表示名
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            className={styles.input}
            value={data.displayName}
            onChange={handleChange}
          />
        </div>

        {/* プロフィール画像 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label}>プロフィール画像</label>
          <div className={styles.avatarSection}>
            {data.avatarUrl ? (
              <img
                src={data.avatarUrl}
                alt="Avatar"
                className={styles.avatarPreview}
              />
            ) : (
              <div className={styles.avatarPlaceholder}>No Image</div>
            )}
            <input
              type="file"
              accept="image/jpeg,image/png,image/gif"
              onChange={(e) => handleImageUpload(e, "avatar")}
              className={styles.fileInput}
            />
          </div>
        </div>

        {/* 自己紹介 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="bio">
            自己紹介
          </label>
          <textarea
            id="bio"
            name="bio"
            className={styles.textarea}
            value={data.bio}
            onChange={handleChange}
            maxLength={300}
            placeholder="300文字以内で入力"
          />
          <div className={styles.charCount}>{data.bio.length}/300</div>
        </div>

        {/* リンク */}
        <div className={styles.linksGroup}>
          <div className={styles.linksHeader}>
            <span className={styles.subTitle}>リンク (最大8件)</span>
            <button
              type="button"
              onClick={addLink}
              className={styles.addLinkButton}
            >
              + 追加
            </button>
          </div>

          {data.links.map((link) => (
            <div key={link.id} className={styles.linkItem}>
              {link.iconUrl ? (
                <img
                  src={link.iconUrl}
                  alt="Link icon"
                  className={styles.linkImage}
                />
              ) : (
                <div className={styles.linkPlaceholder}>No Image</div>
              )}
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={(e) => handleImageUpload(e, "link", link.id)}
                className={styles.fileInput}
              />
              <input
                type="text"
                placeholder="URL"
                value={link.linkUrl}
                onChange={(e) => updateLink(link.id, "linkUrl", e.target.value)}
                className={styles.input}
              />
              <input
                type="text"
                placeholder="説明"
                value={link.description}
                onChange={(e) =>
                  updateLink(link.id, "description", e.target.value)
                }
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => removeLink(link.id)}
                className={styles.removeLinkButton}
              >
                削除
              </button>
            </div>
          ))}
        </div>
        <button type="submit" className={styles.submitButton}>
          変更を保存
        </button>
      </div>
    </form>
  );
};

export default ProfileSettings;
