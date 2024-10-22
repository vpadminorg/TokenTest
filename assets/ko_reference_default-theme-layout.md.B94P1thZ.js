import{_ as a,c as s,o as e,aT as i}from"./chunks/framework.D2knyN-H.js";const E=JSON.parse('{"title":"레이아웃","description":"","frontmatter":{},"headers":[],"relativePath":"ko/reference/default-theme-layout.md","filePath":"ko/reference/default-theme-layout.md","lastUpdated":1729600217000}'),t={name:"ko/reference/default-theme-layout.md"},l=i(`<h1 id="layout" tabindex="-1">레이아웃 <a class="header-anchor" href="#layout" aria-label="Permalink to &quot;레이아웃 {#layout}&quot;">​</a></h1><p>페이지 <a href="./frontmatter-config">프런트매터</a>에 <code>layout</code> 옵션을 설정함으로써 페이지 레이아웃을 선택할 수 있습니다. <code>doc</code>, <code>page</code>, <code>home</code>의 세 가지 레이아웃 옵션이 있습니다. 아무것도 지정하지 않으면, 해당 페이지는 <code>doc</code> 페이지로 처리됩니다.</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">doc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---</span></span></code></pre></div><h2 id="doc-layout" tabindex="-1">Doc 레이아웃 <a class="header-anchor" href="#doc-layout" aria-label="Permalink to &quot;Doc 레이아웃 {#doc-layout}&quot;">​</a></h2><p><code>doc</code> 옵션은 기본 레이아웃이며, 전체 마크다운 내용을 &quot;문서화&quot;된 모양으로 스타일링합니다. 이것은 전체 내용을 <code>vp-doc</code> css 클래스로 감싸고, 그 아래 요소들에 스타일을 적용함으로써 작동합니다.</p><p><code>p</code>나 <code>h2</code>와 같은 거의 모든 일반 요소들은 특별한 스타일링을 받습니다. 따라서 마크다운 내용 내에 사용자 정의 HTML을 추가할 경우, 이러한 스타일들에 영향을 받게 될 것임을 명심하세요.</p><p>또한 아래 나열된 문서화 특정 기능들을 제공합니다. 이 기능들은 이 레이아웃에서만 활성화됩니다.</p><ul><li>편집 링크</li><li>이전/다음 링크</li><li>개요</li><li><a href="./default-theme-carbon-ads">카본 광고</a></li></ul><h2 id="page-layout" tabindex="-1">페이지 레이아웃 <a class="header-anchor" href="#page-layout" aria-label="Permalink to &quot;페이지 레이아웃 {#page-layout}&quot;">​</a></h2><p><code>page</code> 옵션은 &quot;빈 페이지&quot;로 처리됩니다. 마크다운은 여전히 파싱되며, 모든 <a href="./../guide/markdown">마크다운 확장</a> 기능은 <code>doc</code> 레이아웃과 동일하게 작동하지만, 기본 스타일은 적용받지 않습니다.</p><p>페이지 레이아웃을 통해 VitePress 테마의 마크업 영향을 받지 않고 모든 것을 직접 스타일링할 수 있습니다. 이는 사용자 정의 페이지를 생성하고 싶을 때 유용합니다.</p><p>이 레이아웃에서도 페이지가 일치하는 사이드바 구성이 있는 경우 여전히 사이드바가 표시됨을 유의하세요.</p><h2 id="home-layout" tabindex="-1">홈 레이아웃 <a class="header-anchor" href="#home-layout" aria-label="Permalink to &quot;홈 레이아웃 {#home-layout}&quot;">​</a></h2><p><code>home</code> 옵션은 템플릿화된 &quot;홈페이지&quot;를 생성합니다. 이 레이아웃에서는 <code>hero</code> 및 <code>features</code>와 같은 추가 옵션을 설정해 컨텐츠를 더 자세히 커스터마이즈할 수 있습니다. 자세한 내용은 <a href="./default-theme-home-page">기본 테마: 홈 페이지</a>를 방문해주세요.</p><h2 id="no-layout" tabindex="-1">레이아웃 없음 <a class="header-anchor" href="#no-layout" aria-label="Permalink to &quot;레이아웃 없음 {#no-layout}&quot;">​</a></h2><p>레이아웃을 원하지 않는 경우, 프런트매터를 통해 <code>layout: false</code>를 전달할 수 있습니다. 이 옵션은 완전히 맞춤화된 랜딩 페이지(기본적으로 사이드바, 내비게이션 바, 또는 푸터 없음)를 원할 때 유용합니다.</p><h2 id="custom-layout" tabindex="-1">사용자 정의 레이아웃 <a class="header-anchor" href="#custom-layout" aria-label="Permalink to &quot;사용자 정의 레이아웃 {#custom-layout}&quot;">​</a></h2><p>또한 사용자 정의 레이아웃을 사용할 수 있습니다:</p><div class="language-md vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">layout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">foo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---</span></span></code></pre></div><p>이것은 컨텍스트에 등록된 <code>foo</code>라는 이름의 컴포넌트를 찾습니다. 예를 들어, <code>.vitepress/theme/index.ts</code>에서 컴포넌트를 전역으로 등록할 수 있습니다:</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> DefaultTheme </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;vitepress/theme&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Foo </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./Foo.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  extends: DefaultTheme,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  enhanceApp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">app</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    app.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;foo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, Foo)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,21),n=[l];function o(h,p,d,c,k,r){return e(),s("div",null,n)}const y=a(t,[["render",o]]);export{E as __pageData,y as default};
