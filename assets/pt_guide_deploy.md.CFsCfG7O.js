import{_ as s,c as i,o as a,aT as e}from"./chunks/framework.D2knyN-H.js";const g=JSON.parse('{"title":"Implante seu Site VitePress","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"pt/guide/deploy.md","filePath":"pt/guide/deploy.md","lastUpdated":1729600217000}'),n={name:"pt/guide/deploy.md"},t=e(`<h1 id="deploy-your-vitepress-site" tabindex="-1">Implante seu Site VitePress <a class="header-anchor" href="#deploy-your-vitepress-site" aria-label="Permalink to &quot;Implante seu Site VitePress {#deploy-your-vitepress-site}&quot;">​</a></h1><p>Os guias a seguir são baseados em alguns pressupostos:</p><ul><li><p>O site VitePress está dentro do diretório <code>docs</code> do seu projeto.</p></li><li><p>Você está usando o diretório de saída de compilação padrão (<code>.vitepress/dist</code>).</p></li><li><p>VitePress está instalado como uma dependência local em seu projeto, e você configurou os seguintes scripts em seu <code>package.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:build&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress build docs&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ul><h2 id="build-and-test-locally" tabindex="-1">Compilar e Testar Localmente <a class="header-anchor" href="#build-and-test-locally" aria-label="Permalink to &quot;Compilar e Testar Localmente {#build-and-test-locally}&quot;">​</a></h2><ol><li><p>Execute este comando para compilar a documentação:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:build</span></span></code></pre></div></li><li><p>Após a compilação, veja a prévia local executando:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs:preview</span></span></code></pre></div><p>O comando <code>preview</code> inicializará um servidor web estático local que servirá o diretório de saída <code>.vitepress/dist</code> em <code>http://localhost:4173</code>. Você pode usar isso para garantir que tudo esteja correto antes de enviar para produção.</p></li><li><p>Você pode configurar a porta do servidor passando <code>--port</code> como argumento.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;scripts&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;docs:preview&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;vitepress preview docs --port 8080&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Agora o método <code>docs:preview</code> implantará o servidor em <code>http://localhost:8080</code>.</p></li></ol><h2 id="setting-a-public-base-path" tabindex="-1">Configurando um Caminho Base Público <a class="header-anchor" href="#setting-a-public-base-path" aria-label="Permalink to &quot;Configurando um Caminho Base Público {#setting-a-public-base-path}&quot;">​</a></h2><p>Por padrão, assumimos que o site será implantado no caminho raiz de um domínio (<code>/</code>). Se seu site for servido em um subcaminho, por exemplo, <code>https://meusite.com/blog/</code>, você precisa então configurar a opção <a href="./../reference/site-config#base"><code>base</code></a> para <code>&#39;/blog/&#39;</code> na configuração VitePress.</p><p><strong>Exemplo:</strong> Ao usar GitHub Pages (ou GitLab Pages) e implantar em <code>user.github.io/repo/</code>, defina seu <code>base</code> como <code>/repo/</code>.</p><h2 id="http-cache-headers" tabindex="-1">Cabeçalhos de Cache HTTP <a class="header-anchor" href="#http-cache-headers" aria-label="Permalink to &quot;Cabeçalhos de Cache HTTP {#http-cache-headers}&quot;">​</a></h2><p>Se você tiver controle sobre os cabeçalhos HTTP de seu servidor em produção, pode-se configurar cabeçalhos <code>cache-control</code> para obter melhor desempenho em visitas repetidas.</p><p>A compilação de produção usa nomes de arquivos com hash para ativos estáticos (JavaScript, CSS e outros ativos importados que não estão em <code>public</code>). Se você inspecionar a prévia de produção usando as ferramentas de desenvolvedor do seu nevegador na aba rede, verá arquivos como <code>app.4f283b18.js</code>.</p><p>Este hash <code>4f283b18</code> é gerado a partir do conteúdo deste arquivo. A mesma URL com hash é garantida para servir o mesmo conteúdo do arquivo - se o conteúdo mudar, as URLs também mudam. Isso significa que você pode usar com segurança os cabeçalhos de cache mais fortes para esses arquivos. Todos esses arquivos serão colocados em <code>assets/</code> no diretório de saída, então você pode configurar o seguinte cabeçalho para eles:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>Cache-Control: max-age=31536000,immutable</span></span></code></pre></div><details class="details custom-block"><summary>Exemplo de arquivo <code>_headers</code> do Netlify</summary><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>/assets/*</span></span>
<span class="line"><span>  cache-control: max-age=31536000</span></span>
<span class="line"><span>  cache-control: immutable</span></span></code></pre></div><p>Nota: o arquivo <code>_headers</code> deve ser colocado no <a href="./asset-handling#the-public-directory">diretório public</a> - em nosso caso, <code>docs/public/_headers</code> - para que ele seja copiado exatamente para o diretório de saída.</p><p><a href="https://docs.netlify.com/routing/headers/" target="_blank" rel="noreferrer">Documentação de cabeçalhos personalizados do Netlify</a></p></details><details class="details custom-block"><summary>Exemplo de configuração Vercel em <code>vercel.json</code></summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;source&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;/assets/(.*)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      &quot;headers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Cache-Control&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">          &quot;value&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;max-age=31536000, immutable&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Nota: o arquivo <code>vercel.json</code> deve ser colocado na raiz do seu <strong>repositório</strong>.</p><p><a href="https://vercel.com/docs/concepts/projects/project-configuration#headers" target="_blank" rel="noreferrer">Documentação Vercel sobre configuração de cabeçalhos</a></p></details><h2 id="platform-guides" tabindex="-1">Guias de Plataforma <a class="header-anchor" href="#platform-guides" aria-label="Permalink to &quot;Guias de Plataforma {#platform-guides}&quot;">​</a></h2><h3 id="netlify-vercel-cloudflare-pages-aws-amplify-render" tabindex="-1">Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render <a class="header-anchor" href="#netlify-vercel-cloudflare-pages-aws-amplify-render" aria-label="Permalink to &quot;Netlify / Vercel / Cloudflare Pages / AWS Amplify / Render&quot;">​</a></h3><p>Configure um novo projeto e altere estas configurações usando seu painel:</p><ul><li><strong>Comando de Compilação:</strong> <code>npm run docs:build</code></li><li><strong>Diretório de Saída:</strong> <code>docs/.vitepress/dist</code></li><li><strong>Versão do Node:</strong> <code>18</code> (ou superior)</li></ul><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Não ative opções como <em>Auto Minify</em> para código HTML. Isso removerá comentários da saída que têm significado para Vue. Haverão erros de incompatibilidade de hidratação se forem removidos.</p></div><h3 id="github-pages" tabindex="-1">GitHub Pages <a class="header-anchor" href="#github-pages" aria-label="Permalink to &quot;GitHub Pages&quot;">​</a></h3><ol><li><p>Crie um arquivo chamado <code>deploy.yml</code> dentro do diretório <code>.github/workflows</code> do seu projeto com algum conteúdo como este:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Exemplo de fluxo de trabalho para compilar e implantar um site VitePress no GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Implante o site VitePress no Pages</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Executa em pushes direcionados à branch \`main\`.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Altere para \`master\` se estiver usando a branch \`master\` como padrão.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  push</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    branches</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Permite executar manualmente este fluxo de trabalho na guia Actions</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  workflow_dispatch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Define permissões GITHUB_TOKEN para a implantação no GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">permissions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  contents</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">read</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  id-token</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">write</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Permite apenas uma implantação simultânea, pulando execuções em fila entre a execução em andamento e a última da fila.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># No entanto, NÃO cancela execuções em andamento, pois queremos permitir que essas implantações de produção sejam concluídas.</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">concurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  group</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cancel-in-progress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">jobs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Trabalho de compilação</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  build</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Checkout</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/checkout@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          fetch-depth</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # Não necessário se lastUpdated não estiver habilitado</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: pnpm/action-setup@v3 # Descomente isso se estiver usando pnpm</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      # - uses: oven-sh/setup-bun@v1 # Descomente isso se estiver usando Bun</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Node</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/setup-node@v4</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          node-version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # ou pnpm / yarn</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Setup Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/configure-pages@v4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm ci</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # ou pnpm install / yarn install / bun install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Build with VitePress</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        run</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          npm run docs:build # ou pnpm docs:build / yarn docs:build / bun run docs:build</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          touch docs/.vitepress/dist/.nojekyll</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Upload artifact</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/upload-pages-artifact@v3</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        with</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">          path</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">docs/.vitepress/dist</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Trabalho de implantação</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  deploy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    environment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">github-pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">      url</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\${{ steps.deployment.outputs.page_url }}</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    needs</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    runs-on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ubuntu-latest</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    steps</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Deploy to GitHub Pages</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">deployment</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">        uses</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">actions/deploy-pages@v4</span></span></code></pre></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Certifique-se de que a opção <code>base</code> em seu VitePress esteja configurada corretamente. Veja <a href="#setting-a-public-base-path">Configurando um Caminho Base Público</a> para mais detalhes.</p></div></li><li><p>Nas configurações do seu repositório sob o item do menu &quot;Pages&quot;, selecione &quot;GitHub Actions&quot; em &quot;Build and deployment &gt; Source&quot;.</p></li><li><p>Envie suas alterações para a branch <code>main</code> e aguarde a conclusão do fluxo de trabalho do GitHub Actions. Você verá seu site implantado em <code>https://&lt;username&gt;.github.io/[repository]/</code> ou <code>https://&lt;custom-domain&gt;/</code> dependendo das suas configurações. Seu site será implantado automaticamente em cada push para a branch <code>main</code>.</p></li></ol><h3 id="gitlab-pages" tabindex="-1">GitLab Pages <a class="header-anchor" href="#gitlab-pages" aria-label="Permalink to &quot;GitLab Pages&quot;">​</a></h3><ol><li><p>Defina <code>outDir</code> na configuração VitePress como <code>../public</code>. Configure a opção <code>base</code> para <code>&#39;/&lt;repository&gt;/&#39;</code> se você deseja implantar em <code>https://&lt;username&gt;.gitlab.io/&lt;repository&gt;/</code>.</p></li><li><p>Crie um arquivo chamado <code>.gitlab-ci.yml</code> na raiz do seu projeto com o conteúdo abaixo. Isso construirá e implantará seu site sempre que você fizer alterações no conteúdo:</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">image</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node:18</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">pages</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  cache</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">node_modules/</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # - apk add git # Descomente isso se estiver usando imagens pequenas do Docker como o Alpine e tiver lastUpdated habilitado</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm install</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">npm run docs:build</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  artifacts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">    paths</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">public</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">  only</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    - </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">main</span></span></code></pre></div></li></ol><h3 id="azure-static-web-apps" tabindex="-1">Azure Static Web Apps <a class="header-anchor" href="#azure-static-web-apps" aria-label="Permalink to &quot;Azure Static Web Apps {#azure-static-web-apps}&quot;">​</a></h3><ol><li><p>Siga a <a href="https://docs.microsoft.com/en-us/azure/static-web-apps/build-configuration" target="_blank" rel="noreferrer">documentação oficial</a>.</p></li><li><p>Configure esses valores em seu arquivo de configuração (e remova aqueles que você não precisa, como <code>api_location</code>):</p><ul><li><strong><code>app_location</code></strong>: <code>/</code></li><li><strong><code>output_location</code></strong>: <code>docs/.vitepress/dist</code></li><li><strong><code>app_build_command</code></strong>: <code>npm run docs:build</code></li></ul></li></ol><h3 id="firebase" tabindex="-1">Firebase <a class="header-anchor" href="#firebase" aria-label="Permalink to &quot;Firebase {#firebase}&quot;">​</a></h3><ol><li><p>Crie <code>firebase.json</code> e <code>.firebaserc</code> na raiz do seu projeto:</p><p><code>firebase.json</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hosting&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;public&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: []</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p><code>.firebaserc</code>:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;projects&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;default&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;&lt;SEU_ID_FIREBASE&gt;&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>Após executar <code>npm run docs:build</code>, execute este comando para implantar:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">firebase</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deploy</span></span></code></pre></div></li></ol><h3 id="surge" tabindex="-1">Surge <a class="header-anchor" href="#surge" aria-label="Permalink to &quot;Surge&quot;">​</a></h3><ol><li><p>Após executar <code>npm run docs:build</code>, execute este comando para implantar:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npx</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> surge</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> docs/.vitepress/dist</span></span></code></pre></div></li></ol><h3 id="heroku" tabindex="-1">Heroku <a class="header-anchor" href="#heroku" aria-label="Permalink to &quot;Heroku&quot;">​</a></h3><ol><li><p>Siga a documentação e o guia fornecidos em <a href="https://elements.heroku.com/buildpacks/heroku/heroku-buildpack-static" target="_blank" rel="noreferrer"><code>heroku-buildpack-static</code></a>.</p></li><li><p>Crie um arquivo chamado <code>static.json</code> na raiz do seu projeto com o conteúdo abaixo:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;root&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;docs/.vitepress/dist&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li></ol><h3 id="edgio" tabindex="-1">Edgio <a class="header-anchor" href="#edgio" aria-label="Permalink to &quot;Edgio&quot;">​</a></h3><p>Consulte <a href="https://docs.edg.io/guides/vitepress" target="_blank" rel="noreferrer">Criar e Implantar um Aplicativo VitePress no Edgio</a>.</p><h3 id="kinsta-static-site-hosting" tabindex="-1">Kinsta Static Site Hosting <a class="header-anchor" href="#kinsta-static-site-hosting" aria-label="Permalink to &quot;Kinsta Static Site Hosting {#kinsta-static-site-hosting}&quot;">​</a></h3><p>Você pode implantar seu site VitePress em <a href="https://kinsta.com/static-site-hosting/" target="_blank" rel="noreferrer">Kinsta</a> seguindo estas <a href="https://kinsta.com/docs/vitepress-static-site-example/" target="_blank" rel="noreferrer">instruções</a>.</p>`,36),l=[t];function p(h,o,r,d,k,c){return a(),i("div",null,l)}const u=s(n,[["render",p]]);export{g as __pageData,u as default};
