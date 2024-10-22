import{_ as a,c as s,o as e,aT as i}from"./chunks/framework.D2knyN-H.js";const E=JSON.parse('{"title":"Макет","description":"","frontmatter":{},"headers":[],"relativePath":"ru/reference/default-theme-layout.md","filePath":"ru/reference/default-theme-layout.md","lastUpdated":1729600217000}'),t={name:"ru/reference/default-theme-layout.md"},l=i(`<h1 id="layout" tabindex="-1">Макет <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;Макет {#layout}&quot;">​</a></h1><p>Вы можете выбрать макет страницы, установив опцию <code>layout</code> в <a href="./frontmatter-config">метаданных</a>. Изначально есть 3 макета: <code>doc</code>, <code>page</code> и <code>home</code>. Если ничего не указано, то страница будет использовать макет <code>doc</code>.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Макет <code>doc</code> <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;Макет \`doc\` {#doc-layout}&quot;">​</a></h2><p>Вариант <code>doc</code> — это макет по умолчанию, который стилизует всё содержимое Markdown в виде «документации». Он работает, оборачивая весь контент в CSS-класс <code>vp-doc</code> и применяя стили к вложенным элементам.</p><p>Почти все общие элементы, такие как <code>p</code> или <code>h2</code>, получают специальную стилизацию. Поэтому имейте в виду, что если вы добавите какой-либо пользовательский HTML внутри Markdown-контента, то он также будет подвержен влиянию этих стилей.</p><p>Кроме того, в нём предусмотрены специальные функции, перечисленные ниже. Эти функции включены только в данном макете.</p><ul><li>Ссылка «Редактировать»</li><li>Ссылки предыдущая/следующая</li><li>Оглавление</li><li>Реклама <a href="./default-theme-carbon-ads">Carbon Ads</a></li></ul><h2 id="page-layout" tabindex="-1">Макет <code>page</code> <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;Макет \`page\` {#page-layout}&quot;">​</a></h2><p>Вариант <code>page</code> сгенерирует «пустую страницу». Markdown всё равно будет разобран, и все <a href="./../guide/markdown">расширения Markdown</a> будут работать так же, как и с макетом <code>doc</code>, но никаких стилей по умолчанию применено не будет.</p><p>Макет <code>page</code> позволит вам оформить всё самостоятельно, без влияния темы VitePress на разметку. Это удобно, когда вы хотите создать свою собственную страницу.</p><p>Обратите внимание, что даже при таком раскладе сайдбар всё равно будет отображаться, если у страницы есть соответствующая конфигурация сайдбара.</p><h2 id="home-layout" tabindex="-1">Макет <code>home</code> <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;Макет \`home\` {#home-layout}&quot;">​</a></h2><p>Вариант <code>home</code> сгенерирует шаблонную «домашнюю страницу». В этом макете вы можете установить дополнительные параметры, такие как <code>hero</code> и <code>features</code>, для дальнейшей настройки контента. Посетите секцию <a href="./default-theme-home-page">Тема по умолчанию: Домашняя страница</a> для получения более подробной информации.</p><h2 id="no-layout" tabindex="-1">Без макета <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;Без макета {#no-layout}&quot;">​</a></h2><p>Если вам не нужен макет, вы можете указать <code>layout: false</code> в метаданных. Этот параметр полезен, если вам нужна полностью настраиваемая целевая страница (по умолчанию без сайдбара, панели навигации или подвала).</p><h2 id="custom-layout" tabindex="-1">Свой макет <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;Свой макет {#custom-layout}&quot;">​</a></h2><p>Вы также можете использовать собственный макет:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>Будет выполнен поиск компонента с именем <code>foo</code>, зарегистрированного в контексте. Например, вы можете зарегистрировать свой компонент глобально в <code>.vitepress/theme/index.ts</code>:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21),n=[l];function o(h,p,d,c,r,k){return e(),s("div",null,n)}const y=a(t,[["render",o]]);export{E as __pageData,y as default};
