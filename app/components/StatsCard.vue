<template>
	<aside aria-label="Statistics">
		<UCard class="mt-6">
			<div class="grid grid-cols-3 gap-4 text-center">
				<div>
					<div class="text-2xl font-bold text-gray-900 dark:text-white">
						{{ messagesCount }}
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
</template>

<script setup lang="ts">
defineProps<{
	messagesCount: number;
	clientId: string;
	activeClients: number;
}>();
</script>
