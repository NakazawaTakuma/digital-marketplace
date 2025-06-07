# Digital Marketplace

**Digital Marketplace** は、デジタル製品のためのフルスタック E コマースプラットフォームです。

## 🛠 主な機能

- Next.js 14 App Router を使用したモダンなフロントエンド
- tRPC による型安全な API 通信
- TypeScript による開発
- Tailwind CSS を用いたレスポンシブデザイン
- Payload CMS による認証と管理機能
- ユーザーによるデジタル商品の購入・販売機能
- ローカルに保存されるショッピングカート
- shadcn/ui を活用したクリーンな UI
- 購入後の美しいメール通知機能
- 管理者による商品の検証機能([github.com][1])

## 🚀 セットアップ方法

1. リポジトリをクローンします：

   ```bash
   git clone https://github.com/NakazawaTakuma/digital-marketplace.git
   cd digital-marketplace
   ```

2. 依存関係をインストールします：

   ```bash
   npm install
   ```

3. `.env.example` を `.env` にコピーし、必要な環境変数を設定します。([github.com][1])

4. 開発サーバーを起動します：

   ```bash
   npm run dev
   ```

## 📁 プロジェクト構成

- `/src`：アプリケーションのソースコード
- `/public`：公開用の静的ファイル
- `.env.example`：環境変数のサンプルファイル
- `package.json`：プロジェクトの依存関係とスクリプト

## 📄 ライセンス

このプロジェクトは [MIT ライセンス](LICENSE) の下で公開されています。
