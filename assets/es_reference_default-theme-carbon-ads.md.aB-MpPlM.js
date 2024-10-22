import{_ as s,c as a,o as e,aT as i}from"./chunks/framework.D2knyN-H.js";const g=JSON.parse('{"title":"Carbon Ads","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/default-theme-carbon-ads.md","filePath":"es/reference/default-theme-carbon-ads.md","lastUpdated":1729600217000}'),n={name:"es/reference/default-theme-carbon-ads.md"},t=i(`<h1 id="carbon-ads" tabindex="-1">Carbon Ads <a class="header-anchor" href="#carbon-ads" aria-label="Permalink to &quot;Carbon Ads {#carbon-ads}&quot;">​</a></h1><p>VitePress ha incorporado soporte nativo para <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Carbon Ads</a>. Al definir las credenciales de Carbon Ads en la configuración, VitePress mostrará anuncios en la página.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  themeConfig: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    carbonAds: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      code: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tu-código-carbon&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      placement: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;tu-vinculación-carbon&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Estos valores se utilizan para llamar al script en CDN de carbon como se muestra a continuación.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`//cdn.carbonads.com/carbon.js?serve=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}&amp;placement=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">placement</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}\`</span></span></code></pre></div><p>Para obtener más información de la configuración de Carbono Ads, por favor visite <a href="https://www.carbonads.net/" target="_blank" rel="noreferrer">Site Carbon Ads</a>.</p>`,6),r=[t];function l(p,o,h,d,c,k){return e(),a("div",null,r)}const b=s(n,[["render",l]]);export{g as __pageData,b as default};
