# 項目包含了什麼

## Docker 

開發環境使用 Laravel Sail 提供 Docker 容器以運行 Laravel， 以及 MySQL，Redis， Meilisearch 等。
- "laravel/sail": "^1.0.1",

## Composer

### 基礎項目

框架基於 Laravel 9.x 搭建，集成 Octane 並使用 Swoole 運行，並且使用模塊化管理

- "laravel/framework": "^9.19",
- "nwidart/laravel-modules": "^9.0",

### 認證與鑑權

Laravel Fortify 提供帳號登錄註冊服務，Laravel Permission 提供鑑權服務，Sanctum 提供 API 認證功能。
- "laravel/fortify": "^1.13",
- "spatie/laravel-permission": "^5.5",
- "laravel/sanctum": "^3.0",

### 工作流引擎

- "zerodahero/laravel-workflow": "^4.0",

### 查詢構建
- "spatie/laravel-query-builder": "^5.0",

### 前端整合

框架使用 Inertia 進行前端開發，並通過 Ziggy 將後端路由暴露給前端

- "inertiajs/inertia-laravel": "^0.6.3",
- "tightenco/ziggy": "^1.4"

### 其他服務

#### 多媒體管理

使用 Laravel Media Library 將文件與資料庫中的 Model 關聯

- "spatie/laravel-medialibrary": "^10.0.0",

#### Excel 匯入匯出

- "maatwebsite/excel": "^3.1",

#### 操作日誌

可以自動記錄 Model 的修改，並且記錄使用者的操作

- "spatie/laravel-activitylog": "^4.5",

#### 搜索

- "laravel/scout": "^9.4",

## Node

### 基礎項目

- "vue": "^3.2.37",

### 介面相關

- "@ant-design/icons-vue": "^6.1.0",
- "tailwindcss": "^3.1.8",
- "ant-design-vue": "^3.2.11",
- "less": "^4.1.3",

### 後端整合

- "@inertiajs/inertia": "^0.11.0",
- "@inertiajs/inertia-vue3": "^0.6.0",
- "@inertiajs/progress": "^0.2.7",

### 常用組件

- "vue-advanced-cropper": "^2.8.3",
- "vue3-perfect-scrollbar": "^1.6.0"

### Utilities

- "lodash": "^4.17.19",
- "@vueuse/core": "^9.1.1",
- "axios": "^0.27",
