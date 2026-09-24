# tomonoriyoshida.github.io

ポートフォリオの入り口となるサイトです。各プロジェクトのリポジトリ・デモへのリンクを掲載します。

公開URL: https://tomonoriyoshida.github.io/

## 構成

- Next.js（App Router）+ TypeScript + Tailwind CSS
- `output: "export"` による静的サイトとしてビルドし、GitHub Pages で配信
- `main` への push で GitHub Actions（`.github/workflows/deploy.yml`）がビルド・デプロイ

## プロジェクトの追加

`src/data/projects.ts` の `projects` 配列に追記します。デモ未公開のプロジェクトは `demoStatus` に状況を書き、公開後に `links` へデモURLを追加します。

## ローカル開発

Node.js はホストに入れず Docker で動かします。

```bash
docker compose up
```

http://localhost:3001 で確認できます。
