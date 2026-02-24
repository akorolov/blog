<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="navbar bg-accent">
	<div class="mx-auto flex w-full max-w-3xl items-center justify-between px-4">
		<nav class="flex gap-4">
			<a href="/" class="text-2xl link link-hover">Archive</a>
		</nav>
		<a href="https://www.akorl.xyz"><img src="/logo3.svg" alt="akorl.xyz" class="h-16" /></a>

	</div>
</div>

<main>
	{@render children()}
</main>
