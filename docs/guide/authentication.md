# 認證

有關認證的更多詳情，請參考 Laravel 官方文檔以及 Laravel Fortify 官方文檔

## 登入

在 Laravel Fortify 之外，Laravel Antd Pro 增加了額外的 URL 參數以控制登陸後跳轉。

```
/login?ref=admin.welcome
```

若未有 intended url，則跳轉至 `route('admin.welcome')`

## 登出

和登入一樣，Laravel Antd Pro 增加了額外的 URL 參數以控制登出後跳轉。

```
/logout?next=admin.login
```

## 雙因素認證

Laravel Antd Pro 默認開啓雙因素認證（2FA）的功能。用戶若開啓雙因素認證，則需要在登入時輸入一次性密碼（OTP）