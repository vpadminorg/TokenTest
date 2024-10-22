import{_ as i,D as t,c as o,j as e,a,I as n,aT as p,o as d}from"./chunks/framework.D2knyN-H.js";const F=JSON.parse('{"title":"Modo MPA","description":"","frontmatter":{},"headers":[],"relativePath":"pt/guide/mpa-mode.md","filePath":"pt/guide/mpa-mode.md","lastUpdated":1729600217000}'),l={name:"pt/guide/mpa-mode.md"},r={id:"mpa-mode",tabindex:"-1"},c=e("a",{class:"header-anchor",href:"#mpa-mode","aria-label":'Permalink to "Modo MPA <Badge type="warning" text="experimental" /> {#mpa-mode}"'},"​",-1),h=p(`<p>O modo MPA (Aplicação Multipáginas) pode ser habilitado pela linha de comando com <code>vitepress build --mpa</code>, ou através da configuração pela opção <code>mpa: true</code>.</p><p>No modo MPA, todas as páginas são apresentadas por padrão sem qualquer JavaScript incluído. Como resultado, o site em produção provavelmente terá uma nota de desempenho de visita inicial superior com ferramentas de auditoria.</p><p>Entretanto, devido a ausência de navegação SPA, links entre páginas acarretarão em recarregamentos de página completos. Navegações pós-carregamento no modo MPA não parecerão tão instantâneas quanto no modo SPA.</p><p>Também note que não ter JavaScript por padrão significa que você está essencialmente utilizando Vue como modelo de linguagem no lado do servidor. Nenhum manipulador de evento será embutido no navegador, então não haverá interatividade. Para carregar JavaScript no lado do cliente, você precisará usar a tag especial <code>&lt;script client&gt;</code>:</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> client</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">document.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">querySelector</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;h1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;JavaScript no lado do cliente!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"># Olá</span></span></code></pre></div><p><code>&lt;script client&gt;</code> é uma funcionalidade exclusiva VitePress, não uma funcionalidade Vue. Funciona tanto em arquivos <code>.md</code> quanto em arquivos <code>.vue</code>, mas apenas no modo MPA. Scripts de cliente em todos os componentes do tema serão empacotados juntos, enquanto o script do cliente para uma página específica será dividido apenas para aquela página.</p><p>Note que <code>&lt;script client&gt;</code> <strong>não é avaliado como código de componente Vue</strong>: é processado como um simples módulo JavaScript. Por esta razão, o modo MPA deve ser usado apenas se seu site exige o mínimo absoluto de interatividade no lado do cliente.</p>`,7);function k(m,E,g,u,v,_){const s=t("Badge");return d(),o("div",null,[e("h1",r,[a("Modo MPA "),n(s,{type:"warning",text:"experimental"}),a(),c]),h])}const P=i(l,[["render",k]]);export{F as __pageData,P as default};
