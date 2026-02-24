<script>
	let { title, date, description, children } = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
</svelte:head>

<article class="prose prose-lg mx-auto max-w-3xl px-4 py-12">
	<header class="mb-8">
		<h1 class="mb-2">{title}</h1>
		{#if date}
			<time class="text-sm opacity-60">{new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
		{/if}
		{#if description}
			<p class="mt-2 text-lg opacity-70">{description}</p>
		{/if}
	</header>

	{@render children()}
</article>
