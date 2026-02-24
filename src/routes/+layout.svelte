<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar bg-accent">
	<div class="mx-auto flex w-full max-w-3xl items-center justify-between px-4">
		<a href="https://www.akorl.xyz"><img src="/logo.svg" alt="akorl.xyz" class="h-16" /></a>
		<nav class="flex gap-4">
			<a href="/" class="text-lg link link-hover">Blog Home</a>
		</nav>
	</div>
</div>

<main>
	{@render children()}
</main>
