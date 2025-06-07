// ------------------------------------------
// src/components/auth/AuthModal.tsx
// ------------------------------------------
import React from "react";
import { useAuth } from "../../../../hooks/useAuth";
import LoginForm from "../../molecules/LoginForm/LoginForm";
import RegisterForm from "../../molecules/RegisterForm/RegisterForm";
import EmailVerificationForm from "../../molecules/EmailVerificationForm/EmailVerificationForm";
import PasswordResetForm from "../../molecules/PasswordResetForm/PasswordResetForm";

import styles from "./AuthModal.module.css";

const AuthModal: React.FC = () => {
  const {
    showLogin,
    showRegister,
    showVerificationForm,
    showPasswordReset,
    closeModals,
  } = useAuth();

  // モーダルが表示されていない場合は何もレンダリングしない
  if (
    !showLogin &&
    !showRegister &&
    !showVerificationForm &&
    !showPasswordReset
  )
    return null;

  // // オーバーレイクリックでモーダルを閉じる
  // const handleOverlayMouseDown = () => {
  //   closeModals();
  // };

  // // モーダル本体のクリックイベントをバブリングさせない
  // const handleModalMouseDown = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  // };

  return (
    //  <div className={styles.overlay} onMouseDown={handleOverlayMouseDown}>
    //   <div className={styles.modal} onMouseDown={handleModalMouseDown}></div>
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={closeModals}>
          ×
        </button>
        {showLogin && <LoginForm />}
        {showRegister && <RegisterForm />}
        {showVerificationForm && <EmailVerificationForm />}
        {showPasswordReset && <PasswordResetForm />}
      </div>
    </div>
  );
};
export default AuthModal;
