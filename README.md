# WebSocket Demo Application

A production-ready real-time messaging demo application built with **Nuxt 4**, **WebSocket**, and **Nuxt UI**. This application demonstrates industry best practices including TypeScript strict mode, ESLint, Prettier, SEO optimization, performance monitoring, and modern web standards.

## 🚀 Features

- ✅ **Real-time WebSocket Communication** - Instant messaging with WebSocket protocol
- ✅ **TypeScript Strict Mode** - Full type safety with comprehensive TypeScript settings
- ✅ **ESLint Integration** - Code quality and best practices enforcement
- ✅ **Prettier** - Automatic code formatting
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter Cards, and structured data (JSON-LD)
- ✅ **Nuxt UI Components** - Beautiful, accessible UI components with Tailwind CSS
- ✅ **Security Headers** - XSS protection, content type options, frame options, CSP, and more
- ✅ **Content Security Policy (CSP)** - Comprehensive CSP headers for enhanced security
- ✅ **Performance Optimized** - Build optimizations, compression, and monitoring
- ✅ **Semantic HTML** - Proper HTML5 semantic elements for accessibility
- ✅ **Dark Mode Support** - Built-in dark mode theming
- ✅ **Performance Monitoring** - Sonda integration for performance insights

## 📋 Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0 (or pnpm/yarn/bun)

## 🛠️ Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
# Application URL
APP_URL=http://localhost:3000

# WebSocket Server URL
WEBSOCKET_URL=ws://localhost:8080
```

### 3. Start Development Servers

#### Option A: Start Both Servers Together (Recommended)

```bash
npm run dev:all
```

This will start both the WebSocket server (`ws://localhost:8080`) and Nuxt dev server (`http://localhost:3000`) simultaneously.

#### Option B: Start Servers Separately

**Terminal 1 - WebSocket Server:**

```bash
npm run ws:server
```

**Terminal 2 - Nuxt Dev Server:**

```bash
npm run dev
```

### 4. Access the Application

- **Frontend**: http://localhost:3000
- **WebSocket Server**: ws://localhost:8080

## 📜 Available Scripts

| Script              | Description                           |
| ------------------- | ------------------------------------- |
| `npm run dev`       | Start Nuxt development server         |
| `npm run build`     | Build application for production      |
| `npm run preview`   | Preview production build locally      |
| `npm run generate`  | Generate static site                  |
| `npm run ws:server` | Start WebSocket server                |
| `npm run dev:all`   | Start both WebSocket and Nuxt servers |
| `npm run lint`      | Run ESLint to check code quality      |
| `npm run lint:fix`  | Fix ESLint issues automatically       |
| `npm run typecheck` | Run TypeScript type checking          |

## 🏗️ Project Structure

```
websocket/
├── app/
│   ├── app.vue              # Main application layout
│   ├── components/           # Vue components
│   │   ├── ConnectionHeader.vue
│   │   ├── MessageList.vue
│   │   ├── MessageInput.vue
│   │   └── StatsCard.vue
│   ├── composables/         # Composable functions
│   │   └── useWebSocket.ts
│   ├── pages/               # Page components
│   │   └── index.vue
│   └── assets/              # Assets (CSS, images, etc.)
│       └── css/
│           └── main.css
├── server/
│   └── websocket.ts         # WebSocket server implementation
├── public/                  # Static assets (favicon, robots.txt, etc.)
├── .nuxt/                   # Generated Nuxt files (auto-generated)
├── .output/                 # Build output (auto-generated)
├── nuxt.config.ts          # Nuxt configuration
├── tsconfig.json           # TypeScript configuration
├── .eslintrc.cjs           # ESLint configuration
├── .prettierrc             # Prettier configuration
├── vercel.json             # Vercel deployment configuration
├── .env.example            # Environment variables example
└── package.json            # Dependencies and scripts
```

## 🎯 Best Practices Implemented

### TypeScript Configuration

- ✅ **Strict Mode** - Comprehensive type checking enabled
- ✅ **No Unused Locals/Parameters** - Prevents dead code
- ✅ **No Fallthrough Cases** - Ensures switch statement safety
- ✅ **No Unchecked Indexed Access** - Prevents undefined access
- ✅ **Force Consistent Casing** - Enforces file naming conventions
- ✅ **ES2022 Target** - Modern JavaScript features
- ✅ **Bundler Module Resolution** - Optimized for modern bundlers

