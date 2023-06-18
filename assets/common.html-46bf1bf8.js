import{_ as u,r as a,o as g,c as f,b as e,e as t,a as n,w as s,f as i}from"./app-b3a9b74b.js";const m={},_=i('<h1 id="common" tabindex="-1"><a class="header-anchor" href="#common" aria-hidden="true">#</a> Common</h1><h3 id="mount-path" tabindex="-1"><a class="header-anchor" href="#mount-path" aria-hidden="true">#</a> <strong>Mount Path</strong></h3><p>Unique identifier, that is the location you want to mount to, if you want to mount to the root directory, it is <code>/</code></p><h3 id="order" tabindex="-1"><a class="header-anchor" href="#order" aria-hidden="true">#</a> <strong>Order</strong></h3><p>When there are multiple accounts, it is used for sorting, The smaller the more forward</p><h3 id="remark" tabindex="-1"><a class="header-anchor" href="#remark" aria-hidden="true">#</a> <strong>Remark</strong></h3><p>Anything you want to fill in, which is just for reminding you what this storage is</p><h2 id="enable-signing" tabindex="-1"><a class="header-anchor" href="#enable-signing" aria-hidden="true">#</a> <strong>Enable signing</strong></h2><p>Sign and encrypt files (no password required), only valid for this driver, if other signatures are not enabled and <code>signature all</code> and <code>meta-information encryption</code> are not set, others will not be signed</p><p>Usage scenario: I don&#39;t want to enable all signatures, and I don&#39;t want to set metadata encryption. I just want to sign and encrypt a certain driver to prevent it from being scanned.</p><p>Scope of influence: <code>Settings--&gt;Global--&gt;Signature All</code> &gt; <code>Metainformation Directory Encryption</code> &gt; <code>Single Driver Signature</code></p><h3 id="cache-expiration" tabindex="-1"><a class="header-anchor" href="#cache-expiration" aria-hidden="true">#</a> <strong>Cache Expiration</strong></h3><p>Cache time of directory structure.</p><h3 id="web-proxy" tabindex="-1"><a class="header-anchor" href="#web-proxy" aria-hidden="true">#</a> <strong>Web proxy</strong></h3>',14),k=e("h3",{id:"webdav-policy",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#webdav-policy","aria-hidden":"true"},"#"),t(),e("strong",null,"Webdav policy")],-1),y=e("ul",null,[e("li",null,"302 redirect: redirect to the real link"),e("li",null,"use proxy URL: redirect to proxy URL"),e("li",null,"native proxy: return data directly through local transit(best compatibility)")],-1),b=e("h3",{id:"description-of-three-modes",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#description-of-three-modes","aria-hidden":"true"},"#"),t(),e("strong",null,"Description of three modes")],-1),w=e("h3",{id:"download-proxy-url",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#download-proxy-url","aria-hidden":"true"},"#"),t(" Download proxy URL")],-1),x=e("p",null,"When the proxy is turned on without filling in this field, the local machine will be used for transfer by default.Two proxy methods are provided:",-1),v=e("code",null,"cloudflare workers",-1),S=e("code",null,"cloudflare workers",-1),C={href:"https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js",target:"_blank",rel:"noopener noreferrer"},L=e("ul",null,[e("li",null,[t("ADDRESS: your Alist address, The protocol header must be added, and cannot be followed by /. Such as "),e("code",null,"https://pan.nn.ci"),t(";")]),e("li",null,[t("TOKEN: you can get in "),e("code",null,"Other settings"),t(" in your Alist manage page.")])],-1),T=e("p",null,[t("⚠️ Cloudflare Workers free CDN supports domestic only "),e("strong",null,"http80 port"),t(" and "),e("strong",null,"https443 port"),t("，From group friend test")],-1),U=e("ul",null,[e("li",null,[t("When mounting the configuration in the Alist background, fill in the "),e("strong",null,"download proxy URL"),t(" at the end of the link without "),e("code",null,"/")])],-1),j={href:"https://anwen-nyi.github.io/index/11-durl.html",target:"_blank",rel:"noopener noreferrer"},A=e("strong",null,"Disassembled for details",-1),M={href:"https://github.com/alist-org/alist-proxy/releases",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,[e("code",null,"./alist-proxy -help"),t(" to see how to use it.")],-1),E={href:"https://anwen-nyi.github.io/index/11-durl.html",target:"_blank",rel:"noopener noreferrer"},K=e("strong",null,"Disassembled for details",-1),D=i('<p>You can even develop your own proxy program, the general steps are:</p><ul><li>When downloading, it will request <code>PROXY_URL/path?sign=sign_value</code></li><li>Verify sign in the proxy program, the calculation method of sign is:</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> to_sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n<span class="token keyword">const</span> _sign <span class="token operator">=</span> <span class="token function">safeBase64</span><span class="token punctuation">(</span><span class="token function">hmac_sha256</span><span class="token punctuation">(</span>to_sign<span class="token punctuation">,</span> <span class="token constant">TOKEN</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>_sign<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>expireTimeStamp<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',3),I=e("code",null,"TOKEN",-1),R=i('<ul><li>After verifying the sign is correct, requesting <code>HOST/api/fs/link</code>, you can get the URL of the file and the request header to be carried</li><li>Use the information to request and return</li></ul><h3 id="sort-related" tabindex="-1"><a class="header-anchor" href="#sort-related" aria-hidden="true">#</a> Sort related</h3><ul><li>Sort by: Sort by what</li><li>Sort direction: Whether the sort direction is ascending or descedning</li></ul><div class="hint-container info"><p class="hint-container-title">Info</p><p>Some drives use their own sorting method, which may be different.</p></div><h3 id="extract-folder" tabindex="-1"><a class="header-anchor" href="#extract-folder" aria-hidden="true">#</a> Extract folder</h3><ul><li>Extract to front: put all folders to the front when sorting</li><li>Extract to back: put all folders to the back when sorting</li></ul>',6);function O(H,W){const l=a("RouterLink"),r=a("FlowChart"),o=a("ExternalLinkIcon"),c=a("Tabs");return g(),f("div",null,[_,e("p",null,[t("Whether the web preview,download and the direct link go through the transfer. If you open this, recommended you set "),n(l,{to:"/config/configuration.html#site_url"},{default:s(()=>[t("site_url")]),_:1}),t(" so that alist can works fine.")]),k,y,b,n(r,{id:"flowchart-68",code:"eJwztLUrLkksKrFSSM7JL01RSMkszuYysrVLzUuxUqjML+VSUOAy1CjKTM8o0dS1M+ICAHhNDlc=",preset:"vue"}),n(r,{id:"flowchart-69",code:"eJwzNLS1Ky5JLCqxUkjOyS9NUUjJLM7mMjKytcsvSC1KLMnMz7NSSMkvz8vJT0xRKCjKr6hUCA3ysbJThgnqggV1S4tyuIyNbe1S81KsFCrzS7kUuAwNNYoy0zNKNHXtjIzgTGNjLgApRCYC",preset:"vue"}),n(r,{id:"flowchart-70",code:"eJw9xjEOgCAMAMC9r+iogwOwkcBfCFQlEmpKMfH3bm5nTIhDk6jH3HgWLHVcYG2IfJMkrdw9DpKHBBvn1FAl9bGTgHMhUi8eX56AYMwi9Th13aK1P52DD3o7H5o=",preset:"vue"}),w,x,n(c,{id:"77",data:[{title:"cloudflare workers"},{title:"Universal Binary"}]},{tab0:s(({title:d,value:p,isActive:h})=>[e("p",null,[t("You can use "),v,t(" for proxy, just fill in the "),S,t(" address here. The workers code can be found at "),e("a",C,[t("https://github.com/alist-org/alist-proxy/blob/main/alist-proxy.js"),n(o)]),t(". in:")]),L,T,U,e("p",null,[t("If you do n’t understand "),e("a",j,[A,n(o)])])]),tab1:s(({title:d,value:p,isActive:h})=>[e("p",null,[t("You can also use another machine for proxying, download the program at "),e("a",M,[t("https://github.com/alist-org/alist-proxy/releases"),n(o)])]),N,e("p",null,[t("If you do n’t understand "),e("a",E,[K,n(o)])])]),_:1}),D,e("p",null,[t("The "),I,t(" is the "),n(l,{to:"/config/other.html#token"},{default:s(()=>[t("token")]),_:1}),t(" of admin user.")]),R])}const z=u(m,[["render",O],["__file","common.html.vue"]]);export{z as default};
