# 目錄結構

## 公用目錄

```
├── app
│   ├── Actions
│   │   └── Fortify
│   ├── Console
│   │   └── Commands
│   ├── Exceptions
│   ├── Http
│   │   ├── Controllers
│   │   ├── Middleware
│   │   └── Responses
│   ├── Models
│   ├── Policies
│   └── Providers
├── bootstrap
│   └── cache
├── config
├── database
│   ├── factories
│   ├── migrations
│   └── seeders
├── lang
│   └── en
├── public
├── resources
│   ├── css
│   ├── js
│   │   ├── Pages
│   │   │   └── Auth
│   │   └── vendor
│   ├── lang
│   │   ├── en
│   │   └── zh_TW
│   └── views
├── routes
├── storage
│   ├── app
│   │   └── public
│   ├── framework
│   │   ├── cache
│   │   │   └── data
│   │   ├── sessions
│   │   ├── testing
│   │   └── views
│   └── logs
├── stubs
│   └── charts
│       ├── Default
│       ├── Json
│       └── Vue
└── tests
    ├── Feature
    └── Unit
```

## 模塊目錄

```
├── Modules
│   └── Admin
│       ├── Charts
│       ├── Config
│       ├── Console
│       ├── Database
│       │   ├── Migrations
│       │   ├── Seeders
│       │   └── factories
│       ├── Entities
│       ├── Http
│       │   ├── Controllers
│       │   │   ├── Admin // 管理員工具（發表公告）
│       │   │   ├── Api
│       │   │   ├── Developer // 開發人員工具（測試通知，背景任務，查看路由等）
│       │   │   └── System // 系統工具（管理用戶，管理用戶組，查看用戶操作日誌）
│       │   ├── Middleware
│       │   └── Requests
│       ├── Jobs
│       ├── Notifications
│       ├── Providers
│       ├── Resources
│       │   ├── css
│       │   ├── js
│       │   │   ├── Components // 封裝好的組件
│       │   │   ├── Directives 
│       │   │   ├── Layouts
│       │   │   │   ├── Headers
│       │   │   │   └── Menu
│       │   │   ├── Locales
│       │   │   ├── Pages // 前臺 Vue 頁面
│       │   │   │   ├── Admin
│       │   │   │   │   └── Bulletin
│       │   │   │   ├── Developer
│       │   │   │   ├── Profile
│       │   │   │   └── System
│       │   │   │       ├── Logs
│       │   │   │       ├── Roles
│       │   │   │       └── Users
│       │   │   ├── Store
│       │   │   └── Utils
│       │   ├── lang
│       │   └── views
│       ├── Routes
│       └── Tests
│           ├── Feature
│           └── Unit
```


