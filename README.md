# 青木玲門｜公式かもしれないサイト

Vercel で公開できる標準の Next.js（App Router）プロジェクトです。

## 必要な環境

- Node.js 18 以上（推奨: 22）

## ローカル起動

```bash
npm install
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## スクリプト

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバー起動 |
| `npm run build` | 本番ビルド |
| `npm run start` | ビルド済みアプリの起動 |
| `npm run lint` | ESLint 実行 |

## 主な編集ファイル

- `app/page.tsx` … ページ本体（文章・アンケート・作品切替など）
- `app/globals.css` … デザイン・アニメーション
- `app/layout.tsx` … タイトルなどの全体設定
- `public/images/` … 画像

## Vercel への公開

1. このリポジトリを GitHub に push する
2. [Vercel](https://vercel.com) で Import Project
3. Framework Preset は **Next.js** のまま
4. Build Command: `next build` / Output はデフォルトのまま
5. Deploy

環境変数は不要です。
