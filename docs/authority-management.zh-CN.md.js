webpackJsonp([88],{1090:function(n,s){n.exports={content:["article",{},["h2","\u6743\u9650\u7ec4\u4ef6 Authorized"],["p","\u8fd9\u662f\u811a\u624b\u67b6\u6743\u9650\u7ba1\u7406\u7684\u57fa\u7840\uff0c\u57fa\u672c\u601d\u8def\u662f\u901a\u8fc7\u6bd4\u5bf9\u5f53\u524d\u6743\u9650\u4e0e\u51c6\u5165\u6743\u9650\uff0c\u51b3\u5b9a\u5c55\u793a\u6b63\u5e38\u6e32\u67d3\u5185\u5bb9\u8fd8\u662f\u5f02\u5e38\u5185\u5bb9\uff0c\u4f7f\u7528\u65b9\u5f0f\u8be6\u89c1 ",["a",{title:null,href:"/components/Authorized"},"Authorized \u6587\u6863"],"\u3002"],["h2","\u5e94\u7528\u5b9e\u4f8b"],["p","\u901a\u8fc7\u5bf9\u6570\u636e\u7684\u7ec4\u7ec7\u53ca\u6743\u9650\u7ec4\u4ef6\u7684\u5e94\u7528\uff0c\u811a\u624b\u67b6\u5b9e\u73b0\u4e86\u57fa\u672c\u7684\u6743\u9650\u7ba1\u7406\uff0c\u4e0b\u9762\u7b80\u5355\u4ecb\u7ecd\u4e86\u51e0\u4e2a\u5e38\u89c1\u573a\u666f\u7684\u5e94\u7528\u65b9\u5f0f\u3002"],["blockquote",["p","\u811a\u624b\u67b6\u4e2d\u5bf9\u7ec4\u4ef6 export \u7684 RenderAuthorized \u51fd\u6570\u8fdb\u884c\u4e86",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/src/utils/Authorized.js"},"\u57fa\u672c\u5c01\u88c5"],"\uff0c\u9ed8\u8ba4\u4f20\u5165\u5f53\u524d\u7684\u6743\u9650\uff08mock \u6570\u636e\uff09\uff0c\u56e0\u6b64\u5728\u811a\u624b\u67b6\u4e2d\u4f7f\u7528\u65f6\uff0c\u65e0\u9700\u518d\u5173\u6ce8\u5f53\u524d\u6743\u9650\u3002"]],["h3","\u63a7\u5236\u83dc\u5355\u548c\u8def\u7531\u663e\u793a"],["p","\u5982\u9700\u5bf9\u67d0\u4e9b\u9875\u9762\u8fdb\u884c\u6743\u9650\u63a7\u5236\uff0c\u53ea\u987b\u5728\u8def\u7531\u914d\u7f6e\u6587\u4ef6 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/master/config/router.config.js"},"router.config.js"]," \u4e2d\u8bbe\u7f6e ",["code","Routes"]," \u5c5e\u6027\u5373\u53ef\uff0c\u4ee3\u8868\u8be5\u8def\u7531\u7684\u51c6\u5165\u6743\u9650\uff0cpro \u7684\u8def\u7531\u7cfb\u7edf\u4e2d\u4f1a\u9ed8\u8ba4\u5305\u88f9 ",["code","Authorized"]," \u8fdb\u884c\u5224\u65ad\u5904\u7406\u3002"],["pre",{lang:"js",highlighted:'<span class="token punctuation">{</span>\n  path<span class="token punctuation">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n  component<span class="token punctuation">:</span> <span class="token string">\'../layouts/BasicLayout\'</span><span class="token punctuation">,</span>\n  Routes<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'src/pages/Authorized\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">,</span> <span class="token string">\'user\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token comment" spellcheck="true">// forms</span>\n    <span class="token punctuation">{</span>\n      path<span class="token punctuation">:</span> <span class="token string">\'/form\'</span><span class="token punctuation">,</span>\n      icon<span class="token punctuation">:</span> <span class="token string">\'form\'</span><span class="token punctuation">,</span>\n      name<span class="token punctuation">:</span> <span class="token string">\'form\'</span><span class="token punctuation">,</span>\n      routes<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n          path<span class="token punctuation">:</span> <span class="token string">\'/form/basic-form\'</span><span class="token punctuation">,</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'basicform\'</span><span class="token punctuation">,</span>\n          component<span class="token punctuation">:</span> <span class="token string">\'./Forms/BasicForm\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n          path<span class="token punctuation">:</span> <span class="token string">\'/form/advanced-form\'</span><span class="token punctuation">,</span>\n          name<span class="token punctuation">:</span> <span class="token string">\'advancedform\'</span><span class="token punctuation">,</span>\n          authority<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'admin\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment" spellcheck="true">//\u914d\u7f6e\u51c6\u5165\u6743\u9650,\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u89d2\u8272</span>\n          component<span class="token punctuation">:</span> <span class="token string">\'./Forms/AdvancedForm\'</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n      <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span>'},["code","{\n  path: '/',\n  component: '../layouts/BasicLayout',\n  Routes: ['src/pages/Authorized'],\n  authority: ['admin', 'user'],\n  routes: [\n    // forms\n    {\n      path: '/form',\n      icon: 'form',\n      name: 'form',\n      routes: [\n        {\n          path: '/form/basic-form',\n          name: 'basicform',\n          component: './Forms/BasicForm',\n        },\n        {\n          path: '/form/advanced-form',\n          name: 'advancedform',\n          authority: ['admin'],//\u914d\u7f6e\u51c6\u5165\u6743\u9650,\u53ef\u4ee5\u914d\u7f6e\u591a\u4e2a\u89d2\u8272\n          component: './Forms/AdvancedForm',\n        },\n      ],\n    },\n  ],\n}"]],["h3","\u63a7\u5236\u9875\u9762\u5143\u7d20\u663e\u793a"],["p","\u4f7f\u7528 ",["a",{title:null,href:"http://pro.ant.design/components/Authorized#Authorized"},"Authorized"]," \u6216 ",["a",{title:null,href:"http://pro.ant.design/components/Authorized#Authorized.Secured"},"Authorized.Secured"]," \u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u63a7\u5236\u5143\u7d20/\u7ec4\u4ef6\u7684\u6e32\u67d3\uff0c\u5177\u4f53\u4f7f\u7528\u65b9\u5f0f\u53c2\u89c1\u7ec4\u4ef6\u6587\u6863\u3002"],["h3","\u4fee\u6539\u5f53\u524d\u6743\u9650"],["p","\u811a\u624b\u67b6\u4e2d\u4f7f\u7528 ",["code","localStorage"]," \u6a21\u62df\u6743\u9650\u89d2\u8272\uff0c\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u80fd\u9700\u8981\u4ece\u540e\u53f0\u8bfb\u53d6\u3002\n\u811a\u624b\u67b6\u4e2d\u5b9e\u73b0\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u5237\u65b0\u6743\u9650\u65b9\u6cd5\uff0c\u5728\u767b\u5f55/\u6ce8\u9500\u7b49\u5173\u952e\u8282\u70b9\u5bf9\u5f53\u524d\u6743\u9650\u8fdb\u884c\u4e86\u66f4\u65b0\u3002\n\u5177\u4f53\u53ef\u4ee5\u67e5\u770b ",["code","login.js"]," \u4e2d\u5bf9 ",["a",{title:null,href:"https://github.com/ant-design/ant-design-pro/blob/c93b0169a500427ee5fdd3c2977886c86aa3d59a/src/pages/User/models/login.js#L24"},"reloadAuthorized "]," \u7684\u8c03\u7528\u3002"]],meta:{order:24,title:"\u6743\u9650\u7ba1\u7406",type:"\u8fdb\u9636",filename:"docs/authority-management.zh-CN.md"},description:["section",["p","\u6743\u9650\u63a7\u5236\u662f\u4e2d\u540e\u53f0\u7cfb\u7edf\u4e2d\u5e38\u89c1\u7684\u9700\u6c42\u4e4b\u4e00\uff0c\u4f60\u53ef\u4ee5\u5229\u7528\u6211\u4eec\u63d0\u4f9b\u7684\u6743\u9650\u63a7\u5236\u7ec4\u4ef6\uff0c\u5b9e\u73b0\u4e00\u4e9b\u57fa\u672c\u7684\u6743\u9650\u63a7\u5236\u529f\u80fd\uff0c\u811a\u624b\u67b6\u4e2d\u4e5f\u5305\u542b\u4e86\u51e0\u4e2a\u7b80\u5355\u793a\u4f8b\u4ee5\u63d0\u4f9b\u53c2\u8003\u3002"]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u6743\u9650\u7ec4\u4ef6-Authorized",title:"\u6743\u9650\u7ec4\u4ef6 Authorized"},"\u6743\u9650\u7ec4\u4ef6 Authorized"]],["li",["a",{className:"bisheng-toc-h2",href:"#\u5e94\u7528\u5b9e\u4f8b",title:"\u5e94\u7528\u5b9e\u4f8b"},"\u5e94\u7528\u5b9e\u4f8b"]]]}}});