import{_ as a,c as e,o as s,aT as i}from"./chunks/framework.D2knyN-H.js";const u=JSON.parse('{"title":"Links Anterior y Próximo","description":"","frontmatter":{},"headers":[],"relativePath":"es/reference/default-theme-prev-next-links.md","filePath":"es/reference/default-theme-prev-next-links.md","lastUpdated":1729600217000}'),n={name:"es/reference/default-theme-prev-next-links.md"},l=i(`<h1 id="prev-next-links" tabindex="-1">Links Anterior y Próximo <a class="header-anchor" href="#prev-next-links" aria-label="Permalink to &quot;Links Anterior y Próximo {#prev-next-links}&quot;">​</a></h1><p>Puede personalizar el texto y el enlace de los botones Anterior y Siguiente que se muestran en la parte inferior de la página. Esto es útil cuando desea mostrar un texto diferente al que tiene en la barra lateral. Además, puede resultarle útil desactivar el pie de página o el enlace a la página para que no se incluya en la barra lateral.</p><h2 id="prev" tabindex="-1">prev <a class="header-anchor" href="#prev" aria-label="Permalink to &quot;prev&quot;">​</a></h2><ul><li><p>Tipo: <code>string | false | { text?: string; link?: string }</code></p></li><li><p>Detalles:</p><p>Especifica el text/enlace que se mostrará en el enlace a la página anterior. Si no ve esto al principio, el text/enlace se deducirá de la configuración de la barra lateral.</p></li><li><p>Ejemplos:</p><ul><li><p>Para personalizar solo texto:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Iniciar | Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>Para personalizar ambos texto y link:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  text</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  link</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/guide/markdown&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li><li><p>Para esconder la página anterior:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">prev</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div></li></ul></li></ul><h2 id="next" tabindex="-1">next <a class="header-anchor" href="#next" aria-label="Permalink to &quot;next&quot;">​</a></h2><p>Igual que el <code>prev</code> pero para la página siguiente.</p>`,6),t=[l];function p(r,h,o,d,k,c){return s(),e("div",null,t)}const y=a(n,[["render",p]]);export{u as __pageData,y as default};