### Code Quality Tools

#### ESLint

- Extends `@nuxt/eslint` for Nuxt-specific rules
- Custom rules for production vs development environments
- TypeScript-specific linting rules
- Vue 3 component best practices
- Configurable severity levels

#### Prettier

- Automatic code formatting
- Consistent code style across the project
- Integrated with ESLint for seamless workflow

#### TypeScript

- Strict type checking during development
- Type-safe Vue components
- Full type coverage with vue-tsc

### SEO Configuration

- ✅ **Meta Tags** - Comprehensive meta tag configuration
- ✅ **Open Graph** - Social media sharing optimization
- ✅ **Twitter Cards** - Twitter-specific meta tags
- ✅ **Structured Data (JSON-LD)** - Schema.org markup for search engines
- ✅ **Canonical URLs** - Prevents duplicate content issues
- ✅ **Semantic HTML5** - Proper use of semantic elements
- ✅ **Proper Heading Hierarchy** - SEO-friendly heading structure

### Security

- ✅ **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- ✅ **X-Frame-Options: DENY** - Prevents clickjacking attacks
- ✅ **X-XSS-Protection: 1; mode=block** - XSS protection
- ✅ **Referrer-Policy: strict-origin-when-cross-origin** - Privacy protection
- ✅ **Content-Security-Policy** - Comprehensive CSP with WebSocket support
- ✅ **Permissions-Policy** - Restricts access to browser features

### Performance

- ✅ **Build Optimization** - Compressed and minified assets
- ✅ **Public Asset Compression** - Reduced bundle sizes
- ✅ **Efficient Bundle Splitting** - Optimized code splitting
- ✅ **Performance Monitoring** - Sonda integration for insights
- ✅ **Lazy Loading** - Optimized component loading

## 🔧 Configuration Files

### ESLint (`.eslintrc.cjs`)

Extends `@nuxt/eslint` with custom rules for:

- Production vs development environment handling
- TypeScript-specific rules
- Vue 3 best practices
- Console and debugger warnings/errors

### Prettier (`.prettierrc`)

Configured for consistent code formatting across the project.

### TypeScript (`tsconfig.json`)

Strict TypeScript configuration with:

- Comprehensive type checking
- Modern module resolution
- ES2022 target
- Strict compiler options

## 🌐 Environment Variables

| Variable        | Description          | Default                 |
| --------------- | -------------------- | ----------------------- |
| `APP_URL`       | Application base URL | `http://localhost:3000` |
| `WEBSOCKET_URL` | WebSocket server URL | `ws://localhost:8080`   |

## 🛡️ Code Quality

### Linting

Check code quality:

```bash
npm run lint
```

Auto-fix issues:

```bash
npm run lint:fix
```

### Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

### Formatting

Code is automatically formatted with Prettier. Configure your editor to format on save.

## 📦 Dependencies

### Production Dependencies

- **@nuxt/ui** - UI component library with Tailwind CSS
- **@nuxtjs/seo** - SEO optimization module
- **@nuxt/eslint** - ESLint integration for Nuxt
- **nuxt** - Vue.js framework (v4.2.0)
- **vue** - Progressive JavaScript framework (v3.5.22)
- **vue-router** - Official router for Vue.js (v4.6.3)
- **ws** - WebSocket library for Node.js (v8.18.0)
- **eslint** - JavaScript linter (v9.37.0)

### Development Dependencies

- **@types/ws** - TypeScript definitions for ws
- **concurrently** - Run multiple commands concurrently
- **tsx** - TypeScript execution environment
- **typescript** - TypeScript compiler (v5.9.3)
- **vue-tsc** - TypeScript type checker for Vue (v3.1.1)
- **prettier** - Code formatter (v3.6.2)
- **sonda** - Performance monitoring tool (v0.9.0)

## 🚀 Production Build

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

## 📚 Technologies

