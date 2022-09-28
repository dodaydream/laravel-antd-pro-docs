# 安裝

這裏僅介紹如何使用 Docker 環境進行開發。系統運行環境與 Laravel 9.x 相等，並需要 yarn 包管理器。


## 開發環境要求

開始安裝前，請確認您的環境已安裝下列依賴

- Docker
- Docker Compose

## 開始安裝

克隆倉庫到本地

```shell
git clone git@github.com:dodaydream/laravel-antd-pro
```


進入項目目錄

```shell
cd laravel-antd-pro
```

複製環境變量並修改

```shell
cp .env.example .env
```

需要設定 `DB_PASSWORD`，以及 `WWWGROUP` 和 `WWWUSER` 為本機登入用戶，一般情況下為 `1000`。

### 安裝項目依賴

您可以使用下方的命令安裝 composer 依賴

```shell
docker run --rm \
-u "$(id -u):$(id -g)" \
-v $(pwd):/var/www/html \
-w /var/www/html \
laravelsail/php81-composer:latest \
composer install --ignore-platform-reqs

```

安裝完成後，您可以用此命令啟動容器

```shell
./vendor/bin/sail up
```
初次啟動時，將會進行鏡像構建以及拉取其他服務鏡像。啟動成功後，便可登入開發容器進行開發。

```shell
./vendor/bin/sail shell
```

登入開發容器後，您可以使用 yarn 安裝前端依賴

```shell
yarn install
```
### 啟動開發環境

```shell
./vendor/bin/sail up
./vendor/bin/sail yarn dev
```

### 生成密鑰以及初始化數據庫

```shell
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
```

### 初始化數據

生成默認管理員

```shell
./vendor/bin/sail artisan db:seed --class=DefaultAdminSeeder
```

導入管理面板權限

```shell
./vendor/bin/sail artisan module:seed admin
```

安裝完成，現在您可以使用了。

## 前端資源打包

開發環境下，您可以使用 `yarn dev` 啓動開發服務器熱重載資源

當需要部署到生產環境時，您可以使用 `yarn build` 編譯生成