import React, {
  useState,
  useEffect,
  ChangeEvent,
  FormEvent,
  DragEvent,
} from "react";
import { useAuth } from "@/hooks/useAuth";
import { UserProfileRequest } from "@/types/user";
import styles from "./ProfileSettings.module.css";
import { getErrorMessage } from "@/utils/getErrorMessage";

const DEFAULT_PROFILE_IMG = "/default-user-icon.png";
const DISPLAY_NAME_MAX = 30;
const BIO_CHAR_MAX = 300;
const BIO_NEWLINE_MAX = 5;

const ProfileSettings: React.FC = () => {
  const { user, updateProfile } = useAuth();

  // 1) 各フィールドの状態を管理
  const [displayName, setDisplayName] = useState(user?.display_name || "");

  // chosenFile: 実際にアップロードする File（新規に選択した場合のみセット）
  const [chosenFile, setChosenFile] = useState<File | null>(null);
  // previewUrl: プレビュー用 URL (FileReader で生成する DataURL or すでに保存済みの URL)
  const [previewUrl, setPreviewUrl] = useState<string>(
    user?.profile_image || ""
  );

  // removeImage: 「×」ボタンで画像を消した場合に true にする
  const [removeImage, setRemoveImage] = useState<boolean>(false);

  // bio, websiteUrl の状態
  const [bio, setBio] = useState(user?.bio || "");

  // エラーメッセージ、成功メッセージ、送信中フラグ
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // ── 改行を「\n」に統一してから改行数を数える
  const normalizeNewlines = (text: string) => text.replace(/\r\n/g, "\n");

  // 改行数を数える
  const countNewlines = (raw: string): number => {
    const normalized = normalizeNewlines(raw);
    return (normalized.match(/\n/g) || []).length;
  };
  // 改行を除いた文字数を数える
  const countCharsExcludingNewlines = (raw: string): number => {
    const normalized = normalizeNewlines(raw);
    return normalized.replace(/\n/g, "").length;
  };

  useEffect(() => {
    if (user) {
      setDisplayName(user.display_name || "");
      setPreviewUrl(user.profile_image || "");
      setBio(user.bio || "");
      setChosenFile(null);
      setRemoveImage(false);
    }
  }, [user]);

  if (!user) {
    return <p>ログインしてください。</p>;
  }

  // 画像選択ハンドラ
  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    processImageFile(file);
  };

  // ドラッグ＆ドロップ時のハンドラ
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;
    processImageFile(file);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  // 共通の画像ファイル処理
  const processImageFile = (file: File) => {
    // フロント上でのファイル容量チェック
    if (file.size > 10 * 1024 * 1024) {
      alert("画像ファイルは 10MB 以下にしてください。");
      return;
    }
    // フロントで拡張子チェック
    const ext = file.name.split(".").pop()?.toLowerCase();
    if (!ext || !["jpeg", "jpg", "png", "gif"].includes(ext)) {
      alert("JPEG, PNG, GIF のいずれかを選択してください。");
      return;
    }
    setChosenFile(file);
    setRemoveImage(false);
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  // 画像クリアハンドラ
  const handleClearImage = () => {
    setChosenFile(null);
    setPreviewUrl("");
    setRemoveImage(true);
  };

  // BIO 入力制御
  const handleBioChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const raw = e.target.value;
    const normalized = normalizeNewlines(raw);
    const newlineCount = (normalized.match(/\n/g) || []).length;
    const charCount = normalized.replace(/\n/g, "").length;

    if (newlineCount > BIO_NEWLINE_MAX) {
      return;
    }
    if (charCount > BIO_CHAR_MAX) {
      return;
    }
    setBio(raw);
  };

  const handleDisplayNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const charCount = raw.trim().length;

    if (charCount > DISPLAY_NAME_MAX) {
      return;
    }
    setDisplayName(raw);
  };

  const trimmedDisplayName = displayName.trim();
  // 送信ハンドラ
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // 表示名：必須＆最大文字数チェック
    const nameTrimmed = displayName.trim();
    if (nameTrimmed.length === 0) {
      setError("表示名を入力してください。");
      return;
    }
    if (nameTrimmed.length > DISPLAY_NAME_MAX) {
      setError(`表示名は最大 ${DISPLAY_NAME_MAX} 文字までです。`);
      return;
    }

    // 改行数、文字数（改行除く）の最終チェック
    const normalized = normalizeNewlines(bio);
    if ((normalized.match(/\n/g) || []).length > BIO_NEWLINE_MAX) {
      setError(`自己紹介の改行は最大 ${BIO_NEWLINE_MAX} 行までです。`);
      return;
    }
    if (normalized.replace(/\n/g, "").length > BIO_CHAR_MAX) {
      setError(`自己紹介は最大 ${BIO_CHAR_MAX} 文字までです（改行を除く）。`);
      return;
    }

    setIsSubmitting(true);
    try {
      const payload: UserProfileRequest = {
        display_name: nameTrimmed,
        bio: normalized,
        profile_image: removeImage ? null : chosenFile ? chosenFile : undefined,
      };
      await updateProfile(payload);
      setSuccess("プロフィールを更新しました。");
      setRemoveImage(false);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsSubmitting(false);
    }
  };

  // URL からファイル名を抜き出す
  const extractFilenameFromUrl = (url: string): string => {
    try {
      const parts = url.split("/");
      return parts[parts.length - 1] || "";
    } catch {
      return "";
    }
  };

  return (
    <form className={styles.card} onSubmit={handleSubmit}>
      <h2 className={styles.title}>プロフィール設定</h2>

      <div className={styles.container}>
        {/* ① 表示名 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="displayName">
            表示名
          </label>
          <input
            id="displayName"
            name="displayName"
            type="text"
            className={styles.input}
            value={displayName}
            onChange={handleDisplayNameChange}
            required
          />
          <div className={styles.charCounts}>
            {trimmedDisplayName.length} / {DISPLAY_NAME_MAX}
          </div>
        </div>

        {/* ② プロフィール画像 */}
        <div
          className={styles.fieldGroup}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <label className={styles.label}>プロフィール画像</label>
          <div className={styles.avatarSection}>
            {/* プレビュー or デフォルト */}
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="Avatar Preview"
                className={styles.avatarPreview}
              />
            ) : (
              <img
                src={DEFAULT_PROFILE_IMG}
                alt="Default Avatar"
                className={styles.avatarPreview}
              />
            )}

            <div className={styles.fileSection}>
              <label htmlFor="file-upload" className={styles.fileInput}>
                ファイルを選択
              </label>
              <input
                id="file-upload"
                type="file"
                accept="image/jpeg,image/png,image/gif"
                onChange={handleImageUpload}
                style={{ display: "none" }}
              />
              <div className={styles.fileName}>
                <div>
                  {/* 既存画像が保存済みの場合は名前だけ表示 */}
                  {!chosenFile && user.profile_image && !removeImage && (
                    <p>{extractFilenameFromUrl(user.profile_image)}</p>
                  )}
                  {/* 新規に選択した File があればそのファイル名 */}
                  {chosenFile && <p>{chosenFile.name}</p>}
                </div>
                {/* クリアボタン */}
                {(previewUrl || chosenFile) && (
                  <button
                    type="button"
                    onClick={handleClearImage}
                    style={{
                      marginLeft: "1rem",
                      background: "none",
                      border: "none",
                      fontSize: "1.25rem",
                      cursor: "pointer",
                      color: "#ef4444",
                    }}
                    aria-label="画像をクリア"
                  >
                    ×
                  </button>
                )}
              </div>
            </div>
          </div>
          <p className={styles.note}>
            （JPEG/PNG/GIF、10MB 以下、最小 30×30px。推奨サイズ 400×400px）
            <br />
            ドラッグ＆ドロップでも画像を設定できます。
          </p>
        </div>

        {/* ③ 自己紹介 */}
        <div className={styles.fieldGroup}>
          <label className={styles.label} htmlFor="bio">
            自己紹介
          </label>
          <textarea
            id="bio"
            name="bio"
            className={styles.textarea}
            value={bio}
            onChange={handleBioChange}
            placeholder={`最大 ${BIO_CHAR_MAX} 文字（改行を除く）、改行は最大 ${BIO_NEWLINE_MAX} 行まで`}
            rows={6}
          />

          <div className={styles.charCounts}>
            <span>
              文字数: {countCharsExcludingNewlines(bio)} / {BIO_CHAR_MAX}
            </span>
            <span>
              改行: {countNewlines(bio)} / {BIO_NEWLINE_MAX}
            </span>
          </div>
        </div>

        {/* 送信ボタンとステータス */}
        <div className={styles.submitField}>
          {error && <p className={styles.error}>{error}</p>}
          {success && <p className={styles.success}>{success}</p>}
          <button
            type="submit"
            className={styles.submitButton}
            disabled={isSubmitting}
          >
            {isSubmitting ? "更新中…" : "変更を保存"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ProfileSettings;
