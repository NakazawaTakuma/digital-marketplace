// src/components/auth/molecules/EmailVerificationForm/EmailVerificationForm.tsx

import React, { useState, useEffect, useCallback, useRef } from "react";
import { useAuth } from "../../../../hooks/useAuth";
import {
  checkVerificationApi,
  resendVerificationApi,
} from "../../../../services/authService";
import styles from "./EmailVerificationForm.module.css";
import { getErrorMessage } from "@/utils/getErrorMessage";

const POLLING_INTERVAL = 5000; // 5秒に一度ポーリング

const EmailVerificationForm: React.FC = () => {
  const { pendingEmail } = useAuth();

  // ── 状態管理 ──
  const [error, setError] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [isResending, setIsResending] = useState(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);

  // ── APIコール中フラグ（再レンダー不要） ──
  const checkingRef = useRef(false);

  // ── ポーリングの interval ID を保持 ──
  const intervalRef = useRef<number | null>(null);

  // ── pendingEmail を依存にしたチェック用コールバック ──
  const checkVerified = useCallback(async () => {
    if (!pendingEmail || isVerified) {
      return;
    }
    if (checkingRef.current) {
      return;
    }

    checkingRef.current = true;
    try {
      const res = await checkVerificationApi(pendingEmail);
      if (res.data.verified) {
        setIsVerified(true);
        setSuccessMessage("メール確認が完了しました。ログインしてください。");
      }
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      checkingRef.current = false;
    }
  }, [pendingEmail, isVerified]);

  // ── 初回表示とインターバルでポーリングを開始 ──
  useEffect(() => {
    if (!pendingEmail) {
      return;
    }

    // 初回チェックを 1 秒後に実行
    const timerInitial = window.setTimeout(checkVerified, 1000);

    // 以降はインターバルでチェック
    intervalRef.current = window.setInterval(checkVerified, POLLING_INTERVAL);

    return () => {
      clearTimeout(timerInitial);
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [pendingEmail, checkVerified]);

  // ── isVerified が true になったらポーリングを止める ──
  useEffect(() => {
    if (isVerified && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, [isVerified]);

  // ── 再送信ボタンのクリック対応 ──
  const handleResend = async () => {
    if (!pendingEmail) {
      return;
    }
    setError("");
    setSuccessMessage("");
    setIsResending(true);
    try {
      const res = await resendVerificationApi(pendingEmail);
      setSuccessMessage(res.data.message);
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setIsResending(false);
    }
  };

  // ── pendingEmail がないときはメッセージだけ返して終了 ──
  if (!pendingEmail) {
    return (
      <p className={styles.error}>不正な状態です。再度登録してください。</p>
    );
  }

  return (
    <div className={styles.container}>
      {/* isVerified が true なら「メール確認完了」、false なら「メール確認待機中」を表示 */}
      <h2 className={styles.title}>
        {isVerified ? "メール確認完了" : "メール確認待機中"}
      </h2>

      {/* isVerified が false のときだけ案内文と再送信ボタンを表示 */}
      {!isVerified && (
        <>
          <p className={styles.text}>
            登録したメールアドレス <strong>{pendingEmail}</strong>{" "}
            に確認メールをお送りしました。
            <br />
            メールに記載されたリンクをクリックして確認を完了してください。
          </p>
          <button
            className={styles.button}
            onClick={handleResend}
            disabled={isResending}
          >
            {isResending ? "再送信中…" : "確認メールを再送信する"}
          </button>
        </>
      )}

      {/* エラーメッセージ */}
      {error && <p className={styles.error}>{error}</p>}
      {/* 成功メッセージ */}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
    </div>
  );
};

// ── 最後に React.memo でラップ ──
export default React.memo(EmailVerificationForm);
