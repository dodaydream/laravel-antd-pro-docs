# 安裝


## 運行環境要求

開始安裝前，請確認您的環境已安裝下列依賴

- Docker (20.10.6 已經測試)
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

需要設定 `DB_PASSWORD`，以及 `WWWGROUP` 和 `WWWUSER` 為本機登入用戶，一般情況下為 `1000`，上述三個變量將在下一步啟動 Laravel Sail  開發環境時使用。

## 安裝項目依賴

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
初次啟動時，將會進行開發環境鏡像的自動構建以及依賴服務鏡像的拉取。啟動成功後，便可登入開發容器進行開發。

```shell
./vendor/bin/sail shell

```

登入開發容器後，您可以使用 yarn 安裝前端依賴

```shell
yarn install
```
## 啟動開發環境

```shell
./vendor/bin/sail up
./vendor/bin/sail yarn dev
```

## 生成密鑰以及初始化數據庫

```shell
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
```

## 初始化數據

生成默認管理員

```shell
./vendor/bin/sail artisan db:seed --class=DefaultAdminSeederl
```

導入管理面板默認權限

```shell
./vendor/bin/sail artisan module:seed admin
```
