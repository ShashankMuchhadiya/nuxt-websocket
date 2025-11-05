<template>
	<main class="min-h-screen bg-gray-50 dark:bg-gray-900">
		<UContainer class="py-8">
			<div class="max-w-6xl mx-auto">
				<!-- Header -->
				<header class="mb-8">
					<UCard>
						<div class="flex items-center justify-between">
							<div>
								<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">Lodash Concepts Demo</h1>
								<p class="text-gray-600 dark:text-gray-400">
									Comprehensive examples of Lodash's major utility functions and concepts
								</p>
							</div>
							<UButton to="/" color="gray" variant="soft" icon="i-heroicons-arrow-left">
								Back to Home
							</UButton>
						</div>
					</UCard>
				</header>

				<!-- Navigation -->
				<nav class="mb-6">
					<UCard>
						<div class="flex flex-wrap gap-2">
							<UButton
								v-for="category in categories"
								:key="category"
								:color="activeCategory === category ? 'primary' : 'gray'"
								:variant="activeCategory === category ? 'solid' : 'ghost'"
								@click="activeCategory = category"
							>
								{{ category }}
							</UButton>
						</div>
					</UCard>
				</nav>

				<!-- Array Methods -->
				<section v-if="activeCategory === 'Array'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">Array Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- chunk -->
							<div>
								<h3 class="text-lg font-medium mb-2">chunk() - Split array into chunks</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.chunk([1, 2, 3, 4, 5], 2)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.chunk, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- compact -->
							<div>
								<h3 class="text-lg font-medium mb-2">compact() - Remove falsy values</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.compact([0, 1, false, 2, '', 3])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.compact, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- difference -->
							<div>
								<h3 class="text-lg font-medium mb-2">difference() - Array difference</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.difference([2, 1], [2, 3])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.difference, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- flatten -->
							<div>
								<h3 class="text-lg font-medium mb-2">flatten() - Flatten array</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.flatten([1, [2, [3, [4]], 5]])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.flatten, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- flattenDeep -->
							<div>
								<h3 class="text-lg font-medium mb-2">flattenDeep() - Deep flatten</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.flattenDeep([1, [2, [3, [4]], 5]])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.flattenDeep, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- intersection -->
							<div>
								<h3 class="text-lg font-medium mb-2">intersection() - Common elements</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.intersection([2, 1], [2, 3])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.intersection, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- union -->
							<div>
								<h3 class="text-lg font-medium mb-2">union() - Unique union</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.union([2], [1, 2])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.union, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- uniq -->
							<div>
								<h3 class="text-lg font-medium mb-2">uniq() - Remove duplicates</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.uniq([2, 1, 2])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.uniq, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- without -->
							<div>
								<h3 class="text-lg font-medium mb-2">without() - Remove values</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.without([2, 1, 2, 3], 1, 2)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(arrayExamples.without, null, 2) }}</pre>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>

				<!-- Collection Methods -->
				<section v-if="activeCategory === 'Collection'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">Collection Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- groupBy -->
							<div>
								<h3 class="text-lg font-medium mb-2">groupBy() - Group by key</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.groupBy(users, 'age')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(collectionExamples.groupBy, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- keyBy -->
							<div>
								<h3 class="text-lg font-medium mb-2">keyBy() - Create object by key</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.keyBy(users, 'id')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(collectionExamples.keyBy, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- orderBy -->
							<div>
								<h3 class="text-lg font-medium mb-2">orderBy() - Sort collection</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.orderBy(users, ['age', 'name'], ['asc', 'desc'])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(collectionExamples.orderBy, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- partition -->
							<div>
								<h3 class="text-lg font-medium mb-2">partition() - Split into groups</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.partition(users, user => user.age > 30)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(collectionExamples.partition, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- shuffle -->
							<div>
								<h3 class="text-lg font-medium mb-2">shuffle() - Randomize order</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.shuffle([1, 2, 3, 4])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(collectionExamples.shuffle, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- size -->
							<div>
								<h3 class="text-lg font-medium mb-2">size() - Get collection size</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.size(users)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ collectionExamples.size }}</pre>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>

				<!-- Function Methods -->
				<section v-if="activeCategory === 'Function'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">Function Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- debounce -->
							<div>
								<h3 class="text-lg font-medium mb-2">debounce() - Delay function execution</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.debounce(func, 1000)</code>
								</div>
								<UCard>
									<div class="space-y-2">
										<UInput v-model="debounceInput" placeholder="Type here..." @input="handleDebounce" />
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Debounced value: {{ debouncedValue }}
										</p>
										<p class="text-xs text-gray-500">Function executes 500ms after typing stops</p>
									</div>
								</UCard>
							</div>

							<!-- throttle -->
							<div>
								<h3 class="text-lg font-medium mb-2">throttle() - Limit function calls</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.throttle(func, 1000)</code>
								</div>
								<UCard>
									<div class="space-y-2">
										<UButton @click="handleThrottle" color="primary">Click (Throttled)</UButton>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Throttled calls: {{ throttledCount }}
										</p>
										<p class="text-xs text-gray-500">Function executes at most once per second</p>
									</div>
								</UCard>
							</div>

							<!-- curry -->
							<div>
								<h3 class="text-lg font-medium mb-2">curry() - Curried functions</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.curry((a, b, c) => a + b + c)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(functionExamples.curry, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- once -->
							<div>
								<h3 class="text-lg font-medium mb-2">once() - Execute only once</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.once(func)</code>
								</div>
								<UCard>
									<div class="space-y-2">
										<UButton @click="handleOnce" color="primary">Execute Once</UButton>
										<p class="text-sm text-gray-600 dark:text-gray-400">
											Result: {{ onceResult || "Not executed yet" }}
										</p>
										<p class="text-xs text-gray-500">Function executes only the first time</p>
									</div>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>

				<!-- Object Methods -->
				<section v-if="activeCategory === 'Object'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">Object Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- clone -->
							<div>
								<h3 class="text-lg font-medium mb-2">clone() - Shallow clone</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.clone(obj)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.clone, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- cloneDeep -->
							<div>
								<h3 class="text-lg font-medium mb-2">cloneDeep() - Deep clone</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.cloneDeep(obj)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.cloneDeep, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- defaults -->
							<div>
								<h3 class="text-lg font-medium mb-2">defaults() - Default values</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.defaults({ a: 1 }, { a: 3, b: 2 })</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.defaults, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- get -->
							<div>
								<h3 class="text-lg font-medium mb-2">get() - Get nested value</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.get(obj, 'a.b.c', 'default')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.get, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- set -->
							<div>
								<h3 class="text-lg font-medium mb-2">set() - Set nested value</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.set(obj, 'a.b.c', 'value')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.set, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- merge -->
							<div>
								<h3 class="text-lg font-medium mb-2">merge() - Deep merge</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.merge({ a: 1 }, { b: 2 })</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.merge, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- omit -->
							<div>
								<h3 class="text-lg font-medium mb-2">omit() - Omit properties</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.omit({ a: 1, b: 2, c: 3 }, ['a', 'c'])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.omit, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- pick -->
							<div>
								<h3 class="text-lg font-medium mb-2">pick() - Pick properties</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.pick({ a: 1, b: 2, c: 3 }, ['a', 'c'])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.pick, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- isEmpty -->
							<div>
								<h3 class="text-lg font-medium mb-2">isEmpty() - Check if empty</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.isEmpty({}), _.isEmpty([]), _.isEmpty('')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(objectExamples.isEmpty, null, 2) }}</pre>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>

				<!-- String Methods -->
				<section v-if="activeCategory === 'String'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">String Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- camelCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">camelCase() - Convert to camelCase</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.camelCase('Foo Bar')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.camelCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- kebabCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">kebabCase() - Convert to kebab-case</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.kebabCase('Foo Bar')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.kebabCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- snakeCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">snakeCase() - Convert to snake_case</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.snakeCase('Foo Bar')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.snakeCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- startCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">startCase() - Convert to Start Case</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.startCase('--foo-bar--')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.startCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- lowerCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">lowerCase() - Convert to lowercase</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.lowerCase('Foo Bar')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.lowerCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- upperCase -->
							<div>
								<h3 class="text-lg font-medium mb-2">upperCase() - Convert to UPPERCASE</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.upperCase('foo bar')</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.upperCase, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- truncate -->
							<div>
								<h3 class="text-lg font-medium mb-2">truncate() - Truncate string</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.truncate('Hello world', { length: 5 })</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(stringExamples.truncate, null, 2) }}</pre>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>

				<!-- Utility Methods -->
				<section v-if="activeCategory === 'Utility'" class="space-y-6">
					<UCard>
						<template #header>
							<h2 class="text-xl font-semibold">Utility Methods</h2>
						</template>
						<div class="space-y-6">
							<!-- isEqual -->
							<div>
								<h3 class="text-lg font-medium mb-2">isEqual() - Deep equality check</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.isEqual({ a: 1 }, { a: 1 })</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.isEqual, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- range -->
							<div>
								<h3 class="text-lg font-medium mb-2">range() - Generate range</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.range(4), _.range(1, 5), _.range(0, 10, 2)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.range, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- times -->
							<div>
								<h3 class="text-lg font-medium mb-2">times() - Invoke function n times</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.times(3, () => Math.random())</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.times, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- random -->
							<div>
								<h3 class="text-lg font-medium mb-2">random() - Random number</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.random(0, 5), _.random(5), _.random(1.2, 5.2)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.random, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- sample -->
							<div>
								<h3 class="text-lg font-medium mb-2">sample() - Random element</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.sample([1, 2, 3, 4])</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.sample, null, 2) }}</pre>
								</UCard>
							</div>

							<!-- sampleSize -->
							<div>
								<h3 class="text-lg font-medium mb-2">sampleSize() - Random n elements</h3>
								<div class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-2">
									<code class="text-sm">_.sampleSize([1, 2, 3, 4], 2)</code>
								</div>
								<UCard>
									<pre class="text-sm">{{ JSON.stringify(utilityExamples.sampleSize, null, 2) }}</pre>
								</UCard>
							</div>
						</div>
					</UCard>
				</section>
			</div>
		</UContainer>
	</main>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import _ from "lodash";

