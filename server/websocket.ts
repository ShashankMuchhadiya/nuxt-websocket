import { WebSocketServer } from "ws";
import type { WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });
const clients = new Map<string, WebSocket>();
let clientCounter = 0;

console.log("🚀 WebSocket server running on ws://localhost:8080");

wss.on("connection", (ws: WebSocket) => {
	const clientId = `client-${++clientCounter}`;
	clients.set(clientId, ws);

	console.log(`✅ ${clientId} connected (Total: ${clients.size})`);

	// Send welcome message
	ws.send(
		JSON.stringify({
			type: "system",
			message: `Welcome! You are ${clientId}`,
			clientId,
			timestamp: new Date().toISOString(),
			clientsCount: clients.size,
		})
	);

	// Broadcast to all clients that a new user joined
	broadcast(clientId, {
		type: "join",
		message: `${clientId} joined the chat`,
		clientId,
		timestamp: new Date().toISOString(),
		clientsCount: clients.size,
	});

	// Handle incoming messages
	ws.on("message", (data: Buffer) => {
		try {
			const message = JSON.parse(data.toString());
			console.log(`📨 Message from ${clientId}:`, message);

			const response = {
				type: "message",
				clientId,
				text: message.text || message,
				timestamp: new Date().toISOString(),
			};

			// Send back to sender (so they see their own message)
			ws.send(JSON.stringify(response));

			// Broadcast to all other clients
			broadcast(clientId, response);
		} catch (error) {
			console.error("Error processing message:", error);
			ws.send(
				JSON.stringify({
					type: "error",
					message: "Invalid message format",
					timestamp: new Date().toISOString(),
				})
			);
		}
	});

	// Handle client disconnection
	ws.on("close", () => {
		clients.delete(clientId);
		console.log(`❌ ${clientId} disconnected (Total: ${clients.size})`);

		// Broadcast to all clients that a user left
		broadcast(clientId, {
			type: "leave",
			message: `${clientId} left the chat`,
			clientId,
			timestamp: new Date().toISOString(),
			clientsCount: clients.size,
		});
	});

	ws.on("error", (error) => {
		console.error(`Error with ${clientId}:`, error);
	});
});

function broadcast(senderId: string | null, data: any) {
	const message = JSON.stringify(data);
	clients.forEach((client, id) => {
		if (id !== senderId && client.readyState === 1) {
			client.send(message);
		}
	});
}

// Handle server shutdown gracefully
process.on("SIGINT", () => {
	console.log("\n🛑 Shutting down WebSocket server...");
	wss.close(() => {
		console.log("✅ WebSocket server closed");
		process.exit(0);
	});
});
