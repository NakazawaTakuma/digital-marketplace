// ------------------------------------------
// src/types/auth.ts
// ------------------------------------------

export interface User {
  id: number;
  username: string;
  email: string;
  display_name: string;
  profile_image: string; // アップロード後の「URL としての文字列」を想定
  bio: string;
  slug: string;
}

/** プロフィール更新用リクエスト型 **/
export interface UserProfileRequest {
  display_name: string;
  profile_image?: File | null; // ファイルアップロード用
  bio: string;
}

/** プロフィール取得・更新（サーバー→クライアント用）レスポンス型 **/
export interface UserProfileData {
  display_name: string;
  profile_image: string; // サーバーにアップロード後の画像URL
  bio: string;
}
