FROM node:22

# 作業ディレクトリ
WORKDIR /app

# パッケージ依存だけ先にコピーしてインストール（lockファイルはオプショナル）
COPY my-app/package.json my-app/package-lock.json* ./
# package-lock.jsonがあればnpm ci、なければpackage.jsonを基にnpm install
# 変更がない場合は、キャッシュが効くためインストールは高速化される
RUN npm ci || npm install

# ホストのプロジェクトディレクトリをコンテナの作業ディレクトリへコピー
COPY my-app ./
