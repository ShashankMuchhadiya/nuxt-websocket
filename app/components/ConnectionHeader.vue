<template>
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
						size="lg"
					>
						<div class="flex items-center gap-2">
							<div
								class="w-2 h-2 rounded-full"
								:class="{
									'bg-green-500': connectionStatus === 'connected',
									'bg-yellow-500': connectionStatus === 'connecting',
									'bg-red-500': connectionStatus === 'disconnected',
								}"
							></div>
							<span class="capitalize">{{ connectionStatus }}</span>
						</div>
					</UBadge>
					<UButton
						v-if="connectionStatus === 'disconnected'"
						@click="$emit('connect')"
						color="primary"
						variant="solid"
					>
						Connect
					</UButton>
					<UButton v-else @click="$emit('disconnect')" color="red" variant="soft">Disconnect</UButton>
				</div>
			</div>
		</UCard>
	</header>
</template>

<script setup lang="ts">
defineProps<{
	connectionStatus: "connected" | "disconnected" | "connecting";
}>();

defineEmits<{
	connect: [];
	disconnect: [];
}>();
</script>
