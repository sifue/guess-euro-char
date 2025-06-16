# GeoGuessr向けヨーロッパ文字クイズ

GeoGuessrでヨーロッパの国を特定する際に重要な文字の識別を練習できるクイズアプリケーションです。

## 前提条件

このアプリケーションは、以下の文字体系について基本的な知識があることを前提としています：

- **英語のアルファベット** (A-Z, a-z)
- **ギリシャ文字** (Α, Β, Γ, Δ, ε, θ, λ, μ, π, σ, φ, ψ, ω など)
- **キリル文字** (А, Б, В, Г, Д, Е, И, К, Л, М, Н, О, П, Р, С, Т, У, Ф, Х, Ц, Ч, Ш, Щ, Ю, Я など)

このアプリでは、これらの基本文字にダイアクリティカルマーク（アクセント記号）が付いた特殊文字の識別に焦点を当てています。

## 機能

### 文字10問モード
- ヨーロッパの特徴的な文字を表示
- 4つの選択肢から正しい言語を選択
- タイマーで経過時間を記録
- 正誤判定と解説表示
- 過去の成績記録（10回まで）

### 暗記モード
- 全ての文字と言語の対応を確認
- 検索機能で特定の文字や言語を絞り込み
- 各言語の国旗表示
- 詳細な説明と使用例

## 対応文字

以下のヨーロッパ言語の特徴的な文字に対応しています：

- **北欧系**: Æ æ, Ø ø, Å å, Ä ä, Ö ö, Þ þ, Ð ð
- **ラテン系**: Ñ ñ, Ç ç, Ã ã, Õ õ, Â â, Ê ê, Ô ô
- **東欧系**: Ł ł, Ő ő, Ű ű, Ș ș, Ț ț, Ř ř, Ů ů, Đ đ
- **バルト系**: Ą ą, Ę ę, Ū ū, Ī ī, Ė ė, Ā ā, Ķ ķ, Ų ų
- **キリル系**: Ы ы, І і, Ј ј, Ө ө, Ү ү, Ў ў
- **その他**: Ë ë, İ ı, ß

## 技術構成

- **フロントエンド**: React.js + TypeScript
- **ビルドツール**: Vite
- **スタイリング**: Tailwind CSS
- **フォント**: Noto Sans（ヨーロッパ文字対応）
- **国旗API**: [Flags API & CDN](https://flagcdn.com/)
- **ストレージ**: Web Storage API（ローカル記録保存）

## 開発環境のセットアップ

### 必要な環境
- Node.js v22.16.0以上
- npm

### インストール手順

1. リポジトリをクローン
```bash
git clone <repository-url>
cd guess-euro-char
```

2. 依存関係をインストール
```bash
npm install
```

3. 開発サーバーを起動
```bash
npm run dev
```

4. ブラウザで `http://localhost:5173` にアクセス

### その他のコマンド

```bash
# ビルド
npm run build

# プレビュー
npm run preview

# リント
npm run lint
```

## Cloudflare Workersへのデプロイ

### 前提条件
- Cloudflare アカウント
- Wrangler CLI

### デプロイ手順

1. Wranglerにログイン
```bash
npx wrangler login
```

2. `wrangler.toml`ファイルを作成
```toml
name = "guess-euro-char"
compatibility_date = "2024-01-01"

[env.production]
name = "guess-euro-char"
route = "your-domain.com/*"
zone_id = "your-zone-id"

[[env.production.build]]
command = "npm run build"
cwd = "."
watch_dir = "src"
```

3. アプリケーションをビルド
```bash
npm run build
```

4. Cloudflare Workersにデプロイ

**開発環境へのデプロイ:**
```bash
npm run deploy
```

**プロダクション環境へのデプロイ:**
```bash
npm run deploy:production
```

または直接wranglerコマンド：
```bash
npx wrangler pages deploy dist --branch production
```

**直接wranglerコマンドを使用する場合:**
```bash
# 開発環境
npx wrangler pages deploy dist

# プロダクション環境（productionブランチ）
npx wrangler pages deploy dist --branch production
```

### 設定のカスタマイズ

- `name`: アプリケーション名
- `route`: カスタムドメインを使用する場合
- `zone_id`: Cloudflareで管理するドメインのゾーンID

## ライセンス

このプロジェクトはMITライセンスの下で公開されています。詳細は[LICENSE](./LICENSE)ファイルをご覧ください。

Copyright (c) 2025 Soichiro Yoshimura (@sifue)

## 貢献

プルリクエストやイシューの報告を歓迎します。

## 問題作成データ参考動画

- [【GeoGueesr解説】絶対に知っておきたい攻略手法10選！｜初級編](https://www.youtube.com/watch?v=_EEJI0il6mY&t=977s)
- [【GeoGuessr攻略】ヨーロッパの言語を見分けよう！](https://www.youtube.com/watch?v=vAyrDesxYlo)

## 参考資料

- [EURO-CHAR.md](./EURO-CHAR.md) - 文字と言語の対応データ
- [GeoGuessr](https://www.geoguessr.com/) - 地理推測ゲーム
- [Flags API](https://flagcdn.com/) - 国旗画像API