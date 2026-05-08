# Portfólio - Santiago Rodrigues

Um portfólio moderno e interativo desenvolvido com React, Vite, TailwindCSS e animações de partículas WebGL.

## 🚀 Sobre o Projeto

Este é um portfólio pessoal que apresenta informações profissionais, tecnologias utilizadas, projetos e uma seção "Sobre Mim" com um efeito visual impressionante de partículas animadas no fundo.

## ✨ Recursos

- **Página inicial** com animação de partículas WebGL
- **Página de apresentação** com seções de "Sobre Mim" e "Tecnologias"
- **Design responsivo** com TailwindCSS
- **Animações suaves** e efeitos visuais
- **Navegação fluida** com React Router
- **Componentes reutilizáveis** com shadcn/ui

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 16 ou superior) - [Download](https://nodejs.org)
- **npm** (geralmente vem com Node.js)

Para verificar se está instalado:

```bash
node --version
npm --version
```

## 💻 Instalação

1. **Clone ou extraia o projeto**

```bash
cd portifolio
```

2. **Instale as dependências**

```bash
npm install
```

Isso irá instalar todas as dependências listadas em `package.json`:

- React 19
- Vite 8
- React Router 7
- TailwindCSS 4
- Bootstrap 5
- OGL (WebGL library para partículas)
- shadcn components
- E outras dependências

## 🏃 Como Executar

### Modo Desenvolvimento (com Hot Reload)

```bash
npm run dev
```

O projeto abrirá em `http://localhost:5173` (a porta pode variar). O Hot Module Reload permite que você veja alterações em tempo real.

### Build para Produção

```bash
npm run build
```

Cria uma versão otimizada na pasta `dist/` pronta para deploy.

### Preview da Build

```bash
npm run preview
```

Visualiza como a aplicação funcionará em produção antes de fazer deploy.

### Validar Código

```bash
npm run lint
```

Executa ESLint para verificar padrões de código.

## 📁 Estrutura do Projeto

```
portifolio/
├── src/
│   ├── pages/
│   │   ├── HomePage.jsx          # Página inicial com botão de navegação
│   │   ├── HomePage.css
│   │   ├── PresentationPage.jsx   # Página de apresentação
│   │   └── PresentationPage.css
│   ├── components/
│   │   ├── AboutMe.jsx            # Seção sobre mim
│   │   ├── Tecnologies.jsx        # Seção de tecnologias
│   │   ├── Projects.jsx           # Seção de projetos
│   │   └── MegaSena.jsx
│   ├── assets/                    # Imagens e recursos
│   ├── App.jsx                    # Componente raiz
│   ├── App.css
│   ├── main.jsx                   # Entrada da aplicação
│   ├── routes.jsx                 # Configuração de rotas
│   └── lib/
│       └── utils.ts               # Funções utilitárias
├── @/components/
│   ├── Particles.jsx              # Componente de partículas WebGL
│   └── Particles.css
├── public/                        # Arquivos estáticos
├── index.html                     # HTML principal
├── index.css                      # Estilos globais
├── package.json                   # Dependências do projeto
├── vite.config.js                 # Configuração Vite
├── eslint.config.js               # Configuração ESLint
├── tsconfig.json                  # Configuração TypeScript
├── components.json                # Configuração shadcn
└── README.md                      # Este arquivo
```

## 🎨 Componentes Principais

### HomePage

- Tela inicial com botão de navegação
- Animação de partículas como fundo
- Link para a página de apresentação

### PresentationPage

- Seção de perfil com foto
- Seção "Sobre Mim" com informações profissionais
- Seção "Tecnologias" listando skills
- Seção "Projetos" com portfólio
- Botão para voltar à home

### Particles

- Componente WebGL que renderiza partículas animadas
- Usa a biblioteca OGL para renderização
- Configurável por props (cores, contagem, velocidade, etc)

## ⚙️ Configuração de Variáveis

O arquivo `.env` não é necessário para execução básica, mas você pode criar um se precisar de variáveis de ambiente específicas.

## 🐛 Resolução de Problemas

### Erro: "command not found: npm"

- Node.js não está instalado. Baixe em https://nodejs.org

### Erro: "Module not found"

- Execute `npm install` novamente para garantir que todas as dependências foram instaladas

### Porta 5173 já em uso

- Mude a porta no `vite.config.js` ou encerre o processo usando a porta

### Partículas não aparecem

- Verifique se o navegador suporta WebGL (https://get.webgl.org)
- Certifique-se de que `@/components/Particles.jsx` está no caminho correto

### Página "colada" no final ou com scroll horizontal

- Verifique se `html`, `body` e `#root` têm `width: 100%` e `height: 100%` em `index.css`
- Evite usar `100vw` no fundo; use `inset: 0` ou porcentagens

## 🚀 Deploy

### Deploy para Vercel

1. Faça push do código para GitHub
2. Conecte o repositório em https://vercel.com
3. Vercel detectará automaticamente Vite e fará o build
4. Seu site estará online em minutos

### Deploy para Netlify

1. Execute `npm run build` localmente
2. Faça upload da pasta `dist/` em https://netlify.com
3. Ou conecte seu repositório GitHub para CI/CD automático

### Deploy em servidor próprio

1. Execute `npm run build`
2. Copie a pasta `dist/` para seu servidor
3. Configure seu servidor web para servir o `index.html` para todas as rotas (importante para React Router)

## 📝 Licença

Este projeto é de uso pessoal.

## 👤 Autor

**Santiago Rodrigues**

- Estudante de Engenharia de Software
- Desenvolvedor Front-End

---

Para dúvidas ou sugestões, entre em contato.