- **[Nuxt 4](https://nuxt.com/)** - Vue.js framework with SSR and file-based routing
- **[Nuxt UI](https://ui.nuxt.com/)** - UI component library
- **[Nuxt SEO](https://nuxtseo.com/)** - SEO optimization module
- **[Nuxt ESLint](https://eslint.nuxt.com/)** - ESLint integration
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[WebSocket (ws)](https://github.com/websockets/ws)** - Real-time communication
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS (via Nuxt UI)
- **[Prettier](https://prettier.io/)** - Code formatter
- **[Sonda](https://github.com/nuxt/sonda)** - Performance monitoring
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript framework

## 📖 Documentation Links

- [Nuxt Documentation](https://nuxt.com/docs/getting-started/introduction)
- [Nuxt UI Documentation](https://ui.nuxt.com/)
- [Nuxt SEO Documentation](https://nuxtseo.com/)
- [Nuxt ESLint Documentation](https://eslint.nuxt.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vue 3 Documentation](https://vuejs.org/)
- [WebSocket API](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
- [Prettier Documentation](https://prettier.io/docs/en/)

## 🐛 Troubleshooting

### WebSocket Connection Issues

If you're unable to connect to the WebSocket server:

1. Ensure the WebSocket server is running: `npm run ws:server`
2. Check the `WEBSOCKET_URL` in your `.env` file
3. Verify the port 8080 is not already in use

### TypeScript Errors

If you encounter TypeScript errors:

1. Run `npm run typecheck` to see detailed errors
2. Ensure all dependencies are installed: `npm install`
3. Check `tsconfig.json` configuration

### Linting Issues

If ESLint shows errors:

1. Run `npm run lint:fix` to auto-fix issues
2. Check `.eslintrc.cjs` configuration
3. Ensure `@nuxt/eslint` is properly installed

## 🤝 Contributing

1. Follow the ESLint and Prettier configurations
2. Ensure TypeScript strict mode compliance
3. Write semantic HTML
4. Follow Vue 3 composition API best practices
5. Add proper type definitions

## 🚀 Vercel Deployment

### Prerequisites

1. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
2. **GitHub Repository** - Push your code to GitHub
3. **WebSocket Server** - Deploy WebSocket server separately (Vercel doesn't support WebSocket servers)

### Deployment Steps

1. **Connect Repository to Vercel**:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "New Project"
   - Import your GitHub repository

2. **Configure Environment Variables**:

   ```
   APP_URL=https://your-app.vercel.app
   WEBSOCKET_URL=wss://your-websocket-server.com
   ```

3. **Deploy**:
   - Vercel will automatically detect Nuxt and deploy
   - The `vercel.json` file is configured for optimal deployment

4. **WebSocket Server**:
   - Deploy WebSocket server separately (e.g., Railway, Render, or your own server)
   - Update `WEBSOCKET_URL` environment variable with your WebSocket server URL
   - Ensure the WebSocket server supports WSS (secure WebSocket) for production

### Content Security Policy (CSP)

The application includes comprehensive CSP headers configured in `nuxt.config.ts`:

- **Script Sources**: Allows self, unsafe-inline (for Nuxt hydration), and unsafe-eval (for Vue)
- **Style Sources**: Allows self, unsafe-inline (for Tailwind), and Google Fonts
- **Connect Sources**: Allows WebSocket connections (ws://, wss://) and HTTPS
- **Upgrade Insecure Requests**: Automatically upgrades HTTP to HTTPS in production

**CSP Configuration**:

```typescript
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com data:;
  img-src 'self' data: https: blob:;
  connect-src 'self' ws://localhost:* wss://* ws://* https://*;
  upgrade-insecure-requests;
```

### Production Environment Variables

For production on Vercel, set these environment variables:

```env
APP_URL=https://nuxt-websocket.vercel.app
WEBSOCKET_URL=wss://your-websocket-server.com
NODE_ENV=production
```

### WebSocket Server Deployment Options

Since Vercel doesn't support WebSocket servers, deploy your WebSocket server separately:

1. **Railway** - Easy deployment for Node.js servers
2. **Render** - Free tier available for WebSocket servers
3. **DigitalOcean App Platform** - Supports WebSocket connections
4. **AWS/GCP/Azure** - Enterprise-grade solutions
5. **Your Own Server** - Full control over infrastructure

## 📄 License

This project is private and for demonstration purposes.

---

**Built with ❤️ using Nuxt 4 and modern web technologies**

**Live Demo**: [https://nuxt-websocket.vercel.app/](https://nuxt-websocket.vercel.app/)
