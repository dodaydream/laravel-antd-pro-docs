import{_ as t,r as o,o as c,c as p,b as a,d as s,e as i,a as n}from"./app.45919b24.js";const r={},l=n(`<h1 id="\u9451\u6B0A" tabindex="-1"><a class="header-anchor" href="#\u9451\u6B0A" aria-hidden="true">#</a> \u9451\u6B0A</h1><h2 id="\u521D\u59CB\u5316\u6B0A\u9650" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316\u6B0A\u9650" aria-hidden="true">#</a> \u521D\u59CB\u5316\u6B0A\u9650</h2><p>\u9451\u6B0A\u529F\u80FD\u901A\u904E Laravel Permission \u5BE6\u73FE\u3002\u5728\u958B\u59CB\u4E4B\u524D\uFF0C\u9700\u8981\u5C0D\u6B0A\u9650\u9032\u884C\u521D\u59CB\u5316\uFF0C\u53EF\u65BC Admin \u6A21\u7D44\u4E2D\u7684 AdminPermissionSeeder \u5167\u6DFB\u52A0\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>php artisan module:seed admin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u57F7\u884C\u5B8C\u6210\u5F8C\uFF0C\u6B0A\u9650\u5C07\u88AB\u6DFB\u52A0\uFF0C\u540C\u6642\u5C07\u88AB\u6DFB\u52A0\u81F3\u9810\u5148\u5B9A\u7FA9\u7684\u8D85\u7D1A\u7BA1\u7406\u54E1\u4E2D\u3002</p><h2 id="\u5F8C\u81FA" tabindex="-1"><a class="header-anchor" href="#\u5F8C\u81FA" aria-hidden="true">#</a> \u5F8C\u81FA</h2>`,6),d={class:"custom-container tip"},u=a("p",{class:"custom-container-title"},"TIP",-1),h={href:"https://laravel.com/docs/9.x/authorization",target:"_blank",rel:"noopener noreferrer"},v=n(`<h3 id="\u901A\u904E-laravel-policy" tabindex="-1"><a class="header-anchor" href="#\u901A\u904E-laravel-policy" aria-hidden="true">#</a> \u901A\u904E Laravel Policy</h3><p>Policy \u5132\u5B58\u65BC <code>App\\Policies</code> \u4E2D\uFF0C\u4E26\u4E14\u8207 Model \u76F8\u5C0D\u61C9\u3002\u8209\u4F8B\uFF1A <code>App\\Policies\\UserPolicy</code> \u8072\u660E\u4E86\u5C0D <code>App\\Models\\User</code> \u7684\u8A2A\u554F\u6B0A\u9650\u3002</p><p>\u5B9A\u7FA9\u5B8C\u6210\u5F8C\uFF0C\u9700\u8981\u5728 Controller \u4E2D\u52A0\u4EE5\u8072\u660E\u3002<code>ResourceController</code> \u53EF\u5728 <code>__constructor()</code> \u4E2D\u901A\u904E\u8ABF\u7528 <code>$this-&gt;authorizeResource()</code> \u5B9A\u7FA9\u8A2A\u554F\u6B0A\u9650\u3002</p><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>\u5728 Laravel \u9810\u8A2D\u7684\u6B0A\u9650\u4E4B\u5916\uFF0C\u53E6\u5916\u5C0D <code>Controller</code> \u4E2D\u7684 <code>bulkDestroy</code> \u65B9\u6CD5\u589E\u52A0\u5C0D\u61C9\u7684 <code>bulkDelete</code> \u653F\u7B56</p></div><h3 id="\u901A\u904E-can-\u4E2D\u9593\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u901A\u904E-can-\u4E2D\u9593\u4EF6" aria-hidden="true">#</a> \u901A\u904E can \u4E2D\u9593\u4EF6</h3><p>\u53EF\u4EE5\u5728\u8DEF\u7531\u5B9A\u7FA9\u4E2D\u6DFB\u52A0 <code>can:&lt;permission&gt;</code> \u4E2D\u9593\u4EF6\uFF0C\u4EE5\u6307\u5B9A\u6B0A\u9650\u3002</p><h2 id="\u524D\u81FA" tabindex="-1"><a class="header-anchor" href="#\u524D\u81FA" aria-hidden="true">#</a> \u524D\u81FA</h2><h3 id="v-can-\u6307\u4EE4" tabindex="-1"><a class="header-anchor" href="#v-can-\u6307\u4EE4" aria-hidden="true">#</a> <code>v-can</code> \u6307\u4EE4</h3><p>Laravel Antd Pro \u70BA Vue \u6DFB\u52A0\u4E86 <code>v-can</code> \u6307\u4EE4\uFF0C\u53EF\u4EE5\u96B1\u85CF\u7528\u6236\u4E0D\u5177\u6709\u6B0A\u9650\u7684\u5143\u7D20</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>element<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-can</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token punctuation">&#39;</span>admin.system.users.create&#39;<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5074\u908A\u6B04\u83DC\u55AE" tabindex="-1"><a class="header-anchor" href="#\u5074\u908A\u6B04\u83DC\u55AE" aria-hidden="true">#</a> \u5074\u908A\u6B04\u83DC\u55AE</h3><p>\u53EF\u5C0D\u5074\u908A\u6B04\u986F\u793A\u7684\u83DC\u55AE\u9805\u6307\u5B9A\u6B0A\u9650\uFF0C\u5982\u679C\u7528\u6236\u7121\u6B0A\u9650\uFF0C\u83DC\u55AE\u9805\u5C07\u6703\u88AB\u96B1\u85CF</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>
	<span class="token literal-property property">icon</span><span class="token operator">:</span> <span class="token string">&#39;UserOutlined&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">route</span><span class="token operator">:</span> <span class="token string">&#39;admin.system.users.index&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">&#39;admin.system.users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;layout.menu.users&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">permission</span><span class="token operator">:</span> <span class="token string">&#39;admin.system.users.view&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C0D\u65BC\u5E36\u5C64\u7D1A\u7684\u83DC\u55AE\uFF0C\u5982\u679C\u7576\u524D\u7528\u6236\u4E0D\u5177\u6709\u4EFB\u4F55\u5B50\u7D1A\u83DC\u55AE\u9805\u76EE\u4E4B\u6B0A\u9650\uFF0C\u5247\u7236\u7D1A\u83DC\u55AE\u4EA6\u6703\u88AB\u96B1\u85CF\u3002</p>`,14);function k(m,b){const e=o("ExternalLinkIcon");return c(),p("div",null,[l,a("div",d,[u,a("p",null,[s("\u6709\u95DC Laravel \u6B0A\u9650\u7684\u4F7F\u7528\uFF0C\u8ACB\u53C3\u7167"),a("a",h,[s("\u5B98\u65B9\u6587\u6A94"),i(e)])])]),v])}const _=t(r,[["render",k],["__file","authorization.html.vue"]]);export{_ as default};
