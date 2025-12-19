# Node.js LTS
FROM node:20

# 作業ディレクトリ
WORKDIR /app

# アプリケーションのソース
COPY . .
