import{_ as i,o as n,c as e,a as s}from"./app.45919b24.js";const d={},l=s(`<h1 id="\u76EE\u9304\u7D50\u69CB" tabindex="-1"><a class="header-anchor" href="#\u76EE\u9304\u7D50\u69CB" aria-hidden="true">#</a> \u76EE\u9304\u7D50\u69CB</h1><h2 id="\u516C\u7528\u76EE\u9304" tabindex="-1"><a class="header-anchor" href="#\u516C\u7528\u76EE\u9304" aria-hidden="true">#</a> \u516C\u7528\u76EE\u9304</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 app
\u2502   \u251C\u2500\u2500 Actions
\u2502   \u2502   \u2514\u2500\u2500 Fortify
\u2502   \u251C\u2500\u2500 Console
\u2502   \u2502   \u2514\u2500\u2500 Commands
\u2502   \u251C\u2500\u2500 Exceptions
\u2502   \u251C\u2500\u2500 Http
\u2502   \u2502   \u251C\u2500\u2500 Controllers
\u2502   \u2502   \u251C\u2500\u2500 Middleware
\u2502   \u2502   \u2514\u2500\u2500 Responses
\u2502   \u251C\u2500\u2500 Models
\u2502   \u251C\u2500\u2500 Policies
\u2502   \u2514\u2500\u2500 Providers
\u251C\u2500\u2500 bootstrap
\u2502   \u2514\u2500\u2500 cache
\u251C\u2500\u2500 config
\u251C\u2500\u2500 database
\u2502   \u251C\u2500\u2500 factories
\u2502   \u251C\u2500\u2500 migrations
\u2502   \u2514\u2500\u2500 seeders
\u251C\u2500\u2500 lang
\u2502   \u2514\u2500\u2500 en
\u251C\u2500\u2500 public
\u251C\u2500\u2500 resources
\u2502   \u251C\u2500\u2500 css
\u2502   \u251C\u2500\u2500 js
\u2502   \u2502   \u251C\u2500\u2500 Pages
\u2502   \u2502   \u2502   \u2514\u2500\u2500 Auth
\u2502   \u2502   \u2514\u2500\u2500 vendor
\u2502   \u251C\u2500\u2500 lang
\u2502   \u2502   \u251C\u2500\u2500 en
\u2502   \u2502   \u2514\u2500\u2500 zh_TW
\u2502   \u2514\u2500\u2500 views
\u251C\u2500\u2500 routes
\u251C\u2500\u2500 storage
\u2502   \u251C\u2500\u2500 app
\u2502   \u2502   \u2514\u2500\u2500 public
\u2502   \u251C\u2500\u2500 framework
\u2502   \u2502   \u251C\u2500\u2500 cache
\u2502   \u2502   \u2502   \u2514\u2500\u2500 data
\u2502   \u2502   \u251C\u2500\u2500 sessions
\u2502   \u2502   \u251C\u2500\u2500 testing
\u2502   \u2502   \u2514\u2500\u2500 views
\u2502   \u2514\u2500\u2500 logs
\u251C\u2500\u2500 stubs
\u2502   \u2514\u2500\u2500 charts
\u2502       \u251C\u2500\u2500 Default
\u2502       \u251C\u2500\u2500 Json
\u2502       \u2514\u2500\u2500 Vue
\u2514\u2500\u2500 tests
    \u251C\u2500\u2500 Feature
    \u2514\u2500\u2500 Unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6A21\u584A\u76EE\u9304" tabindex="-1"><a class="header-anchor" href="#\u6A21\u584A\u76EE\u9304" aria-hidden="true">#</a> \u6A21\u584A\u76EE\u9304</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 Modules
\u2502   \u2514\u2500\u2500 Admin
\u2502       \u251C\u2500\u2500 Charts
\u2502       \u251C\u2500\u2500 Config
\u2502       \u251C\u2500\u2500 Console
\u2502       \u251C\u2500\u2500 Database
\u2502       \u2502   \u251C\u2500\u2500 Migrations
\u2502       \u2502   \u251C\u2500\u2500 Seeders
\u2502       \u2502   \u2514\u2500\u2500 factories
\u2502       \u251C\u2500\u2500 Entities
\u2502       \u251C\u2500\u2500 Http
\u2502       \u2502   \u251C\u2500\u2500 Controllers
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Admin // \u7BA1\u7406\u54E1\u5DE5\u5177\uFF08\u767C\u8868\u516C\u544A\uFF09
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Api
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Developer // \u958B\u767C\u4EBA\u54E1\u5DE5\u5177\uFF08\u6E2C\u8A66\u901A\u77E5\uFF0C\u80CC\u666F\u4EFB\u52D9\uFF0C\u67E5\u770B\u8DEF\u7531\u7B49\uFF09
\u2502       \u2502   \u2502   \u2514\u2500\u2500 System // \u7CFB\u7D71\u5DE5\u5177\uFF08\u7BA1\u7406\u7528\u6236\uFF0C\u7BA1\u7406\u7528\u6236\u7D44\uFF0C\u67E5\u770B\u7528\u6236\u64CD\u4F5C\u65E5\u8A8C\uFF09
\u2502       \u2502   \u251C\u2500\u2500 Middleware
\u2502       \u2502   \u2514\u2500\u2500 Requests
\u2502       \u251C\u2500\u2500 Jobs
\u2502       \u251C\u2500\u2500 Notifications
\u2502       \u251C\u2500\u2500 Providers
\u2502       \u251C\u2500\u2500 Resources
\u2502       \u2502   \u251C\u2500\u2500 css
\u2502       \u2502   \u251C\u2500\u2500 js
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Components // \u5C01\u88DD\u597D\u7684\u7D44\u4EF6
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Directives 
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Layouts
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 Headers
\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 Menu
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Locales
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Pages // \u524D\u81FA Vue \u9801\u9762
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 Admin
\u2502       \u2502   \u2502   \u2502   \u2502   \u2514\u2500\u2500 Bulletin
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 Developer
\u2502       \u2502   \u2502   \u2502   \u251C\u2500\u2500 Profile
\u2502       \u2502   \u2502   \u2502   \u2514\u2500\u2500 System
\u2502       \u2502   \u2502   \u2502       \u251C\u2500\u2500 Logs
\u2502       \u2502   \u2502   \u2502       \u251C\u2500\u2500 Roles
\u2502       \u2502   \u2502   \u2502       \u2514\u2500\u2500 Users
\u2502       \u2502   \u2502   \u251C\u2500\u2500 Store
\u2502       \u2502   \u2502   \u2514\u2500\u2500 Utils
\u2502       \u2502   \u251C\u2500\u2500 lang
\u2502       \u2502   \u2514\u2500\u2500 views
\u2502       \u251C\u2500\u2500 Routes
\u2502       \u2514\u2500\u2500 Tests
\u2502           \u251C\u2500\u2500 Feature
\u2502           \u2514\u2500\u2500 Unit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),v=[l];function a(r,c){return n(),e("div",null,v)}const m=i(d,[["render",a],["__file","structure.html.vue"]]);export{m as default};
