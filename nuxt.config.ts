import Sonda from "sonda/nuxt";

export default defineNuxtConfig({
	compatibilityDate: "2025-07-15",
	devtools: { enabled: true },

	// Modules
	modules: [
		"@nuxt/ui",
		"@nuxtjs/seo",
		"@nuxt/eslint",
		Sonda({
			server: true,
		}),
	],
	// SPA mode configuration
	ssr: true,

	// TypeScript
	typescript: {
		strict: true,
		typeCheck: false, // Disable during build to avoid jiti/import.meta issues
	},

	// Runtime Config
	runtimeConfig: {
		public: {
			websocketUrl: process.env.WEBSOCKET_URL || "ws://localhost:8080",
			appUrl: process.env.APP_URL || "http://localhost:3000",
		},
	},

	// App Configuration
	app: {
		head: {
			htmlAttrs: {
				lang: "en",
			},
			charset: "utf-8",
			viewport: "width=device-width, initial-scale=1",
			link: [
				{
					rel: "icon",
					type: "image/x-icon",
					href: "/favicon.ico",
				},
			],
		},
		pageTransition: { name: "page", mode: "out-in" },
	},

	// SEO Configuration
	site: {
		url: process.env.APP_URL || "http://localhost:3000",
		name: "WebSocket Demo",
		description: "Real-time messaging demo application using WebSocket technology",
		defaultLocale: "en",
	},

	// Performance
	experimental: {
		payloadExtraction: false,
	},

	// Build Optimization
	nitro: {
		compressPublicAssets: true,
		minify: true,
	},

	// CSS configuration
	css: [],

	// Security Headers with CSP
	routeRules: {
		"/**": {
			headers: {
				"X-Content-Type-Options": "nosniff",
				"X-Frame-Options": "DENY",
				"X-XSS-Protection": "1; mode=block",
				"Referrer-Policy": "strict-origin-when-cross-origin",
				"Permissions-Policy": "geolocation=(), microphone=(), camera=(), interest-cohort=()",
				"Content-Security-Policy": [
					"default-src 'self'",
					"script-src 'self' 'unsafe-inline' 'unsafe-eval'", // unsafe-eval for Vue/Nuxt, unsafe-inline for hydration
					"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com", // unsafe-inline for Tailwind, Google Fonts
					"font-src 'self' https://fonts.gstatic.com data:",
					"img-src 'self' data: https: blob:",
					"connect-src 'self' ws://localhost:* wss://* ws://* https://*", // WebSocket and HTTPS connections
					"media-src 'self'",
					"object-src 'none'",
					"base-uri 'self'",
					"form-action 'self'",
					"frame-ancestors 'none'",
					"upgrade-insecure-requests", // Upgrade HTTP to HTTPS in production
				].join("; "),
			},
		},
	},
});
