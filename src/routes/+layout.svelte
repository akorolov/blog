<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="alternate" type="application/rss+xml" title="akorl.xyz blog" href="/rss.xml" />
</svelte:head>

<div class="navbar bg-accent">
	<div class="mx-auto flex w-full max-w-3xl items-center justify-between px-4">
		<a href="https://www.akorl.xyz"><img src="/logo3.svg" alt="akorl.xyz" class="h-16" /></a>
		<nav class="flex gap-4">
			<a href="/" class="text-2xl link link-hover">Archive</a>
			<a href="/rss.xml" class="text-2xl link link-hover">RSS</a>
		</nav>

	</div>
</div>

<main>
	{@render children()}
</main>