// SEO
useSeoMeta({
	title: "Lodash Concepts Demo - Comprehensive Utility Examples",
	description:
		"Explore Lodash's major utility functions with interactive examples and demonstrations",
	keywords: "Lodash, JavaScript utilities, array methods, object methods, function utilities",
});

// Navigation
const categories = ["Array", "Collection", "Function", "Object", "String", "Utility"];
const activeCategory = ref("Array");

// Sample data
const users = [
	{ id: 1, name: "John", age: 30, city: "New York" },
	{ id: 2, name: "Jane", age: 25, city: "London" },
	{ id: 3, name: "Bob", age: 35, city: "New York" },
	{ id: 4, name: "Alice", age: 30, city: "Paris" },
];

// Array Examples
const arrayExamples = computed(() => ({
	chunk: _.chunk([1, 2, 3, 4, 5], 2),
	compact: _.compact([0, 1, false, 2, "", 3]),
	difference: _.difference([2, 1], [2, 3]),
	flatten: _.flatten([1, [2, [3, [4]], 5]]),
	flattenDeep: _.flattenDeep([1, [2, [3, [4]], 5]]),
	intersection: _.intersection([2, 1], [2, 3]),
	union: _.union([2], [1, 2]),
	uniq: _.uniq([2, 1, 2]),
	without: _.without([2, 1, 2, 3], 1, 2),
}));

