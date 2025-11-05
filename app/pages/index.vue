<template>
	<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
		<UContainer class="py-8">
			<div class="max-w-4xl mx-auto">
				<div class="mb-4 flex justify-end">
					<UButton to="/lodash" color="primary" variant="soft" icon="i-heroicons-academic-cap">
						Lodash Demo
					</UButton>
				</div>

				<ConnectionHeader
					:connection-status="connectionStatus"
					@connect="connect"
					@disconnect="disconnect"
				/>

				<MessageList :messages="messages" @clear="clearMessages" />

				<MessageInput :is-connected="connectionStatus === 'connected'" @send="handleSend" />

				<StatsCard
					:messages-count="messages.length"
					:client-id="clientId"
					:active-clients="activeClients"
				/>
			</div>
		</UContainer>
	</main>
</template>

<script setup lang="ts">
// useWebSocket is auto-imported from app/composables/

// SEO Meta Tags
const config = useRuntimeConfig();

useSeoMeta({
	title: "WebSocket Demo - Real-time Messaging Application",
	description:
		"Experience real-time messaging with our WebSocket demo application. Connect, chat, and see instant message delivery powered by WebSocket technology.",
	keywords:
		"WebSocket, real-time messaging, chat application, WebSocket demo, real-time communication, instant messaging",
	ogTitle: "WebSocket Demo - Real-time Messaging Application",
	ogDescription:
		"Experience real-time messaging with our WebSocket demo application. Connect, chat, and see instant message delivery.",
	ogType: "website",
	ogImage: "/og-image.jpg",
	twitterCard: "summary_large_image",
	twitterTitle: "WebSocket Demo - Real-time Messaging Application",
	twitterDescription: "Experience real-time messaging with our WebSocket demo application.",
	robots: "index, follow",
	author: "WebSocket Demo",
});

useHead({
	htmlAttrs: {
		lang: "en",
	},
	link: [
		{
			rel: "canonical",
			href: String(config.public.appUrl),
		},
	],
});

// Structured Data for SEO (JSON-LD)
useHead({
	script: [
		{
			type: "application/ld+json",
			innerHTML: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "WebApplication",
				name: "WebSocket Demo",
				description: "Real-time messaging demo application using WebSocket technology",
				applicationCategory: "CommunicationApplication",
				operatingSystem: "Web",
				offers: {
					"@type": "Offer",
					price: "0",
					priceCurrency: "USD",
				},
			}),
		},
	],
});

// WebSocket Composable
const {
	connectionStatus,
	messages,
	clientId,
	activeClients,
	connect,
	disconnect,
	sendMessage,
	clearMessages,
} = useWebSocket();

const handleSend = (text: string) => {
	sendMessage(text);
};
</script>
