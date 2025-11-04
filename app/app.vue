<template>
	<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
		<UContainer class="py-8">
			<div class="max-w-4xl mx-auto">
				<!-- Header -->
				<header>
					<UCard class="mb-6">
						<div class="flex items-center justify-between">
							<div>
								<h1 class="text-2xl font-bold text-gray-900 dark:text-white">WebSocket Demo</h1>
								<p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
									Real-time messaging with WebSocket technology
								</p>
							</div>
							<div class="flex items-center gap-3">
								<UBadge
									:color="
										connectionStatus === 'connected'
											? 'green'
											: connectionStatus === 'connecting'
											? 'yellow'
											: 'red'
									"
									variant="subtle"
									size="lg">
									<div class="flex items-center gap-2">
										<div
											class="w-2 h-2 rounded-full"
											:class="{
												'bg-green-500': connectionStatus === 'connected',
												'bg-yellow-500': connectionStatus === 'connecting',
												'bg-red-500': connectionStatus === 'disconnected',
											}"></div>
										<span class="capitalize">{{ connectionStatus }}</span>
									</div>
								</UBadge>
								<UButton
									v-if="connectionStatus === 'disconnected'"
									@click="connect"
									color="primary"
									variant="solid">
									Connect
								</UButton>
								<UButton v-else @click="disconnect" color="red" variant="soft">Disconnect</UButton>
							</div>
						</div>
					</UCard>
				</header>

				<!-- Messages Area -->
				<section aria-label="Messages">
					<UCard class="mb-6">
						<template #header>
							<div class="flex items-center justify-between">
								<h2 class="text-lg font-semibold">Messages</h2>
								<UButton
									v-if="messages.length > 0"
									@click="clearMessages"
									color="gray"
									variant="ghost"
									size="xs">
									Clear
								</UButton>
							</div>
						</template>

						<div ref="messagesContainer" class="h-96 overflow-y-auto space-y-3 p-4">
							<div
								v-if="messages.length === 0"
								class="flex items-center justify-center h-full text-gray-400">
								<div class="text-center">
									<p>No messages yet</p>
									<p class="text-sm mt-1">Connect and start chatting!</p>
								</div>
							</div>

							<div
								v-for="(message, index) in messages"
								:key="index"
								class="flex gap-3"
								:class="message.type === 'system' ? 'justify-center' : ''">
								<div v-if="message.type !== 'system'" class="flex-shrink-0">
									<UAvatar
										:alt="message.clientId"
										size="sm"
										:color="getAvatarColor(message.clientId)">
										{{ message.clientId?.charAt(message.clientId.length - 1) || "U" }}
									</UAvatar>
								</div>
								<div class="flex-1" :class="message.type === 'system' ? 'max-w-full' : ''">
									<UCard
										:class="{
											'bg-blue-50 dark:bg-blue-900/20': message.type === 'system',
											'bg-gray-100 dark:bg-gray-800':
												message.type === 'message' && message.isMine,
											'bg-white dark:bg-gray-700': message.type === 'message' && !message.isMine,
										}"
										:ui="{ body: { padding: 'p-3' } }">
										<div v-if="message.type === 'system'">
											<p class="text-xs text-gray-500 dark:text-gray-400 text-center">
												{{ message.message }}
											</p>
										</div>
										<div v-else>
											<div class="flex items-center justify-between mb-1">
												<span class="text-xs font-medium text-gray-700 dark:text-gray-300">
													{{ message.clientId }}
												</span>
												<span class="text-xs text-gray-400">
													{{ formatTime(message.timestamp) }}
												</span>
											</div>
											<p class="text-sm text-gray-900 dark:text-white">
												{{ message.text }}
											</p>
										</div>
									</UCard>
								</div>
							</div>
						</div>
					</UCard>
				</section>

				<!-- Input Area -->
				<section aria-label="Message Input">
					<UCard>
						<template #header>
							<h2 class="text-lg font-semibold">Send Message</h2>
						</template>

						<div class="flex gap-3">
							<UInput
								v-model="messageInput"
								placeholder="Type your message..."
								:disabled="connectionStatus !== 'connected'"
								@keyup.enter="sendMessage"
								size="lg"
								class="flex-1" />
							<UButton
								@click="sendMessage"
								:disabled="connectionStatus !== 'connected' || !messageInput.trim()"
								color="primary"
								size="lg">
								Send
							</UButton>
						</div>

						<div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
							<p>Press Enter to send</p>
						</div>
					</UCard>
				</section>

				<!-- Stats Card -->
				<aside aria-label="Statistics">
					<UCard class="mt-6">
						<div class="grid grid-cols-3 gap-4 text-center">
							<div>
								<div class="text-2xl font-bold text-gray-900 dark:text-white">
									{{ messages.length }}
								</div>
								<div class="text-xs text-gray-500 dark:text-gray-400">Messages</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900 dark:text-white">
									{{ clientId || "-" }}
								</div>
								<div class="text-xs text-gray-500 dark:text-gray-400">Your ID</div>
							</div>
							<div>
								<div class="text-2xl font-bold text-gray-900 dark:text-white">
									{{ activeClients }}
								</div>
								<div class="text-xs text-gray-500 dark:text-gray-400">Active Clients</div>
							</div>
						</div>
					</UCard>
				</aside>
			</div>
		</UContainer>
	</main>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";

