FROM golang:1.21-alpine

WORKDIR /app

# 必要なシステムパッケージをインストール
RUN apk add --no-cache git

# 依存関係をコピーしてインストール
COPY go.mod go.sum ./
RUN go mod download

# ソースコードをコピー
COPY . .

# アプリケーションをビルド
RUN go build -o main .

# ホットリロード用にair（開発用）をインストール
RUN go install github.com/cosmtrek/air@latest

# 実行コマンド（開発モード）
CMD ["air", "-c", ".air.toml"]