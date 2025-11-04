<template>
	<section aria-label="Messages">
		<UCard class="mb-6">
			<template #header>
				<div class="flex items-center justify-between">
					<h2 class="text-lg font-semibold">Messages</h2>
					<UButton
						v-if="messages.length > 0"
						@click="$emit('clear')"
						color="gray"
						variant="ghost"
						size="xs"
					>
						Clear
					</UButton>
				</div>
			</template>

			<div ref="messagesContainer" class="h-96 overflow-y-auto space-y-3 p-4">
				<div v-if="messages.length === 0" class="flex items-center justify-center h-full text-gray-400">
					<div class="text-center">
						<p>No messages yet</p>
						<p class="text-sm mt-1">Connect and start chatting!</p>
					</div>
				</div>

				<div
					v-for="(message, index) in messages"
					:key="index"
					class="flex gap-3"
					:class="message.type === 'system' ? 'justify-center' : ''"
				>
					<div v-if="message.type !== 'system'" class="flex-shrink-0">
						<UAvatar :alt="message.clientId" size="sm" :color="getAvatarColor(message.clientId)">
							{{ message.clientId?.charAt(message.clientId.length - 1) || "U" }}
						</UAvatar>
					</div>
					<div class="flex-1" :class="message.type === 'system' ? 'max-w-full' : ''">
						<UCard
							:class="{
								'bg-blue-50 dark:bg-blue-900/20': message.type === 'system',
								'bg-gray-100 dark:bg-gray-800': message.type === 'message' && message.isMine,
								'bg-white dark:bg-gray-700': message.type === 'message' && !message.isMine,
							}"
							:ui="{ body: { padding: 'p-3' } }"
						>
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
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from "vue";
import type { Message } from "~/app/composables/useWebSocket";

const props = defineProps<{
	messages: Message[];
}>();

defineEmits<{
	clear: [];
}>();

const messagesContainer = ref<HTMLElement | null>(null);

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

const scrollToBottom = async () => {
	await nextTick();
	if (messagesContainer.value) {
		messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
	}
};

watch(
	() => props.messages.length,
	() => {
		scrollToBottom();
	},
	{ deep: true }
);
</script>
