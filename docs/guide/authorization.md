# 鑑權

## 初始化權限

鑑權功能通過 Laravel Permission 實現。在開始之前，需要對權限進行初始化，可於 Admin 模組中的 AdminPermissionSeeder 內添加。

```shell
php artisan module:seed admin
```

執行完成後，權限將被添加，同時將被添加至預先定義的超級管理員中。

## 使用權限

### 通過 Laravel Policy

Policy 儲存於 `App\Policies` 中，並且與 Model 相對應。舉例： `App\Policies\UserPolicy` 聲明了對 `App\Models\User` 的訪問權限。

定義完成後，需要在 Controller 中加以聲明。`ResourceController` 可在 `__constructor()` 中通過調用 `$this->authorizeResource()` 定義訪問權限。


::: tip
在 Laravel 預設的權限之外，另外對 `Controller` 中的 `bulkDestroy` 方法增加對應的 `bulkDelete` 政策
:::

### 通過 can 中間件

可以在路由定義中添加 `can:<permission>` 中間件，以指定權限。

### 通過 Vue

Laravel Antd Pro 為 Vue 添加了 `v-can` 指令，可以隱藏用戶不具有權限的元素

```vue
<template>
    <div class="element" v-can="'admin.system.users.create'">
    </div>
</template>
```

### 側邊欄菜單的顯示及隱藏

可對側邊欄顯示的菜單項指定權限，如果用戶無權限，菜單項將會被隱藏