// Runtime Config
const config = useRuntimeConfig();

// SEO Meta Tags
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

interface Message {
	type: "system" | "message" | "join" | "leave" | "error";
	clientId?: string;
	text?: string;
	message?: string;
	timestamp: string;
	clientsCount?: number;
	isMine?: boolean;
}

const connectionStatus = ref<"connected" | "disconnected" | "connecting">("disconnected");
const messages = ref<Message[]>([]);
const messageInput = ref("");
const clientId = ref<string>("");
const activeClients = ref(0);
const messagesContainer = ref<HTMLElement | null>(null);
let ws: WebSocket | null = null;

const connect = () => {
	if (ws?.readyState === WebSocket.OPEN) return;

	connectionStatus.value = "connecting";

	try {
		const wsUrl = config.public.websocketUrl || "ws://localhost:8080";
		ws = new WebSocket(wsUrl);

		ws.onopen = () => {
			connectionStatus.value = "connected";
			console.log("✅ Connected to WebSocket server");
		};

		ws.onmessage = (event) => {
			try {
				const data: Message = JSON.parse(event.data);
				data.isMine = data.clientId === clientId.value;

				// Update client info
				if (data.type === "system" && data.clientId) {
					clientId.value = data.clientId;
				}
				if (data.clientsCount !== undefined) {
					activeClients.value = data.clientsCount;
				}

				messages.value.push(data);
				scrollToBottom();
			} catch (error) {
				console.error("Error parsing message:", error);
			}
		};

		ws.onerror = (error) => {
			console.error("WebSocket error:", error);
			connectionStatus.value = "disconnected";
		};

		ws.onclose = () => {
			connectionStatus.value = "disconnected";
			console.log("❌ Disconnected from WebSocket server");

			// Attempt to reconnect after 3 seconds
			setTimeout(() => {
				if (connectionStatus.value === "disconnected") {
					connect();
				}
			}, 3000);
		};
	} catch (error) {
		console.error("Failed to connect:", error);
		connectionStatus.value = "disconnected";
	}
};

const disconnect = () => {
	if (ws) {
		ws.close();
		ws = null;
	}
	connectionStatus.value = "disconnected";
	clientId.value = "";
	activeClients.value = 0;
};

const sendMessage = () => {
	if (!messageInput.value.trim() || connectionStatus.value !== "connected" || !ws) return;

	const message = {
		text: messageInput.value.trim(),
	};

	ws.send(JSON.stringify(message));
	messageInput.value = "";
};

const clearMessages = () => {
	messages.value = [];
};

const scrollToBottom = async () => {
	await nextTick();
	if (messagesContainer.value) {
		messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
	}
};

const formatTime = (timestamp: string) => {
	const date = new Date(timestamp);
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit",
	});
};

const getAvatarColor = (id?: string): string => {
	if (!id) return "gray";
	const colors: string[] = ["primary", "green", "blue", "purple", "pink", "orange"];
	const index = id.charCodeAt(id.length - 1) % colors.length;
	return colors[index] || "gray";
};

onMounted(() => {
	connect();
});

onUnmounted(() => {
	disconnect();
});
</script>