// Collection Examples
const collectionExamples = computed(() => ({
	groupBy: _.groupBy(users, "age"),
	keyBy: _.keyBy(users, "id"),
	orderBy: _.orderBy(users, ["age", "name"], ["asc", "desc"]),
	partition: _.partition(users, user => user.age > 30),
	shuffle: _.shuffle([1, 2, 3, 4]),
	size: _.size(users),
}));

// Function Examples
const debounceInput = ref("");
const debouncedValue = ref("");
const throttledCount = ref(0);
const onceResult = ref<string | null>(null);

const handleDebounce = _.debounce(() => {
	debouncedValue.value = debounceInput.value;
}, 500);

const handleThrottle = _.throttle(() => {
	throttledCount.value++;
}, 1000);

const onceFunction = _.once(() => {
	return "This function executed only once!";
});

const handleOnce = () => {
	onceResult.value = onceFunction();
};

const curryFunction = _.curry((a: number, b: number, c: number) => a + b + c);

const functionExamples = computed(() => ({
	curry: {
		"curry(1)(2)(3)": curryFunction(1)(2)(3),
		"curry(1, 2)(3)": curryFunction(1, 2)(3),
		"curry(1, 2, 3)": curryFunction(1, 2, 3),
	},
}));

// Object Examples
const sampleObj = { a: { b: { c: "value" } }, d: 1 };

const objectExamples = computed(() => ({
	clone: _.clone({ a: 1, b: { c: 2 } }),
	cloneDeep: _.cloneDeep({ a: 1, b: { c: 2 } }),
	defaults: _.defaults({ a: 1 }, { a: 3, b: 2 }),
	get: {
		"get('a.b.c')": _.get(sampleObj, "a.b.c"),
		"get('a.b.d', 'default')": _.get(sampleObj, "a.b.d", "default"),
	},
	set: _.set({}, "a.b.c", "value"),
	merge: _.merge({ a: 1 }, { b: 2 }),
	omit: _.omit({ a: 1, b: 2, c: 3 }, ["a", "c"]),
	pick: _.pick({ a: 1, b: 2, c: 3 }, ["a", "c"]),
	isEmpty: {
		"isEmpty({})": _.isEmpty({}),
		"isEmpty([])": _.isEmpty([]),
		"isEmpty('')": _.isEmpty(""),
		"isEmpty(null)": _.isEmpty(null),
		"isEmpty({a: 1})": _.isEmpty({ a: 1 }),
	},
}));

// String Examples
const stringExamples = computed(() => ({
	camelCase: _.camelCase("Foo Bar"),
	kebabCase: _.kebabCase("Foo Bar"),
	snakeCase: _.snakeCase("Foo Bar"),
	startCase: _.startCase("--foo-bar--"),
	lowerCase: _.lowerCase("Foo Bar"),
	upperCase: _.upperCase("foo bar"),
	truncate: _.truncate("Hello world", { length: 5 }),
}));

// Utility Examples
const utilityExamples = computed(() => ({
	isEqual: _.isEqual({ a: 1 }, { a: 1 }),
	range: {
		"range(4)": _.range(4),
		"range(1, 5)": _.range(1, 5),
		"range(0, 10, 2)": _.range(0, 10, 2),
	},
	times: _.times(3, () => Math.random().toFixed(2)),
	random: {
		"random(0, 5)": _.random(0, 5),
		"random(5)": _.random(5),
		"random(1.2, 5.2)": _.random(1.2, 5.2, true),
	},
	sample: _.sample([1, 2, 3, 4]),
	sampleSize: _.sampleSize([1, 2, 3, 4], 2),
}));
</script>
