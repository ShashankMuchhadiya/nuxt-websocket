import { ref, onMounted, onUnmounted } from "vue";

export interface Message {
	type: "system" | "message" | "join" | "leave" | "error";
	clientId?: string;
	text?: string;
	message?: string;
	timestamp: string;
	clientsCount?: number;
	isMine?: boolean;
}

export const useWebSocket = () => {
	const config = useRuntimeConfig();

	const connectionStatus = ref<"connected" | "disconnected" | "connecting">("disconnected");
	const messages = ref<Message[]>([]);
	const clientId = ref<string>("");
	const activeClients = ref(0);
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

			ws.onmessage = event => {
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
				} catch (error) {
					console.error("Error parsing message:", error);
				}
			};

			ws.onerror = error => {
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

	const sendMessage = (text: string) => {
		if (!text.trim() || connectionStatus.value !== "connected" || !ws) return false;

		const message = {
			text: text.trim(),
		};

		ws.send(JSON.stringify(message));
		return true;
	};

	const clearMessages = () => {
		messages.value = [];
	};

	onMounted(() => {
		connect();
	});

	onUnmounted(() => {
		disconnect();
	});

	return {
		connectionStatus,
		messages,
		clientId,
		activeClients,
		connect,
		disconnect,
		sendMessage,
		clearMessages,
	};
};
