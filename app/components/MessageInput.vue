<template>
	<section aria-label="Message Input">
		<UCard>
			<template #header>
				<h2 class="text-lg font-semibold">Send Message</h2>
			</template>

			<div class="flex gap-3">
				<UInput
					v-model="messageInput"
					placeholder="Type your message..."
					:disabled="!isConnected"
					@keyup.enter="handleSend"
					size="lg"
					class="flex-1"
				/>
				<UButton
					@click="handleSend"
					:disabled="!isConnected || !messageInput.trim()"
					color="primary"
					size="lg"
				>
					Send
				</UButton>
			</div>

			<div class="mt-3 text-xs text-gray-500 dark:text-gray-400">
				<p>Press Enter to send</p>
			</div>
		</UCard>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{
	isConnected: boolean;
}>();

const emit = defineEmits<{
	send: [message: string];
}>();

const messageInput = ref("");

const handleSend = () => {
	if (!messageInput.value.trim() || !props.isConnected) return;

	emit("send", messageInput.value);
	messageInput.value = "";
};
</script>
